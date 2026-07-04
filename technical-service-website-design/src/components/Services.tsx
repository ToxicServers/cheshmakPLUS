"use client";

import { PenTool, Printer, Keyboard, BookOpen, Globe, FileText, Image, Palette, Monitor, Scissors, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "طراحی فتوشاپ",
    description: "طراحی بنر، لوگو، کارت ویزیت، بروشور و هر نوع طرح گرافیکی با بالاترین کیفیت",
    features: ["طراحی لوگو", "کارت ویزیت", "بنر و پوستر", "بروشور و کاتالوگ"],
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Printer,
    title: "پرینت دیجیتال",
    description: "چاپ رنگی و سیاه‌وسفید با کیفیت بالا روی انواع کاغذ و متریال‌های مختلف",
    features: ["چاپ رنگی", "چاپ سیاه‌وسفید", "چاپ عکس", "چاپ روی متریال"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Keyboard,
    title: "تایپ و صفحه‌آرایی",
    description: "تایپ سریع و دقیق متون فارسی و انگلیسی، صفحه‌آرایی کتاب، پایان‌نامه و مقاله",
    features: ["تایپ فارسی", "تایپ انگلیسی", "صفحه‌آرایی", "ویراستاری"],
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: BookOpen,
    title: "سیمی و صحافی کتاب",
    description: "سیمی کردن، صحافی، لمینت و خدمات تکمیلی برای کتاب، جزوه و پایان‌نامه",
    features: ["سیمی فنری", "صحافی چسب گرم", "لمینت", "عطف‌گیری"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "طراحی سایت",
    description: "طراحی و توسعه وب‌سایت‌های حرفه‌ای، فروشگاهی، شرکتی و شخصی با جدیدترین تکنولوژی‌ها",
    features: ["سایت شرکتی", "فروشگاه آنلاین", "سایت شخصی", "سئو و بهینه‌سازی"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: FileText,
    title: "خدمات تکمیلی",
    description: "اسکن مدارک، فتوکپی، پاورپوینت، ترجمه و سایر خدمات دفتری",
    features: ["اسکن مدارک", "فتوکپی", "پاورپوینت", "ترجمه"],
    color: "from-indigo-500 to-blue-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-800/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">خدمات ما</h2>
          <p className="section-subtitle">
            با بیش از سال‌ها تجربه در ارائه خدمات دفتر فنی، ما بهترین کیفیت را با مناسب‌ترین قیمت به شما ارائه می‌دهیم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-6 hover:border-blue-400/40 transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-b-titr text-xl text-white mb-3">{service.title}</h3>
              <p className="text-[#e2e8f0]/60 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-500/20 text-blue-300 text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
