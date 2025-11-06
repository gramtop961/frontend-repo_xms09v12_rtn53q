import { useState } from 'react';
import { ShoppingCart, Menu, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Produk', href: '#produk' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-400" />
            <span className="text-lg font-semibold tracking-tight">Toko Rotiku</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+621234567890"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              <Phone size={16} />
              Pesan Cepat
            </a>
            <button className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600">
              <ShoppingCart size={16} />
              Keranjang
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="tel:+621234567890"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50"
                >
                  <Phone size={16} />
                  Pesan Cepat
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-3 py-2 text-sm font-medium text-white hover:bg-amber-600">
                  <ShoppingCart size={16} />
                  Keranjang
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
