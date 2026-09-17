const itinerary = [
  { day: 1, region: "北疆", city: "乌鲁木齐", title: "用一场 City Walk 开场", route: "乌鲁木齐站 → 红山公园 → 国际大巴扎 → 和田二街 → 金泉商城", transport: ["地铁 1 号线", "步行"], spots: ["红山公园", "国际大巴扎", "和田二街", "金泉商城"], steps: ["车站寄存行李", "地铁串联市区", "夜逛大巴扎"], note: "乌鲁木齐站寄存约 50 分钟；市内优先地铁，单段约 ¥2–3。", level: "详细" },
  { day: 2, region: "北疆", city: "奎屯", title: "一天看完两座峡谷", route: "乌鲁木齐 → 奎屯 → 安集海大峡谷 → 独山子大峡谷 → 博乐", transport: ["火车", "当地拼车", "夜班火车"], spots: ["安集海大峡谷", "独山子大峡谷"], steps: ["火车到奎屯", "拼车串联峡谷", "5801 次赴博乐"], note: "5801 次 22:29 发车，次日 06:40 抵达博乐，夜间移动省下一晚住宿。", level: "详细" },
  { day: 3, region: "北疆", city: "博乐 · 伊宁", title: "把一天留给赛里木湖", route: "博乐 → 赛里木湖东门 → 松树头 → 果子沟 → 伊宁六星街", transport: ["拼车", "景区车", "城际交通"], spots: ["赛里木湖", "松树头", "果子沟全景", "六星街"], steps: ["博乐拼车到东门", "景交车深度环湖", "傍晚前往伊宁"], note: "博乐拼车约 ¥40/人；赛湖门票与区间车合计 ¥129。", level: "详细" },
  { day: 4, region: "伊犁", city: "昭苏", title: "沿伊昭公路去看玉湖", route: "伊宁 → 伊昭公路 → 昭苏 → 玉湖 → 昭苏", transport: ["班车 / 拼车", "景区接驳"], spots: ["伊昭公路", "昭苏玉湖"], steps: ["伊宁出发", "入住昭花惜时", "15:30 去玉湖"], note: "玉湖约 15:30 出发，22:00 返回昭苏；当天入住昭花惜时青旅。", level: "详细" },
  { day: 5, region: "伊犁", city: "夏塔", title: "走进雪山脚下的鲜花台", route: "昭苏 → 夏塔景区 → 鲜花台 → 夏塔村", transport: ["班车", "景交车", "徒步"], spots: ["夏塔古道", "鲜花台", "木扎尔特雪山"], steps: ["线下排队购票", "景交车进山", "鲜花台徒步"], note: "购票排队约 1.5 小时；15:00 到鲜花台，18:00 下山排景交车，21:00 抵达山下民宿。", level: "详细" },
  { day: 6, region: "伊犁", city: "夏塔 · 昭苏", title: "在小村里慢下来", route: "夏塔村 → 村中散步 → 昭苏", transport: ["步行", "班车"], spots: ["夏塔村", "昭苏县城"], steps: ["上午村里散步", "下午返回昭苏", "青旅晚餐"], note: "连续赶路后的缓冲日，不塞景点，把体力留给后面的草原段。", level: "详细" },
  { day: 7, region: "伊犁", city: "昭苏 → 特克斯", title: "坐顺风车去八卦城", route: "昭苏 → 特克斯八卦城", transport: ["顺风车"], spots: ["特克斯八卦城"], steps: ["10:00 起床", "11:00 寄快递", "14:50 顺风车出发"], note: "这一天先抵达特克斯；琼库什台从 Day 8 开始。", level: "详细" },
  { day: 8, region: "伊犁", city: "特克斯 → 琼库什台", title: "从八卦城进村", route: "特克斯 → 琼库什台村", transport: ["村镇班车 / 拼车"], spots: ["特克斯八卦城", "琼库什台村"], steps: ["特克斯补给", "乘车进山", "入住村中"], note: "琼库什台建议至少住两晚，后山徒步留到第二天。", level: "详细" },
  { day: 9, region: "伊犁", city: "琼库什台", title: "走后山，等一场日落", route: "琼库什台村 → 后山牧道 → 日落点 → 村落", transport: ["徒步"], spots: ["琼库什台后山", "牧道", "日落"], steps: ["村中出发", "后山徒步", "看完日落返回"], note: "全天留在琼库什台，不把后山行程压缩成匆忙打卡。", level: "详细" },
  { day: 10, region: "伊犁", city: "琼库什台 → 特克斯", title: "离开村落，返回特克斯", route: "琼库什台 → 特克斯", transport: ["拼车 / 村镇交通"], spots: ["琼库什台村", "特克斯"], steps: ["上午离村", "山路转场", "返回特克斯休整"], note: "真实路线为返回特克斯，并非前一版写的巩留景区日。", level: "详细" },
  { day: 11, region: "伊犁", city: "特克斯 · 新源 · 那拉提", title: "三段换乘抵达那拉提", route: "特克斯 → 新源 → 那拉提", transport: ["县际班车", "接驳车"], spots: ["新源县城", "那拉提镇"], steps: ["特克斯出发", "新源换乘", "抵达那拉提"], note: "公共交通靠县城换乘，原账本当日合计 ¥293。", level: "详细" },
  { day: 12, region: "伊犁", city: "那拉提", title: "把一天留给那拉提草原", route: "那拉提镇 → 那拉提草原 → 那拉提镇", transport: ["景区车", "步行"], spots: ["那拉提草原", "空中草原"], steps: ["景区入园", "区间车游览", "返回镇上"], note: "原账本当日合计 ¥316。", level: "详细" },
  { day: 13, region: "伊犁", city: "唐布拉 · 新源", title: "沿百里画廊回到新源", route: "那拉提 / 新源 → 唐布拉 → 布隆沟 → 新源", transport: ["拼车", "区间接驳"], spots: ["唐布拉百里画廊", "布隆沟"], steps: ["出发去唐布拉", "布隆沟停留", "返回新源"], note: "原账本当日合计 ¥230。", level: "详细" },
  { day: 14, region: "南疆", city: "独库公路 · 库车", title: "沿独库中南段抵达库车", route: "新源 → 独库公路中段 / 南段 → 库车", transport: ["拼车 / 线路车"], spots: ["独库公路", "天山沿线"], steps: ["新源出发", "翻越独库公路", "抵达库车"], note: "当天重点是独库公路转场，不把它写成库车峡谷一日游。", level: "详细" },
  { day: 15, region: "南疆", city: "库车", title: "在库车休息闲逛", route: "青旅 → 龟兹小巷 → 库车街巷", transport: ["公交", "步行"], spots: ["龟兹小巷", "库车老城"], steps: ["青旅葡萄架发呆", "龟兹小巷散步", "准备南疆转场"], note: "低强度休整日，原账本当日合计 ¥99。", level: "详细" },
  { day: 16, region: "南疆", city: "库车 → 喀什", title: "坐火车横穿南疆", route: "库车 → 喀什", transport: ["火车"], spots: ["南疆铁路沿线"], steps: ["库车站出发", "列车转场", "抵达喀什"], note: "真实记录从这一天进入喀什段。", level: "详细" },
  { day: 17, region: "南疆", city: "喀什", title: "第一次走进喀什古城", route: "喀什古城 → 油画一条街 → 百年茶馆", transport: ["公交", "步行"], spots: ["喀什古城", "油画一条街", "百年茶馆"], steps: ["古城慢逛", "油画街停留", "老茶馆收尾"], note: "全天留给古城，不与塔县转场挤在同一天。", level: "详细" },
  { day: 18, region: "南疆", city: "喀什 → 塔县", title: "沿中巴友谊公路上高原", route: "喀什 → 白沙湖 → 木吉火山 → 塔什库尔干", transport: ["包车 / 拼车"], spots: ["白沙湖", "木吉火山", "帕米尔高原"], steps: ["喀什出发", "白沙湖停靠", "木吉火山后进塔县"], note: "进入边境区域前提前确认证件；原账本当日合计 ¥341。", level: "详细" },
  { day: 19, region: "南疆", city: "塔什库尔干", title: "盘龙古道的一天", route: "塔县 → 盘龙古道 → 斑迪尔蓝湖 → 帕米尔之眼 → 塔县", transport: ["包车 / 拼车"], spots: ["盘龙古道", "斑迪尔蓝湖", "帕米尔之眼", "托格伦夏家访"], steps: ["盘龙古道", "17:00 帕米尔之眼", "18:00 家访后返程"], note: "高海拔且弯道密集；原账本当日合计 ¥362。", level: "详细" },
  { day: 20, region: "南疆", city: "塔县 → 喀什", title: "穿过风雪与沙尘返回喀什", route: "塔县 → 塔合曼湿地 → 慕士塔格冰川 4 号 → 白沙湖 → 喀什", transport: ["包车 / 拼车"], spots: ["塔合曼湿地", "慕士塔格冰川 4 号", "白沙湖"], steps: ["金草滩短停", "17:00 离开冰川", "凌晨 1:30 到喀什"], note: "途中遇沙尘暴和泥石流，被困约 4 小时。", level: "详细" },
  { day: 21, region: "南疆", city: "喀什", title: "高原归来，休息一天", route: "喀什市区 → 古城周边 → 休整", transport: ["公交", "步行"], spots: ["喀什古城", "市区街巷"], steps: ["睡到自然醒", "整理照片", "准备莎车段"], note: "原账本当日合计 ¥269。", level: "详细" },
  { day: 22, region: "南疆", city: "喀什 → 莎车", title: "坐火车去莎车", route: "喀什 → 莎车", transport: ["火车", "市内打车"], spots: ["莎车老城", "叶尔羌汗王宫周边"], steps: ["喀什出发", "抵达莎车", "老城散步"], note: "莎车是前一版网站漏掉的重要停靠点。", level: "详细" },
  { day: 23, region: "南疆", city: "莎车 → 和田", title: "从莎车继续坐到和田", route: "莎车 → T4379 次 → 和田 → 三只猫青旅", transport: ["打车", "火车", "公交"], spots: ["南疆铁路沿线", "和田市区"], steps: ["莎车打车到站", "T4379 到和田", "12 路公交进城"], note: "当天到和田入住三只猫青旅。", level: "详细" },
  { day: 24, region: "南疆", city: "和田", title: "团城与约特干故城", route: "三只猫青旅 → 团城 → 约特干故城 → 和田", transport: ["12 路公交", "短途交通"], spots: ["和田团城", "约特干故城", "开城仪式"], steps: ["公交去团城", "前往约特干", "看演出后返回"], note: "团城体验一般；约特干故城的演出和开城仪式更值得停留。", level: "详细" },
  { day: 25, region: "南疆", city: "翡翠湖 · 吐鲁番", title: "看完翡翠湖，坐火车去东疆", route: "和田 → 翡翠湖 → 和田 → 吐鲁番", transport: ["拼车", "景交车", "火车"], spots: ["和田翡翠湖", "吐鲁番葡萄小镇"], steps: ["往返翡翠湖", "回和田乘车", "吐鲁番入住"], note: "原账本合计 ¥581.50；当前可见逐笔明细合计 ¥575.50，保留 ¥6 待核对。", level: "详细" },
  { day: 26, region: "东疆", city: "吐鲁番", title: "抵达火洲，躺平休整", route: "吐鲁番葡萄小镇 → 市区休整", transport: ["步行", "市内交通"], spots: ["葡萄小镇", "吐鲁番市区"], steps: ["睡到自然醒", "补给", "避开高温"], note: "真实记录为休整日，食物 ¥68.50、住宿 ¥48。", level: "详细" },
  { day: 27, region: "东疆", city: "吐鲁番", title: "葡萄沟、沙浴与夜市", route: "吐鲁番 → 葡萄沟 → 沙浴医院 → 夜市", transport: ["公交 / 打车", "景区车"], spots: ["葡萄沟", "沙浴医院", "吐鲁番夜市"], steps: ["葡萄沟游览", "沙浴 + 泡澡", "夜市吃饭"], note: "葡萄沟区间车 ¥23；沙浴和泡澡走医保。", level: "详细" },
  { day: 28, region: "东疆", city: "吐鲁番 → 哈密", title: "坎儿井之后，坐 Z38 去哈密", route: "坎儿井 → 号脉 → 沙浴泡澡 → 吐鲁番站 → 哈密", transport: ["市内交通", "Z38 次火车"], spots: ["坎儿井", "沙浴"], steps: ["坎儿井", "号脉与沙浴", "Z38 前往哈密"], note: "这一天仍从吐鲁番出发，乘 Z38 到哈密。", level: "详细" },
  { day: 29, region: "东疆", city: "哈密 · 幻彩湖", title: "在幻彩湖结束第 29 天", route: "哈密 → 幻彩湖 → 19:30 返回哈密", transport: ["拼车 / 小团"], spots: ["幻彩湖", "戈壁地貌"], steps: ["哈密集合", "穿越戈壁", "19:30 返回哈密"], note: "真正的收官日：出行 ¥100、食物 ¥139、住宿 ¥35。", level: "详细" }
];

