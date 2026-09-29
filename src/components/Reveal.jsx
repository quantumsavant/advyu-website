import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.61, 0.21, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-gold" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? 'text-gold' : 'text-golddeep'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
