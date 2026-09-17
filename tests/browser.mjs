import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
mkdirSync("work/qa", { recursive: true });

const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
async function checkRouteStepAlignment(targetPage) {
  const centered = await targetPage.locator(".route-step").evaluateAll(steps => steps.every(step => {
    const range = document.createRange();
    range.selectNodeContents(step);
    const text = range.getBoundingClientRect();
    const card = step.getBoundingClientRect();
    return Math.abs((text.top + text.bottom) / 2 - (card.top + card.bottom) / 2) < 2;
  }));
  if (!centered) throw new Error("Route-step text is not vertically centered");
}
page.on("console", message => {
  if (message.type() === "error") errors.push(`${message.text()} ${message.location().url}`);
});
page.on("pageerror", error => errors.push(error.message));

await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });
const iconSize = await page.evaluate(async () => {
  const icon = new Image();
  icon.src = document.querySelector('link[rel="icon"]').href;
  await icon.decode();
  return [icon.naturalWidth, icon.naturalHeight];
});
if (iconSize.join("x") !== "32x32") throw new Error("Favicon must load as a 32x32 image");
const fallbackIcon = await page.request.get("http://127.0.0.1:5173/favicon.ico");
if (fallbackIcon.status() !== 200 || fallbackIcon.headers()["content-type"] !== "image/png") throw new Error("Fallback favicon failed");
if (await page.locator("#films .film-placeholder").count() !== 1) throw new Error("Expected one independent highlight-video placeholder");
if (await page.locator("#films video, #films iframe").count()) throw new Error("Video placeholder must not expose unavailable playback");
if (await page.locator("[data-film]").count() !== 3) throw new Error("Expected three film slots");
await page.getByRole("button", { name: "下一条视频", exact: true }).click();
if (await page.locator("#film-title").textContent() !== "旅行精华 02") throw new Error("Film next failed");
await page.getByRole("button", { name: "查看第 3 条视频", exact: true }).click();
await page.getByRole("button", { name: "下一条视频", exact: true }).click();
if (await page.locator("#film-title").textContent() !== "旅行精华 01") throw new Error("Film loop failed");
await page.getByRole("button", { name: "上一条视频", exact: true }).click();
if (await page.locator("#film-title").textContent() !== "旅行精华 03") throw new Error("Film previous failed");
await page.locator("#film-slide").focus();
await page.keyboard.press("ArrowRight");
if (await page.locator('[data-film="0"]').getAttribute("aria-current") !== "true") throw new Error("Film keyboard navigation failed");
await page.evaluate(() => window.scrollTo(0, 0));
const travelerPosition = await page.locator(".route-traveler").evaluate(node => node.getCTM().e);
await page.waitForFunction(previous => Math.abs(document.querySelector(".route-traveler").getCTM().e - previous) > 1, travelerPosition);
await page.locator(".hero-route").evaluate(node => Promise.all(node.getAnimations().map(animation => animation.finished)));
await page.screenshot({ path: "work/qa/desktop.png", fullPage: true });
await page.screenshot({ path: "work/qa/desktop-hero.png" });

if (await page.locator(".day-card").count() !== 29) throw new Error("Expected 29 day cards on initial load");
await page.getByRole("button", { name: "伊犁", exact: true }).click();
if (await page.locator(".day-card").count() !== 10) throw new Error("Expected 10 Yili days");
await page.getByRole("button", { name: "Day 8–14", exact: true }).click();
if (await page.locator(".day-card").count() !== 6) throw new Error("Expected 6 Yili days in Day 8–14");
await page.getByRole("button", { name: /查看 Day 11/ }).click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator("#drawer-title").textContent()).includes("那拉提")) throw new Error("Drawer did not open Day 11");
await checkRouteStepAlignment(page);
await page.getByRole("button", { name: "关闭详情" }).click();
await page.locator("#day-drawer.open").waitFor({ state: "detached" });

await page.getByRole("button", { name: "重置", exact: true }).click();
await page.locator('.map-node[data-day="29"] .node-hit').click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator("#drawer-title").textContent()).includes("幻彩湖")) throw new Error("Map did not open Day 29");
await page.keyboard.press("Escape");
await page.getByRole("button", { name: /Day 25 花费/ }).click();
await page.locator("#day-drawer.open").waitFor();
if (!(await page.locator(".expense-reconcile").textContent()).includes("¥6")) throw new Error("Ledger reconciliation note missing");
await page.keyboard.press("Escape");

