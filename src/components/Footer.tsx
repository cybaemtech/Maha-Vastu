import { Link } from "wouter";
import { Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRAND, SERVICES } from "@/pages/home";

export function Footer() {
  return (
    <footer className="bg-[#faf9f6] border-t border-[#f0e6d2] mt-20">
      <div className="section-container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full mv-gradient flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="font-heading text-xl font-semibold">
              {BRAND.name}
            </div>
          </div>
          <p className="mt-4 text-sm text-[#4a4a4a] leading-relaxed">
            Scientific spiritual consulting. Practical remedies for your home,
            career, and energy — grounded in Vastu and Astrology.
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm text-[#1a1a1a]">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link
                  href={`/services#${s.id}`}
                  className="hover:text-[#ef4d2b]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">
            Practice
          </div>
          <ul className="space-y-2 text-sm text-[#1a1a1a]">
            <li>
              <Link href="/about" className="hover:text-[#ef4d2b]">
                About
              </Link>
            </li>
            <li>
              <Link href="/#how" className="hover:text-[#ef4d2b]">
                How it works
              </Link>
            </li>

            <li>
              <Link href="/testimonials" className="hover:text-[#ef4d2b]">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.2em] text-[#ef4d2b] font-semibold mb-4">
            Reach us
          </div>
          <ul className="space-y-3 text-sm text-[#1a1a1a]">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> {BRAND.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#ef4d2b] mt-0.5" />{" "}
              <span className="break-all">{BRAND.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#ef4d2b] mt-0.5" />{" "}
              {BRAND.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#ef4d2b] mt-0.5" /> Mon–Sat · 10am
              to 7pm IST
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#f0e6d2]">
        <div className="section-container py-6 text-center text-xs text-[#4a4a4a]">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          Designed by{" "}
          <a
            href="https://www.cybaemtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ef4d2b] transition-colors"
          >
            CybaemTech
          </a>
        </div>
      </div>
    </footer>
  );
}
