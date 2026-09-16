import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../src/index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../src/app.js", import.meta.url), "utf8");
const totalsSource = js.match(/const dailyTotals = \[([\s\S]*?)\];/)?.[1] || "";
const dailyTotals = (totalsSource.match(/\d+(?:\.\d+)?/g) || []).map(Number);
const dailyTotalSum = dailyTotals.reduce((sum, value) => sum + value, 0);

const checks = [
  [html.includes('id="route-map"'), "route map container exists"],
  [html.includes('id="region-filters"'), "region filters exist"],
  [html.includes('id="day-filters"'), "day-range filters exist"],
  [html.includes('id="day-drawer"'), "day detail drawer exists"],
  [(js.match(/\{ day: \d+, region:/g) || []).length === 29, "all 29 days are present"],
  [js.includes('5801 次 22:29'), "known overnight train detail is preserved"],
  [js.includes('state.region') && js.includes('state.dayRange'), "combined filters are wired"],
  [js.includes('openDrawer') && js.includes('closeDrawer'), "day-detail interaction is wired"],
  [js.includes('8973.26') && js.includes('8972.26'), "final and daily-ledger totals are preserved"],
  [dailyTotals.length === 29 && Math.abs(dailyTotalSum - 8972.26) < 0.001, "29 daily totals reconcile to ¥8,972.26"],
  [js.includes('Day ${item.day} 花费') && html.includes('id="daily-expense-chart"'), "daily expense chart is wired"]
];

const failed = checks.filter(([ok]) => !ok);
for (const [ok, message] of checks) console.log(`${ok ? "✓" : "✗"} ${message}`);
if (failed.length) process.exit(1);
