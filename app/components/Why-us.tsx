const reasons = [
  {
    title: "Hand-piped details",
    text: "Every cookie is decorated by hand, one by one — no shortcuts.",
  },
  {
    title: "Thoughtful flavours",
    text: "Vanilla sugar cookies with a hint of citrus, paired with vanilla royal icing.",
  },
  {
    title: "Beautifully packaged",
    text: "Individually bagged and heat-sealed, ready for gifting or party favours.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-14 sm:py-18">
      <div className="max-w-xl mb-8">
        <h2 className="font-display text-3xl sm:text-4xl mb-2">
          What makes our cookies special
        </h2>
        <p className="text-sm sm:text-base text-choco/75">
          We’re a small home bakery, so every set is designed, baked, and
          decorated with care — no mass production, just delicious details.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {reasons.map((item) => (
          <div
            key={item.title}
            className="bg-cream/90 rounded-3xl border border-caramel/10 p-4 sm:p-5"
          >
            <h3 className="font-display text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-choco/75">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
