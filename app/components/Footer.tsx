export default function Footer() {
  return (
    <footer className="mt-10 border-t border-strawberry/20 bg-cream/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-choco/70">
        <p>© {new Date().getFullYear()} Cookies by Dariichan. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" className="hover:text-caramel">
            Instagram
          </a>
          <a href="mailto:hello@example.com" className="hover:text-caramel">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
