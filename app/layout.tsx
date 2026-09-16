import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "新疆 29 天公共交通路线｜小部慢一点",
  description: "一个人不自驾，29 天从北疆走到南疆，再到东疆。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
