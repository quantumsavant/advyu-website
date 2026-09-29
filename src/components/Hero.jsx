import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Eyebrow } from './Reveal'

const ease = [0.22, 0.61, 0.21, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-ivory pt-32 pb-16 md:pt-40 md:pb-24">
      {/* ambient blobs */}
      <div className="animate-drift pointer-events-none absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-blush/50 blur-[110px]" />
      <div className="animate-drift-slow pointer-events-none absolute top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-gold/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-cream blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* copy */}
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <Eyebrow>AI creative studio · for D2C brands</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12, ease }}
            className="mt-6 font-serif text-[3.4rem] font-medium leading-[1.02] tracking-tight text-espresso md:text-[5.2rem]"
          >
            Cinema-grade ads,
            <span className="block italic text-golddeep">without the shoot.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cocoa"
          >
            AdVyu crafts AI product films for D2C brands. No camera. No studio. Just ads that sell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#films"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-espresso px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory shadow-[0_18px_40px_rgba(34,26,18,0.25)] transition-colors hover:bg-golddeep"
            >
              See the films
            </motion.a>
            <motion.a
              href="https://instagram.com/advyu.ai"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-espresso/25 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-espresso transition-colors hover:border-golddeep hover:text-golddeep"
            >
              Get a free sample
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] font-medium uppercase tracking-[0.16em] text-cocoa"
          >
            {['No camera', 'No studio', 'Just ads that sell'].map((t) => (
              <span key={t} className="flex items-center gap-2.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.2" stroke="#93763c" strokeWidth="1.4" />
                  <path d="M4.5 7.2l1.8 1.8 3.2-3.6" stroke="#93763c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* arch video */}
        <motion.div style={{ y: videoY }} className="relative mx-auto w-full max-w-[430px]">
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease }}
            className="relative overflow-hidden rounded-b-[2rem] rounded-t-[999px] border border-line shadow-[0_40px_90px_rgba(34,26,18,0.22)]"
          >
            <video
              className="aspect-[3/4] w-full object-cover"
              src="videos/hero-commercial.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
          </motion.div>

          {/* floating card: now screening */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="absolute -left-4 top-[22%] md:-left-12"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-3 rounded-2xl border border-line bg-ivory/90 px-5 py-3.5 shadow-[0_18px_45px_rgba(34,26,18,0.14)] backdrop-blur-md"
            >
              <span className="animate-softblink h-2.5 w-2.5 rounded-full bg-golddeep" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cocoa">Now screening</p>
                <p className="font-serif text-lg font-semibold text-espresso">AdVyu showreel</p>
              </div>
            </motion.div>
          </motion.div>

          {/* floating card: craft */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1, ease }}
            className="absolute -right-3 bottom-[14%] md:-right-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="rounded-2xl border border-line bg-espresso px-5 py-3.5 shadow-[0_18px_45px_rgba(34,26,18,0.3)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Directed frame by frame</p>
              <p className="mt-1 font-serif text-lg font-semibold italic text-ivory">4K · Sound-designed</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative mx-auto mt-16 flex max-w-7xl justify-center px-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cocoa"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <rect x="0.75" y="0.75" width="12.5" height="20.5" rx="6.25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="7" cy="7" r="1.6" fill="#93763c" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
