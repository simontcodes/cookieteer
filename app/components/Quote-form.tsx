"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data.entries())); // replace with API later
    setTimeout(() => setStatus("done"), 700);
  }

  return (
    <section id="quote" className="py-16 sm:py-20">
      <div className="max-w-xl mb-7">
        <h2 className="font-display text-3xl sm:text-4xl mb-2">
          Request a custom quote
        </h2>
        <p className="text-sm sm:text-base text-choco/75">
          Share your event date, theme, and approximate quantity. We’ll
          email you back with pricing and availability.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-cream rounded-3xl shadow-cookie border border-strawberry/20 p-6 sm:p-8 grid gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-caramel">*</span>
            </label>
            <input
              name="name"
              required
              className="w-full rounded-full border border-strawberry/30 bg-cream px-4 py-2.5 text-sm outline-none focus:border-caramel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email <span className="text-caramel">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-full border border-strawberry/30 bg-cream px-4 py-2.5 text-sm outline-none focus:border-caramel"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Event date
            </label>
            <input
              name="eventDate"
              type="date"
              className="w-full rounded-full border border-strawberry/30 bg-cream px-4 py-2.5 text-sm outline-none focus:border-caramel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Approx. number of cookies
            </label>
            <input
              name="quantity"
              type="number"
              min={1}
              className="w-full rounded-full border border-strawberry/30 bg-cream px-4 py-2.5 text-sm outline-none focus:border-caramel"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Theme / colours / details
          </label>
          <textarea
            name="details"
            rows={4}
            className="w-full rounded-3xl border border-strawberry/30 bg-cream px-4 py-3 text-sm outline-none focus:border-caramel resize-none"
            placeholder="e.g. pastel florals for a bridal shower, neutral palette, name ‘Clara’ on a few cookies…"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Budget range
          </label>
          <select
            name="budget"
            className="w-full rounded-full border border-strawberry/30 bg-cream px-4 py-2.5 text-sm outline-none focus:border-caramel"
          >
            <option value="">Select an option</option>
            <option value="under-100">$50 – $100</option>
            <option value="100-200">$100 – $200</option>
            <option value="200-300">$200 – $300</option>
            <option value="300-plus">$300+</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-choco text-cream px-6 py-3 text-sm font-medium shadow-cookie hover:translate-y-0.5 transition-transform disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit request"}
        </button>

        {status === "done" && (
          <p className="text-xs sm:text-sm text-green-700">
            Thank you! We&apos;ll reply soon with more details.
          </p>
        )}
      </form>
    </section>
  );
}
