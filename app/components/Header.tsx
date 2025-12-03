import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-cream/95 backdrop-blur border-b border-strawberry/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-[190px] overflow-hidden flex items-center">
            <Image
              src="/logo.png"
              alt="Cookieteer logo"
              width={500}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-choco/80">
          <a href="#collections" className="hover:text-choco">
            Collections
          </a>
          <a href="#gallery" className="hover:text-choco">
            Gallery
          </a>
          <a href="#quote" className="hover:text-choco">
            Request a quote
          </a>
        </nav>

        {/* CTA button */}
        <Link
          href="#quote"
          className="hidden sm:inline-flex rounded-full bg-choco text-cream px-4 py-2 text-xs font-medium shadow-cookie hover:bg-choco/90"
        >
          Order cookies
        </Link>
      </div>
    </header>
  );
}
