import { motion } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="animate-drift-slow pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-blush/60 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-serif text-[7rem] italic leading-none text-gold/50">“</span>
          <h2 className="-mt-10 font-serif text-4xl font-medium leading-[1.15] text-espresso md:text-[3.4rem]">
            AI can generate footage.
            <span className="block">
              It takes a <span className="italic text-golddeep">director</span> to make an ad that sells.
            </span>
          </h2>
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
        </Reveal>
      </div>
    </section>
  )
}

const services = [
  {
    n: '01',
    title: 'AI Product Films',
    desc: 'Cinema-grade reels and commercials for your hero product. Scroll-stopping, sound-designed, ready to run as ads.',
    price: 'from ₹2,500',
  },
  {
    n: '02',
    title: 'AI Product Photoshoot',
    desc: 'A full studio-grade shoot without the studio — 10 polished product images in any scene, any mood, any season.',
    price: '₹3,000',
  },
  {
    n: '03',
    title: 'Logo & Identity Kit',
    desc: 'A complete identity for new brands — logo, colour system, typography and launch-ready brand assets.',
    price: '₹8,000',
  },
  {
    n: '04',
    title: 'Websites',
    desc: 'Landing pages and brand websites that match the films — sharp, fast, built to convert.',
    price: 'Custom quote',
  },
  {
    n: '05',
    title: 'Monthly Content Engine',
    desc: 'Your always-on creative team. Films, shoots and creatives every month on one simple plan.',
    price: 'from ₹15,000/mo',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-espresso md:text-6xl">
            One studio, <span className="italic text-golddeep">every format.</span>
          </h2>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} y={20}>
              <motion.a
                href="#contact"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-8 gap-y-2 border-t border-line py-8 last:border-b md:grid-cols-[4rem_1fr_auto_auto] md:gap-x-10"
              >
                <span className="font-serif text-xl italic text-golddeep">{s.n}</span>
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-espresso transition-colors group-hover:text-golddeep md:text-[2rem]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl leading-relaxed text-cocoa">{s.desc}</p>
                </div>
                <span className="col-start-2 text-sm font-semibold uppercase tracking-[0.16em] text-espresso md:col-start-3">
                  {s.price}
                </span>
                <span className="col-start-2 flex h-12 w-12 items-center justify-center rounded-full border border-line text-espresso transition-all duration-300 group-hover:border-golddeep group-hover:bg-golddeep group-hover:text-ivory md:col-start-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    n: '01',
    title: 'Share your product',
    desc: 'A few photos is enough. No shoot, no courier, no studio booking needed.',
  },
  {
    n: '02',
    title: 'Concept',
    desc: 'We script your ad like filmmakers — hook, story, shots — built around what makes your product sell.',
  },
  {
    n: '03',
    title: 'AI production',
    desc: 'Directed frame by frame: lighting, motion, edit and sound design, until it feels expensive.',
  },
  {
    n: '04',
    title: 'Delivery',
    desc: 'Ready-to-post files in every format — reels, ads and your website hero. Done.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-espresso py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-14">
          <Eyebrow light>How it works</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ivory md:text-6xl">
            From product <span className="italic text-gold">to premiere.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, borderColor: 'rgba(192,160,98,0.55)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="h-full rounded-[1.5rem] border border-ivory/12 bg-ivory/[0.04] p-8 backdrop-blur-sm"
              >
                <p className="font-serif text-5xl italic text-gold">{s.n}</p>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ivory">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/60">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
