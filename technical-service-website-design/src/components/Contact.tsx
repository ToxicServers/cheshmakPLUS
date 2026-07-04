"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">تماس با ما</h2>
          <p className="section-subtitle">
            برای سفارش، مشاوره یا هر سوالی با ما در ارتباط باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "آدرس",
                desc: "تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه دوم",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: Phone,
                title: "تلفن",
                desc: "۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲-۳۴۵-۶۷۸۹",
                color: "from-green-500 to-emerald-500",
                isLink: true,
                href: "tel:02112345678",
              },
              {
                icon: Mail,
                title: "ایمیل",
                desc: "info@daftar-fanni.ir",
                color: "from-blue-500 to-cyan-500",
                isLink: true,
                href: "mailto:info@daftar-fanni.ir",
              },
              {
                icon: Clock,
                title: "ساعات کاری",
                desc: "شنبه تا پنج‌شنبه: ۹ صبح تا ۹ شب",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 flex items-center gap-5 hover:border-blue-400/40 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-b-titr text-white text-lg mb-1">
                    {item.title}
                  </h3>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-[#e2e8f0]/70 hover:text-blue-400 transition-colors"
                    >
                      {item.desc}
                    </a>
                  ) : (
                    <p className="text-[#e2e8f0]/70">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: MessageCircle, label: "واتساپ", href: "https://wa.me/989123456789", color: "from-green-500 to-green-600" },
                { icon: Send, label: "تلگرام", href: "https://t.me/daftarfanni", color: "from-blue-400 to-blue-500" },
                { icon: Camera, label: "اینستاگرام", href: "https://instagram.com/daftarfanni", color: "from-pink-500 to-purple-500" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                  title={social.label}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="glass-card p-8 flex flex-col justify-center">
            <h3 className="font-b-titr text-2xl text-white mb-6">
              ارتباط سریع
            </h3>
            <p className="text-[#e2e8f0]/70 mb-8 leading-relaxed">
              برای سفارش فوری یا مشاوره رایگان، از طریق واتساپ یا تلگرام با ما
              در ارتباط باشید. فایل‌های خود را می‌توانید مستقیماً برای ما ارسال
              کنید.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/989123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-green-900/30 border border-green-500/30 hover:border-green-400/50 hover:bg-green-900/40 transition-all group"
              >
                <MessageCircle className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-b-titr text-white">واتساپ</div>
                  <div className="text-sm text-green-300/70" dir="ltr">
                    0912-345-6789
                  </div>
                </div>
              </a>

              <a
                href="https://t.me/daftarfanni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-blue-900/30 border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-900/40 transition-all group"
              >
                <Send className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-b-titr text-white">تلگرام</div>
                  <div className="text-sm text-blue-300/70">
                    @daftarfanni
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
