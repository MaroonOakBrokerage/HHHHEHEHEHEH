import type { Metadata } from "next";
import Image from "next/image";

import CTASection from "@/components/CTASection";
import ContinueExploring from "@/components/ContinueExploring";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ValuesExplorer from "@/components/ValuesExplorer";
import { coreValues, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Maroon Oak Brokerage, our mission, our core values, and the independent brokerage philosophy behind how we serve clients across Texas.",
  alternates: {
    canonical: "/about",
  },
};

const commitments = [
  "Integrity",
  "Excellence",
  "Understanding before recommending",
  "Long-term relationships",
  "Continuous improvement",
  "Being genuinely easy to reach",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="office"
        breadcrumb="About"
        title="Insurance Starts With People, Not Policies."
        subtitle="Maroon Oak Brokerage was founded on the belief that the best protection starts with understanding. Here's our story, our mission, and the people behind it."
      />

      {/* About Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[820px] px-6 sm:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold-dim">
              About Us
            </p>

            <h2 className="mb-2 font-serif text-3xl font-semibold text-maroon md:text-[38px]">
              Insurance Starts With People
            </h2>

            <div className="mb-6 h-0.5 w-16 bg-gold" />

            <p className="mb-4 font-sans text-[16.5px] leading-relaxed text-[#55504a]">
              At Maroon Oak Brokerage, we believe insurance starts with people.
              Before discussing policies, coverage, or premiums, we take the
              time to understand your goals, your family, your business, and
              what matters most to you.
            </p>

            <p className="mb-4 font-sans text-[16.5px] leading-relaxed text-[#55504a]">
              Every recommendation begins with listening, because the best
              protection starts with understanding. As an independent
              brokerage, we work with multiple insurance carriers to provide
              customized insurance solutions instead of one-size-fits-all
              policies.
            </p>

            <p className="font-sans text-[16.5px] leading-relaxed text-[#55504a]">
              Our mission is to build lifelong relationships through trust,
              integrity, and exceptional service. Whether someone is protecting
              their family, home, business, or future, our goal is to help them
              make confident insurance decisions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder's Mission */}
      <section className="bg-gradient-to-br from-maroon-deep to-maroon py-24 text-stone">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-gold">
                Founder&rsquo;s Mission
              </p>

              <h2 className="mb-2 font-serif text-3xl font-semibold md:text-[38px]">
                Built on Relationships, Not Transactions
              </h2>

              <div className="mb-6 h-0.5 w-16 bg-gold" />

              <p className="mb-4 font-sans leading-relaxed text-stone/85">
                Maroon Oak Brokerage was founded on the belief that insurance
                should be built on relationships &mdash; not transactions. Our
                mission is to protect what matters most by first understanding
                the people we serve.
              </p>

              <p className="font-sans leading-relaxed text-stone/85">
                Our goal is not simply to become one of the largest brokerages.
                Our goal is to become one of the most trusted.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-xl border border-stone/20 bg-stone/5 p-8 shadow-lg backdrop-blur-sm">
                <h3 className="mb-4 font-serif text-xl font-semibold text-gold">
                  We Are Committed To
                </h3>

                <ul className="space-y-3">
                  {commitments.map((commitment) => (
                    <li
                      key={commitment}
                      className="relative pl-6 font-sans text-sm text-stone/90"
                    >
                      <span className="absolute left-0 font-bold text-gold">
                        ✓
                      </span>
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Reveal>
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">
              What We Stand For
            </p>

            <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
              Core Values
            </h2>

            <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] leading-relaxed text-[#55504a]">
              Six values that guide how we serve every client &mdash; not a
              poster on a wall. Select one to read more.
            </p>
          </Reveal>

          <ValuesExplorer values={coreValues} />
        </div>
      </section>

      {/* Independent Brokerage */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Reveal>
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">
              How We Work
            </p>

            <h2 className="mx-auto mb-5 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
              What Makes Us an Independent Brokerage
            </h2>

            <p className="mx-auto mb-14 max-w-[640px] text-center font-sans text-[17px] leading-relaxed text-[#55504a]">
              An independent brokerage isn&rsquo;t tied to any single insurance
              company &mdash; our loyalty is to you.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-charcoal/10 bg-stone p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-3 font-serif text-xl font-semibold text-maroon">
                  Customer-First, By Design
                </h3>

                <p className="font-sans text-sm leading-relaxed text-[#55504a]">
                  Because we&rsquo;re not employed by any one carrier,
                  we&rsquo;re free to recommend the coverage that actually fits
                  your situation &mdash; not the option a single
                  company&rsquo;s quota requires.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-xl border border-charcoal/10 bg-stone p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-3 font-serif text-xl font-semibold text-maroon">
                  Relationship-First Service
                </h3>

                <p className="font-sans text-sm leading-relaxed text-[#55504a]">
                  We measure success in relationships that last, not one-time
                  transactions &mdash; the same standard we hold for how we
                  treat every client, every time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
          <Reveal>
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">
              Our Team
            </p>

            <h2 className="mx-auto mb-14 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[38px]">
              Meet the People Behind Maroon Oak
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <Reveal
                key={member.name}
                delay={index * 80}
                className="group text-center"
              >
                <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-gold/25 transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03] sm:h-36 sm:w-36">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 128px, 144px"
                    className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-1 font-serif text-lg font-semibold text-maroon sm:text-xl">
                  {member.name}
                </h3>

                <div className="mb-3 min-h-[32px] text-[11px] font-bold uppercase leading-snug tracking-[0.12em] text-gold-dim">
                  {member.role}
                </div>

                <p className="mx-auto max-w-[220px] font-sans text-[13px] leading-relaxed text-[#55504a]">
                  {member.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContinueExploring
        items={[
          {
            label: "Personal Insurance",
            description:
              "See coverage for your auto, home, family, and more.",
            href: "/personal-insurance",
          },
          {
            label: "Business Insurance",
            description:
              "Explore commercial coverage built around how you operate.",
            href: "/business-insurance",
          },
          {
            label: "Claims",
            description:
              "Understand how claims work and what to do first.",
            href: "/claims",
          },
        ]}
      />

      <CTASection
        title="Let's Start the Conversation."
        description="Whether you're protecting your family, your home, or your business, we're here to help you find the right coverage with confidence."
      />
    </>
  );
}
