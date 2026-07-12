import Image from "next/image";
import Link from "next/link";

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
        <div className="mx-auto flex min-h-[112px] max-w-[1600px] items-center gap-8 px-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-horizontal.png"
              alt="Maroon Oak Brokerage"
              width={520}
              height={140}
              priority
              className="h-auto w-[250px] object-contain xl:w-[300px]"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 xl:flex">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Home
            </Link>

            <Link
              href="/personal-insurance"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Personal
            </Link>

            <Link
              href="/business-insurance"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Commercial
            </Link>

            <Link
              href="/about"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              About
            </Link>

            <Link
              href="/claims"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Claims
            </Link>

            <Link
              href="/resources"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Resources
            </Link>

            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:text-gold"
            >
              Contact
            </Link>
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-5 lg:flex">
            <a
              href="tel:+17374778228"
              className="flex items-center gap-3 text-base font-semibold text-white transition hover:text-gold"
            >
              <span className="text-gold">☎</span>
              737-477-8228
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-gold bg-[#5B0B1F] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#6D1027]"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
