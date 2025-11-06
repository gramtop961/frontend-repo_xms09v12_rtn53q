const products = [
  {
    id: 1,
    name: 'Roti Sobek Cokelat',
    price: 18000,
    img: 'https://images.unsplash.com/photo-1604908554049-197846c83b42?q=80&w=1200&auto=format&fit=crop',
    tag: 'Favorit'
  },
  {
    id: 2,
    name: 'Croissant Mentega',
    price: 22000,
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Baru'
  },
  {
    id: 3,
    name: 'Baguette Artisan',
    price: 25000,
    img: 'https://images.unsplash.com/photo-1514512364185-4c2b2b3f1c01?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Roti Tawar Susu',
    price: 15000,
    img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1200&auto=format&fit=crop',
  },
];

function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

export default function ProductGrid() {
  return (
    <section id="produk" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Pilihan Terbaik Hari Ini</h2>
            <p className="mt-1 text-neutral-600">Semua dibuat segar dan siap dinikmati.</p>
          </div>
          <a href="#kontak" className="hidden sm:inline-flex rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">Minta Katalog</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                {p.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-neutral-800 ring-1 ring-neutral-200">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-neutral-900">{p.name}</h3>
                <p className="mt-1 text-amber-600 font-semibold">{formatIDR(p.price)}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white hover:bg-amber-600">Tambah</button>
                  <button className="rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