const dailyTotals = [
  1006, 222, 422.4, 363.66, 229, 249, 212, 329, 149, 307.6,
  293, 316, 230, 294, 99, 290, 125.5, 341, 362, 361,
  269, 307.3, 158.5, 228, 581.5, 116.5, 388.8, 447.5, 274
];

const expenseSummary = {
  total: 8973.26,
  dailyRecordedTotal: 8972.26,
  categories: [
    { label: "出行", value: 3631.6 },
    { label: "其他（含门票/购物）", value: 2003.8 },
    { label: "食物", value: 1929.7 },
    { label: "住宿", value: 1408.16 }
  ],
  regions: [
    { label: "伊犁 + 乌鲁木齐", value: 4328.66 },
    { label: "南疆", value: 3410.8 },
    { label: "东疆", value: 1233.8 }
  ]
};

const expenseDetails = {
  1: {
    lines: [["5801 次硬卧", 122], ["行李寄存", 20], ["午餐", 35], ["晚餐 + 零食", 20], ["公交 + 地铁", 10]],
    reconcile: "最终逐日账本记为 ¥1,006；当前聊天能还原的明细为 ¥207，差额保留待补。"
  },
  3: {
    lines: [["博乐 → 赛里木湖拼车", 40], ["门票 + 区间车", 129], ["赛里木湖 → 伊宁", 49]],
    reconcile: "以上为可明确核对的交通与门票，其他消费包含在当日总额 ¥422.40 中。"
  },
  5: { lines: [["住宿", 75], ["食物", 21], ["交通", 28], ["门票 + 景交", 90], ["购物", 15]] },
  20: { lines: [["交通", 230], ["食物", 39], ["住宿", 25], ["门票", 67]] },
  23: { lines: [["莎车打车", 6], ["T4379 火车", 43.5], ["和田 12 路公交", 1], ["住宿", 45], ["食物", 50], ["其他", 13]] },
  24: { lines: [["12 路公交", 1], ["团城 → 约特干", 10], ["辣子鸡", 70], ["瓜子绿茶", 4], ["饼", 7], ["枣", 5], ["核桃", 5], ["奶啤", 5], ["三只猫青旅", 41], ["桑皮纸", 50], ["3 袋果干", 30]] },
  25: {
    lines: [["和田往返翡翠湖", 158], ["景交车", 10], ["和田 → 吐鲁番", 365], ["茉莉绿", 12.5], ["划船", 30]],
    reconcile: "当前可见明细为 ¥575.50；原始总账记为 ¥581.50，尚有 ¥6 待从原表核对。"
  },
  26: { lines: [["食物", 68.5], ["住宿", 48]] },
  27: {
    lines: [["葡萄沟区间车", 23], ["沙浴 + 泡澡", 0]],
    reconcile: "沙浴与泡澡走医保；其余消费包含在当日总额 ¥388.80 中。"
  },
  29: { lines: [["出行", 100], ["食物", 139], ["住宿", 35]] }
};

