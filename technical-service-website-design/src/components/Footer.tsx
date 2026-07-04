"use client";

import { PenTool, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-blue-900/30">
      <div className="absolute inset-0 bg-[#0a0e1a]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-b-titr text-xl text-white">دفتر فنی</h3>
                <p className="text-xs text-blue-300/70">خدمات حرفه‌ای</p>
              </div>
            </div>
            <p className="text-[#e2e8f0]/50 text-sm leading-relaxed">
              ارائه‌دهنده خدمات حرفه‌ای طراحی، چاپ، تایپ و طراحی سایت با بیش از
              ۱۰ سال تجربه
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-b-titr text-white text-lg mb-4">دسترسی سریع</h4>
            <div className="space-y-3">
              {[
                { href: "#home", label: "خانه" },
                { href: "#services", label: "خدمات" },
                { href: "#about", label: "درباره ما" },
                { href: "#order", label: "ثبت سفارش" },
                { href: "#contact", label: "تماس با ما" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[#e2e8f0]/50 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-b-titr text-white text-lg mb-4">خدمات ما</h4>
            <div className="space-y-3">
              {[
                "طراحی فتوشاپ",
                "پرینت دیجیتال",
                "تایپ و صفحه‌آرایی",
                "سیمی و صحافی",
                "طراحی سایت",
              ].map((service) => (
                <span
                  key={service}
                  className="block text-[#e2e8f0]/50 text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#e2e8f0]/40 text-sm flex items-center gap-2">
            ساخته شده با <Heart className="w-4 h-4 text-red-400" /> برای
            مشتریان عزیز
          </p>
          <p className="text-[#e2e8f0]/40 text-sm">
            © ۱۴۰۴ دفتر فنی. تمامی حقوق محفوظ است.
          </p>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-110 transition-all z-40"
          title="بازگشت به بالا"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </footer>
  );
}
