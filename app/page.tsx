import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import WhyUs from "./components/Why-us";
import Gallery from "./components/Gallery";
import QuoteForm from "./components/Quote-form";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="page-bg">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <Hero />
        <Collections />
        <WhyUs />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
