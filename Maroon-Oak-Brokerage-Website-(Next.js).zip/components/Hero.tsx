import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import QuoteCard from "./QuoteCard";
import SkylineMotif from "./SkylineMotif";
import { PlayIcon } from "./Icons";
import { heroImages, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[590px] overflow-hidden py-12 sm:py-16 md:py-24 lg:flex lg:min-h-[690px] lg:items-center">
      <div className="absolute inset-0">
        <Image
          src={heroImages.cityDusk.url}
          alt={heroImages.cityDusk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(7,15,22,0.88)_0%,rgba(58,10,24,0.74)_48%,rgba(7,15,22,0.30)_100%)]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />

      <SkylineMotif className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] w-full text-gold opacity-[0.07] sm:h-[140px] md:h-[200px]" />

      <span className="absolute bottom-3 right-4 z-10 hidden text-[10px] text-white/40 sm:block">
        Photo: {heroImages.cityDusk.credit}
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-gold backdrop-blur-sm sm:mb-7 sm:px-4 sm:text-[10.5px]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
              {siteConfig.heritage.badge}
            </div>

            <h1 className="max-w-[680px] font-serif text-[38px] font-medium leading-[1.03] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.5)] sm:text-[50px] md:text-[76px]">
              Understanding First.
              <br />
              <span className="text-white">Insurance Second.</span>
            </h1>

            <div className="my-5 h-0.5 w-14 bg-gold sm:my-7 sm:w-16" />

            <p className="max-w-[520px] font-sans text-base leading-7 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-lg sm:leading-relaxed">
              We take the time to understand what matters to you. Then we build
              insurance around it.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/contact#quote" className="w-full sm:w-auto">
                Get a Quote
              </Button>

              <Link
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-black/15 px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-gold hover:text-gold sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-[13.5px]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/20 transition-colors duration-200 group-hover:border-gold sm:h-10 sm:w-10">
                  <PlayIcon className="h-4 w-4 translate-x-px stroke-white transition-colors duration-200 group-hover:stroke-gold" />
                </span>

                How We Help
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
}
