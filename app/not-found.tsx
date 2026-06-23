import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Property Not Found
      </h2>
      <p className="text-slate-400 mb-6">
        This listing may have been removed or doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">
        Back to listings
      </Link>
    </div>
  );
}
