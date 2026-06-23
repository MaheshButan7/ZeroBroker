import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import { properties } from "@/data/properties";

interface HomePageProps {
  searchParams: Promise<{ type?: string; city?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { type = "all", city = "" } = await searchParams;
  const q = city.toLowerCase();

  const filtered = properties.filter((p) => {
    const typeOk = type === "all" || p.type === type;
    const cityOk = !q || p.location.toLowerCase().includes(q);
    return typeOk && cityOk;
  });

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-semibold
              uppercase px-3 py-1 rounded-full mb-4 border border-emerald-500/30"
          >
            Zero Brokerage
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Find Your Perfect Home <br className="hidden md:block" />
            <span className="text-emerald-400">in Pune</span>
          </h1>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Browse verified listings directly from owners. No middlemen, no
            brokerage fees.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* listings */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-800">
            {filtered.length} Properties Found
            {q && (
              <span className="text-slate-400 font-normal">
                {" "}in &quot;{q}&quot;
              </span>
            )}
          </h2>
          <div className="flex gap-2">
            {(["all", "rent", "buy"] as const).map((t) => (
              <a
                key={t}
                href={`/?type=${t}${q ? `&city=${q}` : ""}`}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  type === t
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "border-slate-300 text-slate-600 hover:border-emerald-400"
                }`}
              >
                {t === "all" ? "All" : t === "rent" ? "Rent" : "Buy"}
              </a>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-5xl mb-4">🏠</p>
            <p className="text-lg font-medium">No properties match your search</p>
            <p className="text-sm mt-1">Try a different area or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
