import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-14 sm:py-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="flex-1 space-y-6">
        <p className="uppercase tracking-[0.25em] text-xs text-caramel">
          Custom decorated cookies • Toronto
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-choco">
          Sweet, hand-piped cookies
          <br />
          for your{" "}
          <span className="inline-block bg-cream/70 px-1.5 pb-1 rounded-md border-b-4 border-caramel/60">
            favourite
          </span>{" "}
          <span className="inline-block bg-cream/70 px-1.5 pb-1 rounded-md border-b-4 border-strawberry/70">
            people.
          </span>
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-choco/80">
          From birthdays and baby showers to brand launches, we create custom
          sugar cookies that look magical and taste like home.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-choco text-cream px-6 py-3 text-sm font-medium shadow-cookie hover:translate-y-0.5 transition-transform"
          >
            Request a quote
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-full border border-choco/15 bg-cream/70 px-6 py-3 text-sm font-medium hover:bg-cream"
          >
            View gallery
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — CIRCULAR IMAGE WITH HALO */}
      <div className="flex-1 w-full">
        <div className="relative max-w-sm mx-auto">

          {/* HALO BEHIND THE IMAGE */}
          <div className="absolute inset-0 -z-10 scale-[1.25] rounded-full bg-gradient-to-br from-strawberry/30 to-caramel/40 blur-2xl"></div>

          {/* CIRCULAR IMAGE */}
          <div className="rounded-full overflow-hidden aspect-square shadow-cookie border border-strawberry/20">
            <Image
              src="/Hero.png"
              alt="Decorating cookies"
              width={1200}
              height={1200}
              priority
              className="w-full h-full object-cover object-center scale-[1]"
            />
          </div>

          {/* BADGE */}
          <div className="absolute -bottom-4 -left-4 bg-cream rounded-3xl px-4 py-3 shadow-cookie text-xs sm:text-sm text-choco/80 z-20">
            Minimum order 12 cookies • 2–3 weeks&apos; notice
          </div>
        </div>
      </div>
    </section>
  );
}
