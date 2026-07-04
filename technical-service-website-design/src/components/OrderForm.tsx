"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, FileText, Phone, Mail, User, MessageSquare } from "lucide-react";

const serviceOptions = [
  { value: "photoshop", label: "طراحی فتوشاپ" },
  { value: "print", label: "پرینت دیجیتال" },
  { value: "typing", label: "تایپ و صفحه‌آرایی" },
  { value: "binding", label: "سیمی و صحافی کتاب" },
  { value: "website", label: "طراحی سایت" },
  { value: "scan", label: "اسکن و فتوکپی" },
  { value: "other", label: "سایر خدمات" },
];

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
    fileNote: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("سفارش شما با موفقیت ثبت شد! به زودی با شما تماس می‌گیریم.");
        setFormData({ name: "", phone: "", email: "", service: "", description: "", fileNote: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "خطایی رخ داد. لطفاً دوباره تلاش کنید.");
      }
    } catch {
      setStatus("error");
      setMessage("خطا در اتصال به سرور. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <section id="order" className="py-24 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">ثبت سفارش آنلاین</h2>
          <p className="section-subtitle">
            فرم زیر را تکمیل کنید تا سفارش شما ثبت شود. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 md:p-10">
          {/* Success Message */}
          {status === "success" && (
            <div className="mb-8 p-5 rounded-xl bg-green-900/30 border border-green-500/30 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-green-300">{message}</p>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-8 p-5 rounded-xl bg-red-900/30 border border-red-500/30 flex items-center gap-4">
              <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
              <p className="text-red-300">{message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                  <User className="w-4 h-4 inline-block ml-1 text-blue-400" />
                  نام و نام خانوادگی *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="نام کامل خود را وارد کنید"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                  <Phone className="w-4 h-4 inline-block ml-1 text-blue-400" />
                  شماره تماس *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  className="form-input"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                <Mail className="w-4 h-4 inline-block ml-1 text-blue-400" />
                ایمیل (اختیاری)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="form-input"
                dir="ltr"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                <FileText className="w-4 h-4 inline-block ml-1 text-blue-400" />
                نوع خدمات *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input appearance-none cursor-pointer"
              >
                <option value="">انتخاب کنید...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0d1b2a]">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                <MessageSquare className="w-4 h-4 inline-block ml-1 text-blue-400" />
                توضیحات سفارش *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="جزئیات سفارش خود را شرح دهید..."
                className="form-input"
                rows={4}
              />
            </div>

            {/* File Note */}
            <div>
              <label className="block text-sm text-[#e2e8f0]/70 mb-2 font-b-titr">
                توضیحات فایل (اختیاری)
              </label>
              <input
                type="text"
                name="fileNote"
                value={formData.fileNote}
                onChange={handleChange}
                placeholder="مثال: فایل در واتساپ ارسال می‌شود / لینک گوگل درایو"
                className="form-input"
              />
              <p className="text-xs text-[#e2e8f0]/40 mt-2">
                فایل‌های خود را می‌توانید پس از ثبت سفارش از طریق واتساپ یا تلگرام ارسال کنید
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center text-lg py-4"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  در حال ثبت سفارش...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  ثبت سفارش
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