for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 844 });
  if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) throw new Error(`Page overflows at ${width}px`);
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
mobile.on("pageerror", error => errors.push(error.message));
await mobile.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });
await mobile.locator(".hero-route").evaluate(node => Promise.all(node.getAnimations().map(animation => animation.finished)));
await mobile.screenshot({ path: "work/qa/mobile.png", fullPage: true });
await mobile.screenshot({ path: "work/qa/mobile-hero.png" });
await mobile.getByRole("link", { name: "旅行影像", exact: true }).tap();
await mobile.getByRole("button", { name: "查看第 2 条视频", exact: true }).tap();
if (await mobile.locator("#film-title").textContent() !== "旅行精华 02") throw new Error("Mobile film selection failed");
await mobile.locator("#film-slide").scrollIntoViewIfNeeded();
const filmBox = await mobile.locator("#film-slide").boundingBox();
const touch = await mobile.context().newCDPSession(mobile);
const swipeY = Math.max(10, filmBox.y) + 60;
await touch.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: 300, y: swipeY }] });
for (const x of [260, 210, 160, 100]) await touch.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x, y: swipeY }] });
await touch.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
if (await mobile.locator("#film-title").textContent() !== "旅行精华 03") throw new Error("Mobile film swipe failed");
await mobile.locator("#films").screenshot({ path: "work/qa/mobile-films.png" });
if (await mobile.locator(".day-card").count() !== 29) throw new Error("Mobile render lost day cards");
await mobile.getByRole("link", { name: "每日行程", exact: true }).tap();
await mobile.getByRole("button", { name: "伊犁", exact: true }).tap();
if (await mobile.locator(".day-card").count() !== 10) throw new Error("Mobile region filter failed");
await mobile.getByRole("button", { name: "Day 8–14", exact: true }).tap();
if (await mobile.locator(".day-card").count() !== 6) throw new Error("Mobile combined filter failed");
await mobile.getByRole("button", { name: /查看 Day 11/ }).tap();
await mobile.locator("#day-drawer.open").waitFor();
await mobile.locator("#day-drawer").evaluate(node => Promise.all(node.getAnimations().map(animation => animation.finished)));
await mobile.screenshot({ path: "work/qa/mobile-drawer.png" });
await checkRouteStepAlignment(mobile);
const drawerBounds = await mobile.locator("#day-drawer").boundingBox();
if (drawerBounds.y > 80 || drawerBounds.y < 0 || Math.abs(drawerBounds.y + drawerBounds.height - 844) > 2) throw new Error("Mobile bottom sheet does not fit viewport");
if (await mobile.locator("#day-drawer").evaluate(node => node.scrollWidth > node.clientWidth)) throw new Error("Mobile drawer overflows");
await mobile.getByRole("button", { name: "关闭详情" }).tap();
await mobile.getByRole("button", { name: "重置", exact: true }).tap();
await mobile.locator('.map-node[data-day="29"] .node-hit').tap();
await mobile.locator("#day-drawer.open").waitFor();
if (!(await mobile.locator("#drawer-title").textContent()).includes("幻彩湖")) throw new Error("Mobile map tap failed");
await mobile.getByRole("button", { name: "关闭详情" }).tap();
await mobile.getByRole("button", { name: /Day 25 花费/ }).tap();
await mobile.locator("#day-drawer.open").waitFor();
if (!(await mobile.locator(".expense-reconcile").textContent()).includes("¥6")) throw new Error("Mobile expense tap failed");
await mobile.getByRole("button", { name: "关闭详情" }).tap();
await mobile.emulateMedia({ reducedMotion: "reduce" });
if (await mobile.locator(".route-traveler").isVisible()) throw new Error("Reduced-motion traveler must be hidden");
if (await mobile.locator(".hero-route").evaluate(node => getComputedStyle(node).animationName !== "none")) throw new Error("Reduced-motion route must be static");
if (errors.length) throw new Error(`Browser errors: ${errors.join(" | ")}`);

console.log("✓ desktop and mobile pages rendered");
console.log("✓ region + day-range filtering returned expected results");
console.log("✓ Day 11 detail drawer opened and closed");
console.log("✓ map nodes and expense bars open the correct day");
console.log("✓ responsive layouts fit 320–1440px viewports");
console.log("✓ mobile touch navigation, combined filters, map, chart and drawer work");
console.log("✓ route traveler animates and reduced-motion preference is respected");
console.log("✓ no browser console or page errors");
await browser.close();
