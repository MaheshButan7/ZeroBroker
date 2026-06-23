import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types";

function formatPrice(price: number, type: string) {
  if (type === "rent") return `₹${price.toLocaleString("en-IN")}/mo`;
  return `₹${(price / 100000).toFixed(1)} L`;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden
        hover:shadow-md hover:border-emerald-300 transition-all duration-200"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${
            property.type === "rent"
              ? "bg-emerald-500 text-white"
              : "bg-blue-500 text-white"
          }`}
        >
          {property.type === "rent" ? "Rent" : "Buy"}
        </span>
        <span className="absolute top-3 right-3 text-[11px] bg-black/50 text-white px-2 py-0.5 rounded-full">
          {property.furnished}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-1 group-hover:text-emerald-700 transition-colors">
          {property.title}
        </h3>
        <p className="text-xs text-slate-400 mb-3">📍 {property.location}</p>

        <div className="flex gap-3 text-xs text-slate-600 mb-3">
          <span>{property.bedrooms} BHK</span>
          <span>{property.bathrooms} Bath</span>
          <span>{property.area} sq.ft</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {property.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
          {property.tags.length > 2 && (
            <span className="tag-pill">+{property.tags.length - 2}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-emerald-600">
            {formatPrice(property.price, property.type)}
          </p>
          <p className="text-[11px] text-slate-400">{property.postedAt}</p>
        </div>
      </div>
    </Link>
  );
}
