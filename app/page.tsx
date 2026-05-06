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
      <section className="hero-wrapper" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative' }}>
        <div className="hero-inner" style={{ position: 'relative', overflow: 'hidden', background: '#000', borderRadius: '0', border: 'none', minHeight: '850px' }}>
          <div className="hero-image-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img 
              src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=1600" 
              alt="Freshly baked cinnamon roll background" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <span className="hero-accent-text" style={{ color: 'var(--yellow-accent)', zIndex: 10 }}>Handcrafted</span>
          <h1 className="hero-headline" style={{ color: '#fff', textShadow: '0 10px 40px rgba(0,0,0,0.4)', zIndex: 10, fontSize: '13vw' }}>
            CINNAMON<br />WORKS
          </h1>

          <p className="hero-subtext" style={{ 
            color: '#fff', 
            zIndex: 10, 
            maxWidth: '700px', 
            background: 'rgba(0,0,0,0.3)', 
            padding: '1.5rem 2.5rem', 
            borderRadius: '2rem', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            lineHeight: '1.4'
          }}>
            Gluten-free, vegan, and regular treats in the heart of Seattle's Pike Place Market. Over 35 years of artisanal baking.
          </p>

          <div style={{ marginTop: '3rem', zIndex: 10, position: 'relative' }}>
            <Link href="/menu" className="btn-primary">Order Fresh Now</Link>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="container">
        <div className="category-pills">
          <button className="pill active">All Treats</button>
          <button className="pill">Gluten Free</button>
          <button className="pill">Vegan</button>
          <button className="pill">Regular</button>
          <button className="pill">Drinks</button>
        </div>

        <div className="product-grid">
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


      {/* Story Section */}
      <section id="about" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span className="handwritten">Our Legacy</span>
            <h2 style={{ fontSize: '4rem', margin: '1rem 0', lineHeight: '1.1' }}>Baked in the heart of Seattle</h2>
            <p style={{ color: 'var(--soft-blue-gray)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Over the years, Michael, his wife Judy, and their daughter Gracie, have expanded their product offering of cinnamon rolls, whole wheat sticky buns and giant chocolate chip cookies to include baked goods sought after by those who cannot eat "just any cookie".
            </p>
            <p style={{ color: 'var(--soft-blue-gray)', fontSize: '1.1rem' }}>
              People with gluten and dairy sensitivity can find what they want at Cinnamon Works. We reflect the creativity and healthy living of the city we're located in.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '2px solid var(--yellow-accent)', borderRadius: '3rem', zIndex: -1 }}></div>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
              alt="Bakery Interior" 
              style={{ width: '100%', borderRadius: '3rem', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Farm & Owners Section */}
      <section id="farm" className="container" style={{ marginBottom: '8rem' }}>
        <div style={{ background: 'rgba(30, 58, 138, 0.03)', borderRadius: '5rem', padding: '8rem 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="handwritten">The Farm Life</span>
            <h2 style={{ fontSize: '4rem', marginTop: '1rem' }}>Meet Mike & Judy</h2>
            <p style={{ color: 'var(--soft-blue-gray)', maxWidth: '800px', margin: '1rem auto', fontSize: '1.2rem' }}>
              When the owners of Cinnamon Works aren't baking, they are busy tending to their charming farm on Vashon Island.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
            <div className="product-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=600" 
                alt="Sheep at the farm" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Sheep</h3>
                <p style={{ color: 'var(--soft-blue-gray)', fontSize: '1rem' }}>Leftover baked goods are used to feed the adorable sheep who participate in the Vashon Island Sheepdog Classic.</p>
              </div>
            </div>
            <div className="product-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=600" 
                alt="Fresh Zucchini" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Zucchini</h3>
                <p style={{ color: 'var(--soft-blue-gray)', fontSize: '1rem' }}>Zucchini is a prime ingredient in our favorite recipes and is grown fresh at the farm on Vashon Island.</p>
              </div>
            </div>
            <div className="product-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src="https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&q=80&w=600" 
                alt="Gracie at the bakery" 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Gracie</h3>
                <p style={{ color: 'var(--soft-blue-gray)', fontSize: '1rem' }}>Gracie knows the ins-and-outs of the bakery and supplies the Girl Scout cookies used in our Bull's Eye cookie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-premium">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="footer-logo">CINNAMON WORKS</Link>
              <p style={{ opacity: 0.7, maxWidth: '300px' }}>
                Handcrafted treats in Pike Place Market since 1980. Seattle's favorite bakery for everyone.
              </p>
            </div>
            <div className="footer-links">
              <h4>Menu</h4>
              <ul>
                <li><Link href="/menu">Cookies</Link></li>
                <li><Link href="/menu">Cinnamon Rolls</Link></li>
                <li><Link href="/menu">Muffins</Link></li>
                <li><Link href="/menu">Gluten Free</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul>
                <li>1536 Pike Place</li>
                <li>Seattle, WA 98101</li>
                <li>(206) 583-0085</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Socials</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '6rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
            © 2026 Cinnamon Works. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ title, desc, price, img }: { title: string, desc: string, price: string, img: string }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-image" />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: 'var(--soft-blue-gray)', marginBottom: '2rem', minHeight: '3rem' }}>{desc}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: '900', fontSize: '1.5rem' }}>{price}</span>
        <button className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Add</button>
      </div>
    </div>
  );
}
