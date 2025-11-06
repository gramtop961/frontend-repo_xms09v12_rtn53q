import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Contact />
      </main>
      <footer className="border-t border-neutral-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Toko Rotiku. Semua Hak Dilindungi.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="#beranda" className="hover:text-neutral-900">Beranda</a>
            <a href="#produk" className="hover:text-neutral-900">Produk</a>
            <a href="#kontak" className="hover:text-neutral-900">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
