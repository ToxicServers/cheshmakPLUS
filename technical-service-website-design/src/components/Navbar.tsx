"use client";

import { useState, useEffect } from "react";
import { Menu, X, Printer, Monitor, PenTool, Globe, Phone } from "lucide-react";

const navLinks = [
  { href: "#home", label: "خانه" },
  { href: "#services", label: "خدمات" },
  { href: "#about", label: "درباره ما" },
  { href: "#order", label: "ثبت سفارش" },
  { href: "#contact", label: "تماس" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/90 backdrop-blur-xl shadow-lg shadow-blue-900/20 border-b border-blue-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-b-titr text-xl text-white">دفتر فنی</h1>
              <p className="text-xs text-blue-300/70">خدمات حرفه‌ای</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-[#e2e8f0]/80 hover:text-white hover:bg-blue-900/30 transition-all duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+989123456789"
              className="mr-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-b-titr hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40"
            >
              <Phone className="w-4 h-4 inline-block ml-1" />
              تماس فوری
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#e2e8f0] hover:bg-blue-900/30 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-blue-900/30 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-[#e2e8f0]/80 hover:text-white hover:bg-blue-900/30 transition-all text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+989123456789"
                className="mt-2 mx-4 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center font-b-titr"
              >
                <Phone className="w-4 h-4 inline-block ml-1" />
                تماس فوری
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
