import { Search, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b0f14]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-sky-500" />
          <div className="text-lg font-semibold tracking-tight text-white">Nebula</div>
        </div>
        <div className="hidden flex-1 items-center md:flex">
          <div className="relative w-full max-w-xl">
            <input
              className="w-full rounded-md border border-white/10 bg-white/5 py-2 pl-10 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              placeholder="Search the store"
              aria-label="Search"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="rounded-md border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-white/20 hover:bg-white/10">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="rounded-md border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:border-white/20 hover:bg-white/10">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
