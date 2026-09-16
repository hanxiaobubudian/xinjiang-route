import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
mkdirSync("work/qa", { recursive: true });

const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", message => {
  if (message.type() === "error") errors.push(`${message.text()} ${message.location().url}`);
});
page.on("pageerror", error => errors.push(error.message));

await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });
await page.screenshot({ path: "work/qa/desktop.png", fullPage: true });

if (await page.locator(".day-card").count() !== 29) throw new Error("Expected 29 day cards on initial load");
await page.getByRole("button", { name: "伊犁", exact: true }).click();
if (await page.locator(".day-card").count() !== 10) throw new Error("Expected 10 Yili days");
await page.getByRole("button", { name: "Day 8–14", exact: true }).click();
if (await page.locator(".day-card").count() !== 6) throw new Error("Expected 6 Yili days in Day 8–14");
await page.getByRole("button", { name: /查看 Day 11/ }).click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator("#drawer-title").textContent()).includes("那拉提")) throw new Error("Drawer did not open Day 11");
await page.getByRole("button", { name: "关闭详情" }).click();
await page.locator("#day-drawer.open").waitFor({ state: "detached" });

await page.getByRole("button", { name: "重置", exact: true }).click();
await page.locator('.map-node[data-day="29"] circle').click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator("#drawer-title").textContent()).includes("幻彩湖")) throw new Error("Map did not open Day 29");
await page.keyboard.press("Escape");
await page.getByRole("button", { name: /Day 25 花费/ }).click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator(".expense-reconcile").textContent()).includes("¥6")) throw new Error("Ledger reconciliation note missing");
await page.keyboard.press("Escape");

await page.setViewportSize({ width: 390, height: 844 });
await page.reload({ waitUntil: "networkidle" });
await page.screenshot({ path: "work/qa/mobile.png", fullPage: true });
if (await page.locator(".day-card").count() !== 29) throw new Error("Mobile render lost day cards");
if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) throw new Error("Mobile page overflows horizontally");
if (errors.length) throw new Error(`Browser errors: ${errors.join(" | ")}`);

console.log("✓ desktop and mobile pages rendered");
console.log("✓ region + day-range filtering returned expected results");
console.log("✓ Day 11 detail drawer opened and closed");
console.log("✓ map nodes and expense bars open the correct day");
console.log("✓ mobile page fits the viewport");
console.log("✓ no browser console or page errors");
await browser.close();
