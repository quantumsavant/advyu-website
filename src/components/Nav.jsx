import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Films', href: '#films' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.21, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/85 backdrop-blur-xl border-b border-line shadow-[0_8px_30px_rgba(34,26,18,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-[1.7rem] font-semibold tracking-wide text-espresso">
          AdVyu<span className="align-super text-xs text-golddeep">®</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[13px] font-medium uppercase tracking-[0.18em] text-cocoa hover:text-espresso transition-colors"
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-espresso px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-golddeep"
          >
            Start a project
          </motion.a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-espresso md:hidden"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-line bg-ivory/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-serif text-2xl text-espresso hover:bg-cream transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-espresso px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-ivory"
              >
                Start a project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
