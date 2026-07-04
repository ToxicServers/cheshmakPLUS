import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "دفتر فنی آنلاین | طراحی، چاپ، تایپ و طراحی سایت",
  description: "دفتر فنی حرفه‌ای - خدمات طراحی فتوشاپ، پرینت دیجیتال، تایپ، سیمی کتاب و طراحی سایت با بهترین کیفیت",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-[#0a0e1a] text-[#e2e8f0] antialiased">
        {children}
      </body>
    </html>
  );
}
