const placeholder = Array.from({ length: 6 });

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-18">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-display text-3xl sm:text-4xl">Gallery</h2>
        <p className="text-xs sm:text-sm text-choco/60">
          Real sets by Dariichan
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {placeholder.map((_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-3xl bg-cream border border-strawberry/25 shadow-cookie/40 flex items-center justify-center text-choco/40 text-sm text-center px-4"
          >
            Add cookie photo #{i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
