import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-content">
      {/* Navigation */}
      <header className="container">
        <nav className="nav-container">
          <div className="nav-top">
            <Link href="/" className="nav-logo">CINNAMON WORKS</Link>
            <div className="nav-actions">
              <button className="icon-btn">🔍</button>
              <button className="icon-btn">👤</button>
              <button className="icon-btn">🛒</button>
            </div>
          </div>
          
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#covid">Covid-19</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/menu#cookies">Cookies</Link></li>
            <li><Link href="/menu#breads">Quick Breads</Link></li>
            <li><Link href="/menu#muffins">Muffins</Link></li>
            <li><Link href="/menu#rolls">Rolls & More</Link></li>
            <li><Link href="/menu#coffee">Coffee</Link></li>
            <li><Link href="/menu#orders">Orders</Link></li>
            <li><Link href="/#farm">farm</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-wrapper container">
        <div className="hero-inner">
          <h1 className="hero-headline">
            CINNAMON<br />WORKS
          </h1>

          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=1200" 
              alt="Freshly baked cinnamon roll background" 
              className="hero-image"
            />
          </div>

          <div className="bakery-label handwritten" style={{ zIndex: 6, top: '15%', transform: 'rotate(-10deg)', fontSize: '3rem' }}>bakery</div>

          <p className="hero-subtext">
            Gluten-free, vegan, and regular treats in the heart of Seattle's Pike Place Market. Over 35 years of artisanal baking.
          </p>

          <div className="hero-actions" style={{ display: 'flex', gap: '2rem', alignItems: 'center', zIndex: 10, position: 'relative' }}>
            <Link href="/menu" className="btn-primary">ORDER NOW</Link>
            <Link href="/menu" className="btn-secondary" style={{ color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '0.6rem 1.2rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.2)' }}>
              Explore Our Menu <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="handwritten">Our Story</span>
            <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Handcrafted with Love</h2>
            <p style={{ color: 'var(--soft-blue-gray)', marginBottom: '1.5rem' }}>
              Over the years, Michael, his wife Judy, and their daughter Gracie, have expanded their product offering of cinnamon rolls, whole wheat sticky buns and giant chocolate chip cookies to include baked goods sought after by those who cannot eat "just any cookie".
            </p>
            <p style={{ color: 'var(--soft-blue-gray)' }}>
              People with gluten and dairy sensitivity can find what they want at Cinnamon Works. We reflect the creativity and healthy living of the city we're located in.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
              alt="Bakery setting" 
              style={{ width: '100%', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Fresh From The Oven</h2>
          <p style={{ color: 'var(--soft-blue-gray)' }}>Check out our most loved treats</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <ProductCard 
            title="Giant Chocolate Chip" 
            desc="Classic, chewy and loaded with chocolate chips. A Pike Place legend."
            price="$6.00"
            img="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"
          />
          <ProductCard 
            title="Cinnamon Roll" 
            desc="The roll that started it all. Available with royal frosting or as a sticky bun."
            price="$7.50"
            img="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800"
          />
          <ProductCard 
            title="Pumpkin Muffin" 
            desc="Impressively soft and available with buttercream frosting. GF options available."
            price="$5.50"
            img="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', background: '#fff' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Cinnamon Works</h3>
            <p>1536 Pike Place<br />Seattle, WA 98101</p>
            <p>(206) 583-0085</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Hours</h4>
            <p>Th-F: 9am - 4pm</p>
            <p>Sa-Su: 9am - 5pm</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span>Instagram</span>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function ProductCard({ title, desc, price, img }: { title: string, desc: string, price: string, img: string }) {
  return (
    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', textAlign: 'left' }}>
      <img 
        src={img} 
        alt={title} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.5rem' }} 
      />
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--soft-blue-gray)', fontSize: '0.875rem', marginBottom: '1rem', minHeight: '3rem' }}>{desc}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: '700', fontSize: '1.125rem' }}>{price}</span>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Add</button>
      </div>
    </div>
  );
}
