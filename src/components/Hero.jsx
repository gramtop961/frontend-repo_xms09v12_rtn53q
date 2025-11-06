import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5t0jC2V5v1GZzqD7/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content layer */}
      <div className="relative isolate flex min-h-screen items-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
              Roti Fresh Setiap Hari
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">
              Toko Rotiku — Hangat, Lembut, dan Selalu Baru
            </h1>
            <p className="mt-4 text-neutral-600">
              Nikmati berbagai pilihan roti handmade dengan bahan premium. Pesan online, ambil di toko, atau kirim ke rumah.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#produk" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-600">
                Lihat Produk
              </a>
              <a href="#kontak" className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-sm hover:bg-neutral-50">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
