"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-[200] border-b border-white/10 bg-[#080f17]/95 text-white backdrop-blur-xl transition-all ${scrolled ? "shadow-[0_12px_40px_rgba(0,0,0,.28)]" : ""}`}>
      <div className="hidden h-7 items-center justify-between border-b border-gold/20 bg-maroon-deep px-8 text-[10px] font-semibold uppercase tracking-[.22em] text-stone/90 md:flex">
        <span>Aggie-Founded • Texas-Rooted • Client-Focused</span>
        <span>Independent Insurance Brokerage</span>
      </div>
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-7 px-5 lg:px-10">
        <Link href="/" className="flex flex-shrink-0 items-center" aria-label="Maroon Oak Brokerage home">
          <Image src="/logo-horizontal.png" alt="Maroon Oak Brokerage" width={360} height={81} className="h-[62px] w-auto brightness-0 invert" priority />
        </Link>
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return <li key={item.href}><Link href={item.href} className={`relative py-3 text-[11px] font-semibold uppercase tracking-[.1em] transition-colors after:absolute after:bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all ${active ? "text-gold after:w-full" : "text-stone/85 after:w-0 hover:text-gold hover:after:w-full"}`}>{item.label}</Link></li>;
            })}
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${siteConfig.phoneTel}`} className="group flex items-center gap-2 text-[13px] font-semibold text-stone hover:text-gold"><PhoneIcon className="h-5 w-5 stroke-gold" />{siteConfig.phoneDisplay}</a>
          <Link href="/contact#quote" className="rounded-lg border border-gold/70 bg-maroon-deep px-6 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-white shadow-[0_8px_24px_rgba(58,10,24,.35)] transition hover:-translate-y-0.5 hover:bg-maroon">Get a Quote <span className="ml-2 text-gold">→</span></Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
