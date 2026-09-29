import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { Eyebrow } from './Reveal'

const items = [
  'AI product films',
  'AI photoshoots',
  'Concept campaigns',
  'D2C brands',
  'No camera · No studio',
  'Reels & commercials',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-espresso/10 bg-espresso py-4">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((t, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="px-6 text-[13px] font-medium uppercase tracking-[0.24em] text-ivory/90">
                  {t}
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0">
                  <path d="M5 0l5 5-5 5-5-5z" fill="#c0a062" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const films = [
  { src: 'videos/hero-commercial.mp4', title: 'Premium Commercial', meta: 'AI product film · 16:9' },
  { src: 'videos/product-shoot.mp4', title: 'Product Shoot Film', meta: 'AI product film · 1:1' },
  { src: 'videos/launch-reel.mp4', title: 'Launch Reel', meta: 'AI product film · 9:16' },
  { src: 'videos/diwali-hamper.mp4', title: 'Diwali Hamper Film', meta: 'AI product film · 16:9' },
]

export function Films() {
  const [active, setActive] = useState(null)

  return (
    <section id="films" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal>
            <Eyebrow>Selected films</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-espresso md:text-6xl">
              Films that sell <span className="italic text-golddeep">the product.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-[1.05rem] leading-relaxed text-cocoa md:ml-auto">
              Every frame below was generated with AI — directed, lit and cut like a real commercial.
              Click any film to watch it with sound.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {films.map((f, i) => (
            <Reveal key={f.src} delay={(i % 2) * 0.12}>
              <motion.button
                onClick={() => setActive(f)}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group block w-full text-left"
              >
                <div className="relative overflow-hidden rounded-[1.75rem] border border-line shadow-[0_24px_60px_rgba(34,26,18,0.12)]">
                  <video
                    src={f.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.target.play().catch(() => {})}
                    onMouseLeave={(e) => {
                      e.target.pause()
                      e.target.currentTime = 0
                    }}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ivory/95 shadow-xl backdrop-blur">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M7 4.5v13l11-6.5z" fill="#221a12" />
                      </svg>
                    </span>
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-espresso/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory backdrop-blur">
                    {f.meta}
                  </span>
                </div>
                <div className="flex items-baseline justify-between px-2 pt-5">
                  <h3 className="font-serif text-[1.65rem] font-semibold text-espresso">{f.title}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-golddeep">
                    Watch →
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm md:p-10"
          >
            <motion.div
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <video
                src={active.src}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full rounded-2xl border border-ivory/15 bg-black object-contain"
              />
              <p className="mt-4 text-center font-serif text-xl italic text-ivory/85">{active.title}</p>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
