import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Hubungi Kami</h2>
            <p className="mt-2 text-neutral-600">Pesan via WhatsApp, telepon, atau datang langsung ke toko.</p>

            <div className="mt-6 space-y-3">
              <a href="tel:+621234567890" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50">
                <Phone className="text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">Telepon</p>
                  <p className="text-sm text-neutral-600">+62 123-456-7890</p>
                </div>
              </a>
              <a href="mailto:halo@tokorotiku.id" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 hover:bg-neutral-50">
                <Mail className="text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">Email</p>
                  <p className="text-sm text-neutral-600">halo@tokorotiku.id</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
                <MapPin className="text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-neutral-900">Alamat</p>
                  <p className="text-sm text-neutral-600">Jl. Roti Hangat No. 10, Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-neutral-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200" placeholder="Nama kamu" />
              </div>
              <div>
                <label className="text-sm text-neutral-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200" placeholder="email@contoh.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-neutral-700">Pesan</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-200" placeholder="Tulis pesanmu di sini"></textarea>
              </div>
            </div>
            <button type="button" className="mt-4 w-full rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-amber-600">Kirim</button>
            <p className="mt-2 text-xs text-neutral-500">Form ini simulasi. Untuk fast response, klik tombol Telepon di samping.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
