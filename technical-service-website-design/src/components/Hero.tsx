"use client";

import { ArrowDown, Printer, Monitor, PenTool, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-800/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-900/40 border border-blue-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-300 text-sm">خدمات آنلاین فعال است</span>
          </div>

          {/* Main Title */}
          <h1 className="font-b-titr text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-white">دفتر فنی</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
              خدمات حرفه‌ای
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#e2e8f0]/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            طراحی فتوشاپ، پرینت دیجیتال، تایپ، سیمی کتاب و طراحی سایت
            <br />
            با بهترین کیفیت و قیمت مناسب
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#order"
              className="btn-primary px-10 py-4 text-lg animate-pulse-glow"
            >
              ثبت سفارش آنلاین
            </a>
            <a
              href="#services"
              className="px-10 py-4 rounded-xl border border-blue-500/30 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400/50 transition-all text-lg font-b-titr"
            >
              مشاهده خدمات
            </a>
          </div>
        </div>

        {/* Service Icons */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { icon: PenTool, label: "طراحی فتوشاپ" },
            { icon: Printer, label: "پرینت دیجیتال" },
            { icon: Monitor, label: "تایپ و سیمی" },
            { icon: Globe, label: "طراحی سایت" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl glass-card hover:border-blue-400/50 transition-all group"
            >
              <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all" />
              <span className="text-sm text-[#e2e8f0]/70 group-hover:text-white transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400/60 hover:text-blue-400 transition-colors animate-bounce"
        >
          <span className="text-xs">اسکرول کنید</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
