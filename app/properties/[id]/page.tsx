import { properties } from "@/data/properties";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) return {};
  return { title: `${property.title} | ZeroBroker` };
}

function formatPrice(price: number, type: string) {
  if (type === "rent") return `₹${price.toLocaleString("en-IN")}/mo`;
  return `₹${(price / 100000).toFixed(1)} L`;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-slate-500 hover:text-emerald-600 mb-6 transition-colors"
      >
        ← Back to listings
      </Link>

      <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
          priority
        />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full uppercase ${
            property.type === "rent"
              ? "bg-emerald-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          For {property.type}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">
              {property.title}
            </h1>
            <p className="text-slate-500 text-sm">📍 {property.location}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Bedrooms", value: `${property.bedrooms} BHK` },
              { label: "Bathrooms", value: String(property.bathrooms) },
              { label: "Area", value: `${property.area} sq.ft` },
            ].map((s) => (
              <div key={s.label} className="bg-slate-100 rounded-xl p-4 text-center">
                <p className="text-lg font-semibold text-slate-800">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              Furnishing
            </h3>
            <span className="tag-pill text-sm">{property.furnished}</span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              Amenities
            </h3>
            <div className="flex flex-wrap gap-2">
              {property.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-400">Posted {property.postedAt}</p>
        </div>

        {/* contact card */}
        <div className="md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-20">
            <p className="text-2xl font-bold text-emerald-600 mb-1">
              {formatPrice(property.price, property.type)}
            </p>
            <p className="text-xs text-slate-400 mb-5">
              Zero brokerage · Direct owner
            </p>

            <button className="btn-primary w-full mb-3">Contact Owner</button>
            <button className="btn-outline w-full">WhatsApp</button>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 text-center">
                Your info is shared only with the owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
