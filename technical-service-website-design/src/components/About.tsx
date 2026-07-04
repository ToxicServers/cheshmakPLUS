"use client";

import { Star, Users, Award, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  { icon: Users, value: "+۵۰۰۰", label: "مشتری راضی" },
  { icon: Award, value: "+۱۰۰۰۰", label: "پروژه موفق" },
  { icon: Clock, value: "+۱۰", label: "سال تجربه" },
  { icon: Star, value: "۴.۹", label: "امتیاز مشتریان" },
];

const features = [
  "کیفیت بالا در تمامی خدمات",
  "تحویل به‌موقع و سریع",
  "قیمت‌های منصفانه و رقابتی",
  "پشتیبانی ۲۴ ساعته",
  "استفاده از تجهیزات پیشرفته",
  "تیم حرفه‌ای و باتجربه",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-700/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">درباره ما</h2>
          <p className="section-subtitle">
            ما با بیش از یک دهه تجربه در زمینه خدمات دفتر فنی، مفتخریم که بهترین خدمات را به مشتریان عزیز ارائه دهیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="font-b-titr text-3xl text-white mb-6">
              چرا ما را انتخاب کنید؟
            </h3>
            <p className="text-[#e2e8f0]/70 leading-relaxed mb-8 text-lg">
              دفتر فنی ما با بهره‌گیری از تجهیزات مدرن و تیم متخصص، آماده ارائه
              طیف گسترده‌ای از خدمات از جمله طراحی گرافیک، چاپ دیجیتال، تایپ و
              صحافی، و طراحی وب‌سایت می‌باشد. ما متعهد به ارائه بهترین کیفیت با
              مناسب‌ترین قیمت هستیم.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 rounded-xl bg-blue-900/20 border border-blue-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-[#e2e8f0]/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 animate-float">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🎨", label: "طراحی خلاقانه" },
                  { emoji: "🖨️", label: "چاپ با کیفیت" },
                  { emoji: "📚", label: "صحافی حرفه‌ای" },
                  { emoji: "💻", label: "طراحی سایت" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl bg-blue-900/30 border border-blue-500/20 text-center hover:border-blue-400/40 transition-all"
                  >
                    <span className="text-4xl mb-3 block">{item.emoji}</span>
                    <span className="text-sm text-[#e2e8f0]/70">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:border-blue-400/40 transition-all"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="font-b-titr text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[#e2e8f0]/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
