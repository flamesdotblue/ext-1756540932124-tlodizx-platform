import { useMemo } from 'react'
import { ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

const currencies = [
  { code: 'USD', label: 'US Dollar', symbol: '$' },
  { code: 'EUR', label: 'Euro', symbol: '€' },
  { code: 'BTC', label: 'Bitcoin', symbol: '₿' },
  { code: 'ETH', label: 'Ethereum', symbol: 'Ξ' },
  { code: 'ADA', label: 'Cardano', symbol: '₳' },
]

export default function PricePanel({ baseUSDPrice = 59.99, selectedCurrency, onCurrencyChange }) {
  const rates = useMemo(
    () => ({
      USD: 1,
      EUR: 0.92, // 1 USD = 0.92 EUR
      BTC: 1 / 60000, // 1 USD in BTC, assuming 60k/BTC
      ETH: 1 / 2500, // 1 USD in ETH, assuming 2.5k/ETH
      ADA: 1 / 0.4, // 1 USD in ADA, assuming $0.40/ADA
    }),
    []
  )

  const format = (code, amount) => {
    const curr = currencies.find((c) => c.code === code)
    if (code === 'USD' || code === 'EUR') {
      return `${curr.symbol}${amount.toFixed(2)}`
    }
    if (code === 'BTC') return `${curr.symbol}${amount.toFixed(6)}`
    if (code === 'ETH') return `${curr.symbol}${amount.toFixed(5)}`
    if (code === 'ADA') return `${curr.symbol}${Math.round(amount).toLocaleString()}`
    return amount.toFixed(2)
  }

  const priceByCode = (code) => baseUSDPrice * rates[code]

  const primaryPrice = format(selectedCurrency, priceByCode(selectedCurrency))

  return (
    <aside className="sticky top-20 space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
      <div>
        <h3 className="text-sm font-medium text-zinc-400">Choose currency</h3>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {currencies.map((c) => (
            <button
              key={c.code}
              onClick={() => onCurrencyChange(c.code)}
              className={
                'rounded-md border px-2 py-1.5 text-center text-xs transition ' +
                (selectedCurrency === c.code
                  ? 'border-indigo-500/60 bg-indigo-500/20 text-indigo-300'
                  : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10')
              }
              aria-pressed={selectedCurrency === c.code}
            >
              {c.code}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4"
      >
        <div className="text-xs uppercase tracking-wide text-zinc-400">Current price</div>
        <div className="mt-1 flex items-baseline gap-2">
          <div className="text-3xl font-semibold text-white">{primaryPrice}</div>
          <div className="text-xs text-zinc-400">incl. taxes</div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500">
            <ShoppingCart className="h-4 w-4" /> Add to cart
          </button>
        </div>
      </motion.div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-zinc-400">All currency prices</h4>
        <div className="space-y-1">
          {currencies.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    'inline-flex h-6 min-w-[2.5rem] items-center justify-center rounded border px-2 text-xs ' +
                    (selectedCurrency === c.code
                      ? 'border-indigo-500/60 bg-indigo-500/20 text-indigo-300'
                      : 'border-white/10 bg-white/5 text-zinc-300')
                  }
                >
                  {c.code}
                </span>
                <span className="text-zinc-400">{c.label}</span>
              </div>
              <div className="font-medium text-zinc-100">{format(c.code, priceByCode(c.code))}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="pt-2 text-center text-xs text-zinc-500">
        Rates are estimates for display only and may differ at checkout.
      </p>
    </aside>
  )
}