itinerary.forEach((item, index) => {
  item.total = dailyTotals[index];
  item.expense = expenseDetails[item.day] || null;
});

const routeStops = [
  { name: "乌鲁木齐", day: 1, x: 650, y: 150, type: "major", tx: 12, ty: -14 },
  { name: "奎屯", day: 2, x: 518, y: 152, type: "major", tx: -12, ty: -16, anchor: "end" },
  { name: "赛里木湖", day: 3, x: 348, y: 166, type: "scenic", tx: -12, ty: -16, anchor: "end" },
  { name: "伊宁", day: 3, x: 364, y: 237, type: "major", tx: -14, ty: 28, anchor: "end" },
  { name: "昭苏", day: 4, x: 342, y: 315, type: "major", tx: -12, ty: 30, anchor: "end" },
  { name: "夏塔", day: 5, x: 283, y: 345, type: "scenic", tx: -12, ty: 28, anchor: "end" },
  { name: "特克斯", day: 7, x: 405, y: 302, type: "major", tx: 14, ty: 27 },
  { name: "琼库什台", day: 8, x: 393, y: 360, type: "scenic", tx: 14, ty: 28 },
  { name: "特克斯", day: 10, x: 467, y: 340, type: "major", tx: 12, ty: -15 },
  { name: "那拉提", day: 11, x: 493, y: 274, type: "scenic", tx: 12, ty: -15 },
  { name: "新源", day: 11, x: 568, y: 292, type: "major", tx: 12, ty: 28 },
  { name: "库车", day: 14, x: 584, y: 397, type: "major", tx: 12, ty: -15 },
  { name: "喀什", day: 16, x: 250, y: 430, type: "major", tx: -14, ty: -15, anchor: "end" },
  { name: "塔县", day: 18, x: 176, y: 496, type: "scenic", tx: -14, ty: 28, anchor: "end" },
  { name: "莎车", day: 22, x: 318, y: 458, type: "major", tx: 14, ty: -15 },
  { name: "和田", day: 23, x: 405, y: 492, type: "major", tx: 14, ty: 28 },
  { name: "吐鲁番", day: 26, x: 762, y: 224, type: "major", tx: 14, ty: 28 },
  { name: "哈密", day: 29, x: 938, y: 258, type: "major", tx: 14, ty: -15 }
];

