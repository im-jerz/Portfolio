// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Cloud", href: "#" },
    { label: "Research", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="flex items-center justify-between px-5 py-3 bg-white/90 backdrop-blur-xl border border-black/10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_24px_-2px_rgba(0,0,0,0.08)]">
        <span className="font-mono text-sm font-bold text-black tracking-tighter">
          Jerson
        </span>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="font-mono text-xs font-medium text-black/80 hover:text-black transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-black p-1.5 focus:outline-none transition-opacity hover:opacity-80"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-3 md:hidden">
          <div className="bg-white backdrop-blur-xl rounded-2xl border border-black/15 shadow-xl overflow-hidden">
            <div className="p-5 space-y-3">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block py-2.5 font-mono text-sm font-medium text-black hover:text-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
