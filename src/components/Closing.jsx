import { motion } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'

const plans = [
  {
    name: 'Starter',
    price: '₹15,000',
    desc: 'For brands getting started with AI ads and discovering what converts.',
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹30,000',
    desc: 'For D2C brands scaling content across reels, ads and launches.',
    featured: true,
  },
  {
    name: 'Scale',
    price: '₹50,000',
    desc: 'For brands that want a full creative engine running every week.',
    featured: false,
  },
]

const oneoffs = [
  ['AI product reel — single film', '₹2,500'],
  ['AI product photoshoot — 10 images', '₹3,000'],
  ['Logo & identity kit', '₹8,000'],
  ['Website — landing page / brand site', 'Custom quote'],
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-espresso md:text-6xl">
            Simple plans, <span className="italic text-golddeep">serious output.</span>
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-cocoa">
            One flat monthly price for your always-on creative team. No retainer games, no per-hour billing.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className={`flex h-full flex-col rounded-[1.75rem] p-9 ${
                  p.featured
                    ? 'bg-espresso text-ivory shadow-[0_30px_70px_rgba(34,26,18,0.35)] lg:scale-[1.04]'
                    : 'border border-line bg-white/60 text-espresso'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${
                      p.featured ? 'text-gold' : 'text-golddeep'
                    }`}
                  >
                    {p.name}
                  </p>
                  {p.featured && (
                    <span className="rounded-full bg-gold/15 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-5 font-serif text-[3.2rem] font-semibold leading-none">
                  {p.price}
                  <span className={`text-lg font-normal ${p.featured ? 'text-ivory/55' : 'text-cocoa'}`}>/mo</span>
                </p>
                <p className={`mt-4 flex-1 leading-relaxed ${p.featured ? 'text-ivory/65' : 'text-cocoa'}`}>{p.desc}</p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-8 rounded-full py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    p.featured
                      ? 'bg-gold text-espresso hover:bg-ivory'
                      : 'bg-espresso text-ivory hover:bg-golddeep'
                  }`}
                >
                  Start a project
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white/60">
            {oneoffs.map(([label, price], i) => (
              <div
                key={label}
                className={`flex items-center justify-between px-7 py-5 ${i > 0 ? 'border-t border-line' : ''}`}
              >
                <span className="text-cocoa">{label}</span>
                <span className="font-serif text-xl font-semibold text-espresso">{price}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-espresso py-28 md:py-36">
      <div className="animate-drift pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/12 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow light>Start a project</Eyebrow>
          <h2 className="mt-6 font-serif text-[3.4rem] font-medium leading-[1.02] tracking-tight text-ivory md:text-[5.5rem]">
            Let's make <span className="italic text-gold">your ad.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-ivory/60">
            DM <span className="font-semibold text-ivory">“DEMO”</span> on Instagram and get a free sample film made
            for your product.
          </p>
          <motion.a
            href="https://instagram.com/advyu.ai"
            target="_blank"
            rel="noopener"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-block rounded-full bg-gold px-10 py-4.5 text-sm font-semibold uppercase tracking-[0.16em] text-espresso shadow-[0_20px_50px_rgba(192,160,98,0.35)] transition-colors hover:bg-ivory"
          >
            DM “Demo” on Instagram
          </motion.a>
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.26em] text-ivory/40">
            Free sample · No camera · No studio
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <a href="#top" className="font-serif text-3xl font-semibold tracking-wide text-espresso">
            AdVyu<span className="align-super text-sm text-golddeep">®</span>
          </a>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              ['Films', '#films'],
              ['Services', '#services'],
              ['Process', '#process'],
              ['Pricing', '#pricing'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="link-underline text-[13px] font-medium uppercase tracking-[0.18em] text-cocoa hover:text-espresso"
              >
                {label}
              </a>
            ))}
            <a
              href="https://instagram.com/advyu.ai"
              target="_blank"
              rel="noopener"
              className="link-underline text-[13px] font-medium uppercase tracking-[0.18em] text-golddeep"
            >
              Instagram ↗
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-cocoa/70">
          <span>© 2026 AdVyu · AI product films for D2C brands</span>
          <span>Crafted with AI, directed by humans.</span>
        </div>
      </div>
    </footer>
  )
}
