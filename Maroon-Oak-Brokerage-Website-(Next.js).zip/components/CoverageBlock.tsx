import Image from "next/image";

import type { Product } from "@/lib/data";
import { personalProducts, businessProducts } from "@/lib/data";

import Button from "./Button";
import FAQAccordion from "./FAQAccordion";

const allProducts = [...personalProducts, ...businessProducts];

function productName(id: string): string {
  return allProducts.find((product) => product.id === id)?.name ?? id;
}

// Connects each product ID in data.ts to the matching photograph
// downloaded into public/coverage.
const productImage: Record<string, string> = {
  // Personal insurance
  auto: "auto-insurance.jpg",
  motorcycle: "motorcycle-insurance.jpg",
  home: "homeowners-insurance.jpg",
  condo: "condo-insurance.jpg",
  renters: "renters-insurance.jpg",
  rv: "rv-insurance.jpg",
  boat: "boat-insurance.jpg",
  umbrella: "umbrella-insurance.jpg",
  life: "life-insurance.jpg",
  "valuable-items": "valuable-items-coverage.jpg",

  // Business insurance
  "general-liability": "general-liability.jpg",
  "workers-comp": "workers-compensation.jpg",
  "commercial-auto": "commercial-auto.jpg",
  bop: "business-owners-policy-bop.jpg",
  "commercial-property": "commercial-property.jpg",
  "professional-liability": "professional-liability-eo.jpg",
  cyber: "cyber-liability.jpg",
  "commercial-umbrella": "commercial-umbrella.jpg",
  "builders-risk": "builders-risk.jpg",
  "inland-marine": "inland-marine.jpg",
  "commercial-crime": "commercial-crime.jpg",
  "directors-officers": "directors-officers-do.jpg",
  epli: "employment-practices-liability-epli.jpg",
  "surety-bonds": "surety-bonds.jpg",
  "risk-management": "risk-management-consulting.jpg",
};

export default function CoverageBlock({
  product,
  reverse,
}: {
  product: Product;
  reverse?: boolean;
}) {
  const imageFilename = productImage[product.id];

  return (
    <div
      id={product.id}
      className="border-b border-charcoal/10 py-16 last:border-b-0"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div
          className={`grid grid-cols-1 items-start gap-12 md:gap-14 ${
            reverse
              ? "md:grid-cols-[1.1fr_0.9fr]"
              : "md:grid-cols-[0.9fr_1.1fr]"
          }`}
        >
          <div
            className={`group relative min-h-[280px] overflow-hidden rounded-xl border border-gold/20 bg-maroon-deep shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[340px] ${
              reverse ? "md:order-2" : ""
            }`}
          >
            {imageFilename ? (
              <>
                <Image
                  src={`/coverage/${imageFilename}`}
                  alt={`${product.name} insurance coverage`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                    {product.industries ? "Business Protection" : "Personal Protection"}
                  </span>

                  <p className="mt-3 font-serif text-2xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                    {product.name}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex min-h-[340px] items-center justify-center bg-gradient-to-br from-maroon-deep to-ink p-8 text-center">
                <p className="font-serif text-2xl font-semibold text-white">
                  {product.name}
                </p>
              </div>
            )}
          </div>

          <div>
            <span className="mb-4 inline-block rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim">
              {product.industries ? "Business Lines" : "Personal Lines"}
            </span>

            <h3 className="mb-4 font-serif text-[27px] font-semibold text-maroon">
              {product.name}
            </h3>

            <p className="mb-3 font-sans text-[15px] leading-relaxed text-[#55504a]">
              {product.overview}
            </p>

            <h4 className="mb-3 mt-6 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.whyLabel}
            </h4>

            <p className="mb-3 font-sans text-[15px] leading-relaxed text-[#55504a]">
              {product.why}
            </p>

            <h4 className="mb-3 mt-6 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
              {product.optionsLabel}
            </h4>

            <ul className="mb-2 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
              {product.options.map((option) => (
                <li
                  key={option}
                  className="relative pl-5 font-sans text-sm text-[#55504a]"
                >
                  <span className="absolute left-0 text-gold">—</span>
                  {option}
                </li>
              ))}
            </ul>

            {product.industries && (
              <>
                <h4 className="mb-3 mt-6 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Industries We Serve
                </h4>

                <div className="mb-5 flex flex-wrap gap-2">
                  {product.industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold-dim"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </>
            )}

            {product.pairsWith && product.pairsWith.length > 0 && (
              <>
                <h4 className="mb-3 mt-6 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Often Paired With
                </h4>

                <div className="mb-5 flex flex-wrap gap-2">
                  {product.pairsWith.map((id) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="rounded-full border border-maroon/20 px-3.5 py-1.5 text-[12px] font-semibold text-maroon transition-colors duration-200 hover:border-maroon hover:bg-maroon/5"
                    >
                      {productName(id)}
                    </a>
                  ))}
                </div>
              </>
            )}

            <div className="my-6">
              <Button href="/contact#quote" variant="maroon" size="sm">
                Request a {product.name} Quote
              </Button>
            </div>

            {product.faqs && product.faqs.length > 0 && (
              <>
                <h4 className="mb-3 mt-6 font-sans text-[13.5px] font-bold uppercase tracking-wide text-gold-dim">
                  Frequently Asked Questions
                </h4>

                <FAQAccordion
                  items={product.faqs.map((faq) => ({
                    q: faq.q,
                    a: faq.a,
                  }))}
                  firstOpen={false}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
