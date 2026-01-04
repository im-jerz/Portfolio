import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const BRAND_NAME = "JERSON";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-2.5 transition-all duration-500 border rounded-full bg-white/70 backdrop-blur-md ${
            scrolled ? "border-zinc-200 shadow-sm" : "border-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform" />
            <span className="font-mono text-sm font-bold tracking-widest uppercase">
              {BRAND_NAME}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.href;

              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`font-mono text-[11px] uppercase tracking-widest transition-colors relative group ${
                    isActive ? "text-black" : "text-zinc-500 hover:text-black"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="/contact"
              className="px-5 py-1.5 bg-black text-white rounded-full font-mono text-[11px] uppercase tracking-wider hover:bg-zinc-800 transition-all"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden text-black p-1 transition-opacity hover:opacity-60"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isMenuOpen ? "w-6 translate-y-2 -rotate-45" : "w-6"
                }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-px bg-black transition-all duration-300 ${
                  isMenuOpen ? "w-6 -translate-y-2 rotate-45" : "w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[-1] transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.href;
            return (
              <a
                key={idx}
                href={item.href}
                className={`text-3xl font-medium tracking-tighter transition-all ${
                  isActive
                    ? "italic underline underline-offset-8"
                    : "hover:italic"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-10 py-4 bg-black text-white rounded-full font-mono text-sm uppercase tracking-widest"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
