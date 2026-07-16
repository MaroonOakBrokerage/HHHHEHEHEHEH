import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <>
      <div className="border-b border-gold/30 bg-[#5B0B1F] text-white">
        <div className="mx-auto flex min-h-10 max-w-[1600px] items-center justify-between px-5 text-[11px] font-semibold uppercase tracking-[0.24em] lg:px-8">
          <span>Aggie-Founded • Texas-Rooted • Client-Focused</span>

          <span className="hidden md:block">
            Independent Insurance Brokerage
          </span>
        </div>
      </div>

      <header className="border-b border-white/10 bg-[#111820] text-white">
        <div className="mx-auto flex min-h-[112px] max-w-[1600px] items-center gap-5 px-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-horizontal.png"
              alt="Maroon Oak Brokerage"
              width={520}
              height={140}
              priority
              className="h-auto w-[220px] object-contain xl:w-[270px]"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
            <Link
              href="/"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Home
            </Link>

            <Link
              href="/personal-insurance"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Personal
            </Link>

            <Link
              href="/business-insurance"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Commercial
            </Link>

            <Link
              href="/about"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              About
            </Link>

            <Link
              href="/claims"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Claims
            </Link>

            <Link
              href="/resources"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.11em] text-white/85 transition hover:text-gold xl:text-xs"
            >
              Contact
            </Link>
          </nav>

                   <div className="ml-auto hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href="tel:+17374778228"
              className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-white transition hover:text-gold xl:text-base"
            >
              <span className="text-gold">☎</span>
              737-477-8228
            </a>

            <Link
              href="/contact"
              className="whitespace-nowrap rounded-xl border border-gold bg-[#5B0B1F] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#6D1027] xl:px-6 xl:py-4 xl:text-sm"
            >
              Get a Quote →
            </Link>
          </div>

          <div className="ml-auto lg:hidden">
            <MobileMenu />
          </div>
          </div>
      </header>
    </>
  );
}