const state = { region: "全部", dayRange: "全部" };
const regions = ["全部", "北疆", "伊犁", "南疆", "东疆"];
const ranges = [
  { label: "全部", value: "全部", min: 1, max: 29 },
  { label: "Day 1–7", value: "1-7", min: 1, max: 7 },
  { label: "Day 8–14", value: "8-14", min: 8, max: 14 },
  { label: "Day 15–21", value: "15-21", min: 15, max: 21 },
  { label: "Day 22–29", value: "22-29", min: 22, max: 29 }
];

const regionFilters = document.querySelector("#region-filters");
const dayFilters = document.querySelector("#day-filters");
const dayGrid = document.querySelector("#day-grid");
const routeMap = document.querySelector("#route-map");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const drawer = document.querySelector("#day-drawer");
const backdrop = document.querySelector("#drawer-backdrop");
const drawerContent = document.querySelector("#drawer-content");
const categoryBreakdown = document.querySelector("#category-breakdown");
const regionBreakdown = document.querySelector("#region-breakdown");
const dailyExpenseChart = document.querySelector("#daily-expense-chart");
let lastFocusedElement = null;

function money(value) {
  return new Intl.NumberFormat("zh-CN", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);
}

function makeFilterButton(label, value, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `filter-button${active ? " active" : ""}`;
  button.textContent = label;
  button.dataset.value = value;
  button.setAttribute("aria-pressed", String(active));
  button.addEventListener("click", onClick);
  return button;
}

