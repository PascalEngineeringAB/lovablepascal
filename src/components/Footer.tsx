export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800/50 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="size-4 border-2 border-zinc-600" />
            <span className="font-display text-zinc-100 font-semibold tracking-tight">
              PASCAL ENGINEERING
            </span>
          </div>
          <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
            Specialized structural consultancy focused on long-span steel systems
            and complex geometric architectural forms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-zinc-100 uppercase tracking-widest">
              Offices
            </span>
            <ul className="text-xs flex flex-col gap-2 text-zinc-400">
              <li>Stockholm / HQ</li>
              <li>Gothenburg</li>
              <li>Malmö</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-zinc-100 uppercase tracking-widest">
              Contact
            </span>
            <ul className="text-xs flex flex-col gap-2 text-zinc-400">
              <li className="hover:text-copper transition-colors">
                info@pascalengineering.se
              </li>
              <li>+46 8 123 45 67</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Pascal Engineering AB
        </span>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
