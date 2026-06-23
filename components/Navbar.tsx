import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-emerald-600 text-xl font-bold tracking-tight">
            Zero<span className="text-slate-800">Broker</span>
          </span>
          <span className="hidden sm:inline text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold uppercase">
            No Brokerage
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/?type=rent"
            className="text-sm text-slate-600 hover:text-emerald-600 transition-colors hidden sm:block"
          >
            Rent
          </Link>
          <Link
            href="/?type=buy"
            className="text-sm text-slate-600 hover:text-emerald-600 transition-colors hidden sm:block"
          >
            Buy
          </Link>
          <button className="btn-primary text-sm py-2 px-4">
            + List Property
          </button>
        </div>
      </div>
    </nav>
  );
}
