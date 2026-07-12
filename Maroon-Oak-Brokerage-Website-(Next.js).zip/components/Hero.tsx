import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import QuoteCard from "./QuoteCard";
import SkylineMotif from "./SkylineMotif";
import { PlayIcon } from "./Icons";
import { heroImages, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden py-20 md:py-24 lg:flex lg:min-h-[690px] lg:items-center">
      <div className="absolute inset-0">
        <Image
          src={heroImages.cityDusk.url}
          alt={heroImages.cityDusk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(7,15,22,0.82)_0%,rgba(58,10,24,0.68)_42%,rgba(7,15,22,0.18)_100%)]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      <SkylineMotif className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] w-full text-gold opacity-[0.07] md:h-[200px]" />

      <span className="absolute bottom-3 right-4 z-10 text-[10px] text-white/40">
        Photo: {heroImages.cityDusk.credit}
      </span>

      <div className="relative z-10 mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
              {siteConfig.heritage.badge}
            </div>

            <h1 className="max-w-[680px] font-serif text-[46px] font-medium leading-[1.02] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.5)] sm:text-[60px] md:text-[76px]">
              Understanding First.
              <br />
              <span className="text-white">Insurance Second.</span>
            </h1>

            <div className="my-7 h-0.5 w-16 bg-gold" />

            <p className="max-w-[520px] font-sans text-lg leading-relaxed text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
              We take the time to understand what matters to you. Then we build
              insurance around it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact#quote">Get a Quote</Button>

              <Link
                href="#how-it-works"
                className="group inline-flex items-center gap-3 text-[13.5px] font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 backdrop-blur-sm transition-colors duration-200 group-hover:border-gold">
                  <PlayIcon className="h-4 w-4 translate-x-px stroke-white transition-colors duration-200 group-hover:stroke-gold" />
                </span>

                How We Help
              </Link>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 lg:justify-self-end">
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
}
