import { useState } from 'react'
import Header from './components/Header'
import GameHero from './components/GameHero'
import PricePanel from './components/PricePanel'
import GameDetails from './components/GameDetails'

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const game = {
    title: 'Neon Horizon',
    subtitle: 'A cinematic sci‑fi adventure',
    cover:
      'https://images.unsplash.com/photo-1542759564-6fc7163f3a31?q=80&w=1920&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop',
    ],
    tags: ['Action', 'Sci‑Fi', 'Singleplayer', 'Immersive'],
    rating: 4.6,
    reviews: 12874,
    baseUSDPrice: 59.99,
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0b0f14] via-[#0d1117] to-[#0b0f14]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-24">
        <GameHero game={game} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <GameDetails game={game} />
          </div>
          <div className="md:col-span-1">
            <PricePanel
              baseUSDPrice={game.baseUSDPrice}
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
