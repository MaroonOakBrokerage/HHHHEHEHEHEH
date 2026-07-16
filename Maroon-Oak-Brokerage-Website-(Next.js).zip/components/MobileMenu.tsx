"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/data";
import { PhoneIcon } from "./Icons";
import Button from "./Button";
import { useToggle } from "@/hooks/useToggle";

export default function MobileMenu() {
  const [open, toggleOpen, setOpen] = useToggle(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={toggleOpen}
        className="relative flex h-11 w-11 items-center justify-center rounded-xl transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span className="relative block h-[16px] w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              open ? "top-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-white transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              open ? "top-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 top-[76px] z-50 overflow-y-auto bg-[#111820] text-white">
          <nav className="flex flex-col px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-5 text-lg font-semibold transition ${
                  pathname === item.href
                    ? "text-gold"
                    : "text-white hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="mt-8 flex items-center gap-3 text-lg font-semibold text-white"
            >
              <PhoneIcon className="h-5 w-5 text-gold" />
              {siteConfig.phoneDisplay}
            </a>

            <Button
              href="/contact#quote"
              onClick={() => setOpen(false)}
              className="mt-6 w-full"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