function renderFilters() {
  regionFilters.replaceChildren(...regions.map(region => makeFilterButton(region, region, state.region === region, () => {
    state.region = region;
    render();
  })));
  dayFilters.replaceChildren(...ranges.map(range => makeFilterButton(range.label, range.value, state.dayRange === range.value, () => {
    state.dayRange = range.value;
    render();
  })));
}

function getFilteredDays() {
  const range = ranges.find(item => item.value === state.dayRange) || ranges[0];
  return itinerary.filter(item =>
    (state.region === "全部" || item.region === state.region) &&
    item.day >= range.min && item.day <= range.max
  );
}

function createDayCard(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "day-card";
  button.dataset.day = String(item.day);
  button.setAttribute("aria-label", `查看 Day ${item.day} ${item.city} 详情`);
  button.innerHTML = `
    <span class="card-topline">
      <span class="day-number">DAY ${String(item.day).padStart(2, "0")}</span>
      <span class="region-tag">${item.region} · ${item.level}</span>
    </span>
    <h3>${item.city}</h3>
    <p class="route-short">${item.title}</p>
    <span class="card-total">¥${money(item.total)}</span>
    <span class="transport-row">${item.transport.slice(0, 2).map(mode => `<span>${mode}</span>`).join("")}</span>
  `;
  button.addEventListener("click", () => openDrawer(item.day, button));
  return button;
}

function renderDays() {
  const filtered = getFilteredDays();
  dayGrid.replaceChildren(...filtered.map(createDayCard));
  resultCount.textContent = filtered.length === 29 ? "显示全部 29 天" : `筛选出 ${filtered.length} 天`;
  emptyState.hidden = filtered.length !== 0;
  dayGrid.hidden = filtered.length === 0;
  updateMapFilter(filtered);
}

