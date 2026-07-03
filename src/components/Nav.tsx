import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <nav className="fixed top-0 z-50 w-full bg-charcoal/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-5 border-2 border-copper" />
          <span className="font-display text-zinc-100 font-semibold tracking-tight text-lg">
            PASCAL
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
              activeProps={{ className: "text-zinc-100" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-zinc-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-charcoal border-b border-zinc-800/50 px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium tracking-wide uppercase text-zinc-400 hover:text-zinc-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
