"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PropertyType } from "@/types";

export default function SearchBar() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [type, setType] = useState<PropertyType | "all">("all");

  function handleSearch() {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (city.trim()) params.set("city", city.trim());
    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="bg-white rounded-2xl p-3 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto shadow-lg">
      <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
        {(["all", "rent", "buy"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              type === t
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-800"
            }`}
          >
            {t === "all" ? "All" : t === "rent" ? "Rent" : "Buy"}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        placeholder="Search by area (e.g. Baner, Hinjewadi)"
        className="flex-1 input-base text-slate-700"
      />

      <button onClick={handleSearch} className="btn-primary whitespace-nowrap">
        Search
      </button>
    </div>
  );
}