function buildMap() {
  const ns = "http://www.w3.org/2000/svg";
  const outline = document.createElementNS(ns, "path");
  outline.setAttribute("class", "map-outline");
  outline.setAttribute("d", "M72 198 136 107l141-51 128 20 96-43 144 45 114-24 103 57 88 111-41 80 43 71-77 91-135-15-101 53-136-12-97 48-125-36-106 18-73-80 41-95-77-52 23-74Z");
  routeMap.append(outline);

  const line = document.createElementNS(ns, "polyline");
  line.setAttribute("class", "map-line");
  line.setAttribute("points", routeStops.map(stop => `${stop.x},${stop.y}`).join(" "));
  routeMap.append(line);

  routeStops.forEach(stop => {
    const group = document.createElementNS(ns, "g");
    group.setAttribute("class", `map-node ${stop.type}`);
    group.setAttribute("data-day", String(stop.day));
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", `Day ${stop.day} ${stop.name}`);
    group.setAttribute("transform", `translate(${stop.x} ${stop.y})`);

    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("r", stop.type === "major" ? "7" : "6");
    const hitArea = document.createElementNS(ns, "circle");
    hitArea.setAttribute("class", "node-hit");
    hitArea.setAttribute("r", "22");
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", String(stop.tx));
    text.setAttribute("y", String(stop.ty));
    if (stop.anchor) text.setAttribute("text-anchor", stop.anchor);
    text.textContent = stop.name;
    const dayText = document.createElementNS(ns, "text");
    dayText.setAttribute("class", "node-day");
    dayText.setAttribute("x", String(stop.tx));
    dayText.setAttribute("y", String(stop.ty + (stop.ty > 0 ? 14 : -14)));
    if (stop.anchor) dayText.setAttribute("text-anchor", stop.anchor);
    dayText.textContent = `DAY ${String(stop.day).padStart(2, "0")}`;
    group.append(circle, hitArea, text, dayText);
    group.addEventListener("click", event => openDrawer(stop.day, event.currentTarget));
    group.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDrawer(stop.day, event.currentTarget);
      }
    });
    routeMap.append(group);
  });
}

function updateMapFilter(filtered) {
  const visibleDays = new Set(filtered.map(item => item.day));
  document.querySelectorAll(".map-node").forEach(node => {
    node.classList.toggle("is-dimmed", !visibleDays.has(Number(node.dataset.day)));
  });
  const mapSummary = document.querySelector("#map-summary");
  const regionLabel = state.region === "全部" ? "全疆路线" : `${state.region}路线`;
  mapSummary.innerHTML = `<strong>${filtered.length}</strong><span>天符合当前条件 · ${regionLabel} · ${state.dayRange === "全部" ? "Day 1–29" : `Day ${state.dayRange}`}</span>`;
}

function renderExpenseDashboard() {
  const maxCategory = Math.max(...expenseSummary.categories.map(item => item.value));
  categoryBreakdown.innerHTML = expenseSummary.categories.map(item => `
    <div class="bar-item">
      <div class="bar-item-head"><span>${item.label}</span><strong>¥${money(item.value)}</strong></div>
      <div class="bar-track"><span class="bar-fill" style="width:${(item.value / maxCategory * 100).toFixed(1)}%"></span></div>
    </div>
  `).join("");

  regionBreakdown.innerHTML = expenseSummary.regions.map(item => `
    <div class="region-ledger-item"><span>${item.label}</span><strong>¥${money(item.value)}</strong></div>
  `).join("");

  const maxDay = Math.max(...dailyTotals);
  dailyExpenseChart.replaceChildren(...itinerary.map(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "expense-column";
    button.dataset.amount = `¥${money(item.total)}`;
    button.setAttribute("aria-label", `Day ${item.day} 花费 ¥${money(item.total)}，查看详情`);
    button.innerHTML = `<span class="expense-bar" style="height:${Math.max(8, item.total / maxDay * 135).toFixed(1)}px"></span><small>${item.day}</small>`;
    button.addEventListener("click", () => openDrawer(item.day, button));
    return button;
  }));
}

