import Link from "next/link";

export default function MenuPage() {
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

      <section className="container" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="handwritten">Freshly Baked Every Day</span>
          <h1 style={{ fontSize: '5rem', marginTop: '1rem', lineHeight: '1' }}>OUR MENU</h1>
          <p style={{ color: 'var(--soft-blue-gray)', maxWidth: '600px', margin: '1.5rem auto', fontSize: '1.2rem' }}>
            From our legendary giant cookies to our world-famous cinnamon rolls. Explore our full range of regular, gluten-free, and vegan treats.
          </p>
        </div>

        {/* Menu Categories */}
        <MenuSection 
          id="cookies"
          title="Cookies" 
          subtitle="A Pike Place legend"
          items={[
            { name: "Giant Chocolate Chip", price: "$6.00", tags: ["Bestseller"], img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500" },
            { name: "Snickerdoodle", price: "$5.50", tags: ["Classic"], img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500" },
            { name: "Peanut Butter", price: "$5.50", tags: ["GF Options"], img: "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?w=500" },
            { name: "Oatmeal Raisin", price: "$5.50", tags: ["Vegan Options"], img: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500" },
            { name: "Bull's Eye", price: "$6.50", tags: ["Signature"], img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" },
          ]}
        />

        <MenuSection 
          id="rolls"
          title="Rolls & More" 
          subtitle="Warm, gooey perfection"
          items={[
            { name: "Classic Cinnamon Roll", price: "$7.50", tags: ["Regular", "Vegan"], img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500" },
            { name: "Sticky Bun", price: "$7.50", tags: ["Bestseller"], img: "https://images.unsplash.com/photo-1508737844149-ad206e7c5f30?w=500" },
            { name: "GF Cinnamon Roll", price: "$8.50", tags: ["Gluten-Free"], img: "https://images.unsplash.com/photo-1616031037011-087000171abe?w=500" },
            { name: "Pecan Roll", price: "$8.00", tags: ["Premium"], img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500" },
          ]}
        />

        <MenuSection 
          id="muffins"
          title="Muffins" 
          subtitle="Soft and flavorful"
          items={[
            { name: "Pumpkin Muffin", price: "$5.50", tags: ["Bestseller", "GF"], img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" },
            { name: "Banana Chip", price: "$5.50", tags: ["Vegan"], img: "https://images.unsplash.com/photo-1587536849024-ca9ff0498a44?w=500" },
            { name: "Blueberry", price: "$5.50", tags: ["Classic"], img: "https://images.unsplash.com/photo-1607919307431-29919cbbbe21?w=500" },
            { name: "Morning Glory", price: "$6.00", tags: ["Signature"], img: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500" },
          ]}
        />

        <MenuSection 
          id="coffee"
          title="Coffee & Drinks" 
          subtitle="Perfect pairings"
          items={[
            { name: "Pike Place Roast", price: "$3.50", tags: ["Hot"], img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500" },
            { name: "Cold Brew", price: "$4.50", tags: ["Cold"], img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500" },
            { name: "Oat Milk Latte", price: "$5.50", tags: ["Dairy-Free"], img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500" },
            { name: "Hot Cocoa", price: "$4.00", tags: ["Signature"], img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500" },
          ]}
        />
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
        </div>
      </footer>
    </div>
  );
}

function MenuSection({ id, title, subtitle, items }: { id: string, title: string, subtitle: string, items: any[] }) {
  return (
    <div id={id} style={{ marginBottom: '8rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{title}</h2>
        <p style={{ color: 'var(--pink-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{subtitle}</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {items.map((item, idx) => (
          <div key={idx} className="product-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '220px', background: 'rgba(30, 58, 138, 0.03)', overflow: 'hidden' }}>
              <img 
                src={item.img} 
                alt={item.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              />
            </div>
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{item.name}</h3>
                <span style={{ fontWeight: '900', fontSize: '1.25rem', color: 'var(--royal-blue)' }}>{item.price}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {item.tags.map((tag: string, tIdx: number) => (
                  <span key={tIdx} style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(30, 58, 138, 0.05)', fontWeight: '800', color: 'var(--soft-blue-gray)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: 'auto' }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
