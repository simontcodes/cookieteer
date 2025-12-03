const collections = [
  {
    name: "Birthday magic",
    description: "Numbers, names, and themes for little (and big) kids.",
  },
  {
    name: "Weddings & showers",
    description: "Soft, romantic designs for showers, weddings, and anniversaries.",
  },
  {
    name: "Corporate & branding",
    description: "Logo cookies for launches, staff gifts, and events.",
  },
  {
    name: "Seasonal & holidays",
    description: "Christmas, Halloween, Valentine’s Day and more.",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-14 sm:py-18">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-display text-3xl sm:text-4xl">
          Cookie collections
        </h2>
        <p className="text-xs sm:text-sm text-choco/60">
          A few of our favourite sets
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((col) => (
          <div
            key={col.name}
            className="bg-cream/80 border border-strawberry/15 rounded-3xl p-4 sm:p-5 shadow-cookie/40 hover:shadow-cookie transition-shadow"
          >
            <div className="w-9 h-9 rounded-full bg-strawberry/80 mb-3 flex items-center justify-center text-cream">
              🍪
            </div>
            <h3 className="font-display text-lg mb-1">{col.name}</h3>
            <p className="text-sm text-choco/75">{col.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