function openDrawer(day, trigger) {
  const item = itinerary.find(entry => entry.day === day);
  if (!item) return;
  lastFocusedElement = trigger || document.activeElement;
  drawerContent.innerHTML = `
    <p class="drawer-kicker">DAY ${String(item.day).padStart(2, "0")} · ${item.region} · ${item.level}</p>
    <h2 class="drawer-title" id="drawer-title">${item.title}</h2>
    <p class="drawer-route">${item.route}</p>
    <div class="drawer-total"><span>当天账本合计</span><strong>¥${money(item.total)}</strong></div>
    <div class="detail-block">
      <h3>花销明细</h3>
      ${item.expense ? `
        <ul class="expense-lines">${item.expense.lines.map(([label, value]) => `<li><span>${label}</span><strong>¥${money(value)}</strong></li>`).join("")}</ul>
        ${item.expense.reconcile ? `<p class="expense-reconcile">${item.expense.reconcile}</p>` : ""}
      ` : `<p>原聊天目前只检索到当天合计，逐笔项目待从原始账单继续补充。</p>`}
    </div>
    <div class="detail-block">
      <h3>公共交通</h3>
      <ul>${item.transport.map(mode => `<li>${mode}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h3>当天景点</h3>
      <ul>${item.spots.map(spot => `<li>${spot}</li>`).join("")}</ul>
    </div>
    <div class="detail-block">
      <h3>关键动线</h3>
      <div class="route-steps">${item.steps.map(step => `<div class="route-step">${step}</div>`).join("")}</div>
    </div>
    <div class="record-note">${item.note}</div>
  `;
  backdrop.hidden = false;
  requestAnimationFrame(() => {
    backdrop.classList.add("open");
    drawer.classList.add("open");
  });
  drawer.setAttribute("aria-hidden", "false");
  drawer.scrollTop = 0;
  document.body.classList.add("drawer-open");
  document.querySelector("#drawer-close").focus();
}

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => { backdrop.hidden = true; }, 290);
  if (lastFocusedElement?.focus) lastFocusedElement.focus();
}

function render() {
  renderFilters();
  renderDays();
}

document.querySelector("#reset-filters").addEventListener("click", () => {
  state.region = "全部";
  state.dayRange = "全部";
  render();
});
document.querySelector("#drawer-close").addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && drawer.classList.contains("open")) closeDrawer();
});

// Three independent highlight-film slots; no daily mapping or autoplay.
const filmCarousel = document.querySelector(".film-carousel");
const filmSlide = document.querySelector("#film-slide");
const filmDots = [...document.querySelectorAll("[data-film]")];
let filmIndex = 0;

function showFilm(index) {
  filmIndex = (index + filmDots.length) % filmDots.length;
  const number = String(filmIndex + 1).padStart(2, "0");
  document.querySelector("#film-title").textContent = `旅行精华 ${number}`;
  document.querySelector("#film-counter").textContent = `${number} / 03 · 待更新`;
  filmSlide.setAttribute("aria-label", `第 ${filmIndex + 1} 条，共 3 条`);
  filmDots.forEach((dot, position) => {
    if (position === filmIndex) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    filmSlide.getAnimations().forEach(animation => animation.cancel());
    filmSlide.animate([{ opacity: .4 }, { opacity: 1 }], { duration: 220 });
  }
}

document.querySelector("#film-prev").addEventListener("click", () => showFilm(filmIndex - 1));
document.querySelector("#film-next").addEventListener("click", () => showFilm(filmIndex + 1));
filmDots.forEach(dot => dot.addEventListener("click", () => showFilm(Number(dot.dataset.film))));
filmCarousel.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showFilm(filmIndex + (event.key === "ArrowRight" ? 1 : -1));
  }
});

let filmTouchStart = null;
filmSlide.addEventListener("pointerdown", event => {
  if (event.pointerType !== "touch" || !event.isPrimary) return;
  filmTouchStart = { x: event.clientX, y: event.clientY };
});
filmSlide.addEventListener("pointercancel", () => { filmTouchStart = null; });
filmSlide.addEventListener("pointerup", event => {
  if (!filmTouchStart || !event.isPrimary) return;
  const dx = event.clientX - filmTouchStart.x;
  const dy = event.clientY - filmTouchStart.y;
  filmTouchStart = null;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) showFilm(filmIndex + (dx < 0 ? 1 : -1));
});

buildMap();
renderExpenseDashboard();
render();

window.__XINJIANG_ROUTE__ = { itinerary, expenseSummary, getFilteredDays, state };
