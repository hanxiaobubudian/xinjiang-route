"use client";

import { useMemo, useState } from "react";

type Region = "伊犁＋乌鲁木齐" | "南疆" | "东疆";

const regions: Region[] = ["伊犁＋乌鲁木齐", "南疆", "东疆"];

const days = [
  [1, "伊犁＋乌鲁木齐", "乌鲁木齐", "杭州 → 乌鲁木齐 → 城市闲逛", "红山公园、国际大巴扎", 1006],
  [2, "伊犁＋乌鲁木齐", "奎屯", "乌鲁木齐 → 奎屯", "安集海大峡谷、独山子大峡谷", 222],
  [3, "伊犁＋乌鲁木齐", "博乐 / 伊宁", "奎屯 → 博乐 → 赛里木湖 → 伊宁", "赛里木湖、六星街", 422.4],
  [4, "伊犁＋乌鲁木齐", "昭苏", "伊宁 → 昭苏", "伊昭公路、玉湖", 363.66],
  [5, "伊犁＋乌鲁木齐", "夏塔", "昭苏 → 夏塔", "夏塔、鲜花台", 229],
  [6, "伊犁＋乌鲁木齐", "昭苏", "夏塔村 → 昭苏", "休整、昭苏", 249],
  [7, "伊犁＋乌鲁木齐", "特克斯", "昭苏 → 特克斯", "八卦城", 212],
  [8, "伊犁＋乌鲁木齐", "琼库什台", "特克斯 → 琼库什台", "草原、村落", 329],
  [9, "伊犁＋乌鲁木齐", "琼库什台", "琼库什台停留", "后山、日落", 149],
  [10, "伊犁＋乌鲁木齐", "特克斯", "琼库什台 → 特克斯", "八卦顶", 307.6],
  [11, "伊犁＋乌鲁木齐", "那拉提", "特克斯 → 新源 → 那拉提", "离街、那拉提镇", 293],
  [12, "伊犁＋乌鲁木齐", "那拉提", "那拉提草原", "草原、区间车", 316],
  [13, "伊犁＋乌鲁木齐", "新源", "那拉提 → 唐布拉 → 新源", "唐布拉", 230],
  [14, "南疆", "库车", "新源 → 独库公路 → 库车", "独库公路", 294],
  [15, "南疆", "库车", "库车闲逛", "老城休整", 99],
  [16, "南疆", "喀什", "库车 → 喀什", "火车转场", 290],
  [17, "南疆", "喀什", "喀什城内", "古城、油画街、百年茶馆", 125.5],
  [18, "南疆", "塔县", "喀什 → 塔县", "白沙湖、木吉火山", 341],
  [19, "南疆", "塔县", "塔县环线", "盘龙古道、斑迪尔蓝湖", 362],
  [20, "南疆", "喀什", "塔县 → 喀什", "慕士塔格冰川、白沙湖", 361],
  [21, "南疆", "莎车", "喀什 → 莎车", "六运司农贸市场", 269],
  [22, "南疆", "莎车", "莎车停留", "老街、十二木卡姆、阿曼尼莎", 307.3],
  [23, "南疆", "和田", "莎车 → 和田", "和田夜色", 158.5],
  [24, "南疆", "和田", "和田城内", "团城、约特干故城", 228],
  [25, "南疆", "和田 / 吐鲁番", "翡翠湖 → 和田 → 吐鲁番", "翡翠湖、长途转场", 581.5],
  [26, "东疆", "吐鲁番", "吐鲁番休整", "躺平日", 116.5],
  [27, "东疆", "吐鲁番", "吐鲁番城内", "葡萄沟、沙浴、泡澡", 388.8],
  [28, "东疆", "哈密", "吐鲁番 → 哈密", "坎儿井、沙浴", 447.5],
  [29, "东疆", "哈密", "哈密 → 幻彩湖 → 哈密", "幻彩湖", 274],
] as const;

