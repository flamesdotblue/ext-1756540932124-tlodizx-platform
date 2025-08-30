import { Star, Monitor, Gamepad2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GameHero({ game }) {
  const { title, subtitle, cover, tags, rating, reviews } = game
  return (
    <section className="relative mb-10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="absolute inset-0">
        <img
          src={cover}
          alt="Game cover"
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-black/40" />
      </div>
      <div className="relative z-10 grid grid-cols-1 gap-6 p-6 md:grid-cols-3 md:gap-10 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h1>
          <p className="mt-2 text-zinc-300">{subtitle}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-amber-300">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              <span className="text-xs text-amber-200/70">({reviews.toLocaleString()})</span>
            </div>
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-2">
              <Monitor className="h-4 w-4" /> PC
            </span>
            <span className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" /> Controller support
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="md:col-span-1"
        >
          <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
            <img
              src={cover}
              alt="Key art"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
