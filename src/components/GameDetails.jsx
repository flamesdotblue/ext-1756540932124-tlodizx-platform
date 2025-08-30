export default function GameDetails({ game }) {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">About this game</h2>
        <p className="mt-3 leading-relaxed text-zinc-300">
          Neon Horizon is a narrative-driven action adventure set across colossal orbital cities. Explore
          handcrafted districts, hack security grids, and master fluid combat inspired by immersive sims. Your
          choices ripple across factions to shape the fate of the station.
        </p>
        <ul className="mt-4 grid list-disc gap-2 pl-6 text-zinc-300 md:grid-cols-2">
          <li>Cinematic campaign with branching outcomes</li>
          <li>Precision gunplay and stealth systems</li>
          <li>Reactive AI and systemic sandbox encounters</li>
          <li>Ultra-wide and high refresh support</li>
        </ul>
      </section>

      <section className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">System requirements</h3>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium text-zinc-300">Minimum</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Quad-core</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: GTX 1060 / RX 580</li>
              <li>Storage: 50 GB available space</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-zinc-300">Recommended</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              <li>OS: Windows 11 64-bit</li>
              <li>Processor: 6-core</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: RTX 3060 / RX 6600 XT</li>
              <li>Storage: SSD with 50 GB free</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Screenshots</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {game.gallery.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-white/10">
              <img src={src} alt={`Screenshot ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