const routeStops = ["杭州", "乌鲁木齐", "奎屯", "赛里木湖", "昭苏", "琼库什台", "那拉提", "库车", "喀什", "塔县", "莎车", "和田", "吐鲁番", "哈密", "幻彩湖"];
const costs = [["出行", "¥3,631.60", "40.5%", "bg-[#f1b157]"], ["食物", "¥1,929.70", "21.5%", "bg-[#ef7967]"], ["住宿", "¥1,408.16", "15.7%", "bg-[#77a8a0]"], ["其他", "¥2,003.80", "22.3%", "bg-[#8490be]"]];

export default function Home() {
  const [activeRegion, setActiveRegion] = useState<Region | "全部">("全部");
  const [selectedDay, setSelectedDay] = useState(1);
  const visibleDays = useMemo(() => days.filter((day) => activeRegion === "全部" || day[1] === activeRegion), [activeRegion]);
  const currentDay = days.find((day) => day[0] === selectedDay) ?? days[0];

  return <main className="min-h-screen bg-[#f7f5ee] text-[#1c2931]">
    <header className="sticky top-0 z-10 border-b border-[#1c2931]/10 bg-[#f7f5ee]/95 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"><a href="#top" className="font-serif text-lg font-bold tracking-tight">小部慢一点</a><nav className="hidden gap-6 text-sm text-[#1c2931]/70 sm:flex" aria-label="页面导航"><a href="#route">路线</a><a href="#days">每日行程</a><a href="#cost">花费</a></nav><span className="rounded-full bg-[#dbe7d6] px-3 py-1 text-xs font-semibold text-[#315640]">私密草稿</span></div></header>

    <section id="top" className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-16"><div className="flex flex-col justify-center"><p className="mb-4 text-sm font-semibold tracking-[.15em] text-[#c45f42]">XINJIANG · SUMMER JOURNEY</p><h1 className="max-w-xl font-serif text-5xl leading-[.98] tracking-tight sm:text-7xl">29 天，<br />一个人不自驾<br /><em className="text-[#5f8880]">走完新疆</em></h1><p className="mt-6 max-w-lg text-base leading-7 text-[#44545c]">从北疆到南疆，再到东疆。火车、拼车、公交和景区接驳，组成了这一段慢慢往前走的路。</p><div className="mt-8 flex flex-wrap gap-3">{["29 天", "公共交通", "¥8,973.26", "日均 ¥309"].map((item) => <span key={item} className="rounded-full border border-[#1c2931]/15 px-4 py-2 text-sm">{item}</span>)}</div></div><figure className="relative overflow-hidden rounded-[2rem] bg-[#577871] shadow-xl shadow-[#325149]/15"><img src="/xinjiang-hero.png" alt="新疆山谷、草原与远处的雪山" className="h-full min-h-[370px] w-full object-cover" /><figcaption className="absolute bottom-4 left-4 rounded-full bg-[#f7f5ee]/90 px-4 py-2 text-xs font-medium">把新疆走成一条自己的路线</figcaption></figure></section>

    <section id="route" className="border-y border-[#1c2931]/10 bg-[#e8eee5] py-12"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-label">ROUTE OVERVIEW</p><h2 className="section-title">一路向西，再一路向南</h2></div><p className="max-w-xs text-sm leading-6 text-[#44545c]">北疆 / 伊犁 → 南疆 → 东疆，29 天完成一次完整环行。</p></div><ol className="mt-9 grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-[repeat(15,minmax(0,1fr))]">{routeStops.map((stop, index) => <li key={stop} className="relative min-w-0"><span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1c2931] text-xs text-white">{index + 1}</span><span className="block text-xs font-medium leading-5">{stop}</span>{index < routeStops.length - 1 && <i className="absolute left-7 top-3 hidden h-px w-[calc(100%-14px)] bg-[#1c2931]/20 lg:block" />}</li>)}</ol></div></section>

    <section id="days" className="mx-auto max-w-6xl px-5 py-14 sm:px-8"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-label">DAY BY DAY</p><h2 className="section-title">把每一天留在路上</h2></div><div className="flex flex-wrap gap-2" aria-label="按区域筛选">{(["全部", ...regions] as const).map((region) => <button key={region} onClick={() => setActiveRegion(region)} className={`rounded-full px-4 py-2 text-sm transition ${activeRegion === region ? "bg-[#1c2931] text-white" : "border border-[#1c2931]/15 bg-white hover:border-[#1c2931]/50"}`}>{region}</button>)}</div></div><div className="mt-8 grid gap-5 lg:grid-cols-[.88fr_1.12fr]"><aside className="rounded-[1.5rem] bg-[#1c2931] p-6 text-[#f7f5ee]"><p className="text-xs font-semibold tracking-[.14em] text-[#d5dfc8]">SELECTED DAY</p><p className="mt-8 text-sm text-[#d5dfc8]">DAY {currentDay[0]} · {currentDay[1]}</p><h3 className="mt-2 font-serif text-4xl">{currentDay[2]}</h3><p className="mt-5 border-t border-white/15 pt-5 text-base leading-7">{currentDay[3]}</p><p className="mt-4 text-sm text-[#d5dfc8]">{currentDay[4]}</p><p className="mt-8 text-2xl font-semibold">¥{currentDay[5]}</p></aside><div className="grid max-h-[520px] grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">{visibleDays.map((day) => <button key={day[0]} onClick={() => setSelectedDay(day[0])} className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition ${selectedDay === day[0] ? "border-[#5f8880] bg-[#e8eee5]" : "border-[#1c2931]/10 bg-white hover:border-[#5f8880]"}`}><span className="font-serif text-2xl text-[#c45f42]">{String(day[0]).padStart(2, "0")}</span><span className="min-w-0 flex-1"><span className="block text-xs text-[#6e7a7e]">{day[1]}</span><strong className="block truncate text-sm">{day[2]}</strong><span className="block truncate text-xs text-[#6e7a7e]">{day[4]}</span></span><span className="text-xs font-medium">¥{day[5]}</span></button>)}</div></div></section>

    <section id="cost" className="bg-[#dce7e1] py-14"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-label">TRAVEL LEDGER</p><h2 className="section-title">这 29 天，<br />花在哪儿了？</h2><p className="mt-5 max-w-sm leading-7 text-[#44545c]">最大的支出不是住宿，而是路上的移动。一个人不自驾，也能把辽阔的新疆走得很远。</p></div><div className="rounded-[1.5rem] bg-[#f7f5ee] p-6 sm:p-8"><div className="flex items-baseline justify-between border-b border-[#1c2931]/10 pb-6"><span className="text-sm text-[#44545c]">总消费</span><strong className="font-serif text-4xl">¥8,973.26</strong></div><div className="mt-6 space-y-5">{costs.map((cost) => <div key={cost[0]}><div className="mb-2 flex justify-between text-sm"><span>{cost[0]}</span><span className="font-medium">{cost[1]} · {cost[2]}</span></div><div className="h-2 overflow-hidden rounded-full bg-[#1c2931]/8"><div className={`h-full rounded-full ${cost[3]}`} style={{ width: cost[2] }} /></div></div>)}</div><div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm"><div><b className="block font-serif text-2xl">¥4,328.66</b><span className="text-xs text-[#6e7a7e]">伊犁＋乌鲁木齐</span></div><div><b className="block font-serif text-2xl">¥3,410.80</b><span className="text-xs text-[#6e7a7e]">南疆</span></div><div><b className="block font-serif text-2xl">¥1,233.80</b><span className="text-xs text-[#6e7a7e]">东疆</span></div></div></div></div></div></section>
    <footer className="bg-[#1c2931] px-5 py-12 text-[#f7f5ee] sm:px-8"><div className="mx-auto max-w-6xl"><p className="max-w-3xl font-serif text-3xl leading-tight sm:text-5xl">“走出去的那一刻，<br />就已经战胜了自己。”</p><div className="mt-10 flex justify-between border-t border-white/15 pt-5 text-sm text-white/60"><span>新疆，再见。</span><span>小部慢一点</span></div></div></footer>
  </main>;
}
