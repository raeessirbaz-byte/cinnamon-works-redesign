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

      {/* Menu Header */}
      <section className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <span className="handwritten">Freshly Baked Daily</span>
        <h1 style={{ fontSize: '4rem', margin: '1rem 0' }}>Our Menu</h1>
        <p style={{ color: 'var(--soft-blue-gray)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our wide selection of regular, gluten-free, and vegan treats. All items are baked fresh in Pike Place Market.
        </p>
      </section>

      {/* Menu Sections */}
      <div className="container" style={{ paddingBottom: '8rem' }}>
        <MenuSection title="Cookies" subtitle="Cookies weigh 1/2 lb unless otherwise noted">
          <MenuCategory title="Regular">
            <MenuItem name="Chocolate Chip" desc="Classic, chewy and loaded with chocolate chips" />
            <MenuItem name="Gingersnap" desc="Perfectly spiced and easy on the teeth" />
            <MenuItem name="Snickerdoodle" desc="Soft, buttery, thick, and topped with cinnamon sugar" />
            <MenuItem name="Pumpkin" desc="Adorable and available w/ buttercream" />
            <MenuItem name="Pumpkin Chocolate Chip" desc="Dazzling and available w/ buttercream" />
            <MenuItem name="Peanut Butter" desc="Made with crunchy peanut butter and baked to perfection" />
            <MenuItem name="Oat Raisin" desc="Wildly fluffy & healthy enough to eat for breakfast" />
            <MenuItem name="Monster" desc="The cookie that has literally everything in it" />
            <MenuItem name="Oat Coconut Chip" desc="Chewy & loaded with texture from the oats & coconut" />
            <MenuItem name="Bull's Eye" desc="Our peanut butter cookie but topped with a tagalong cookie" />
            <MenuItem name="Sugar-Free Chocolate Chip" desc="Void of sugar but not void of softness & sweetness" />
            <MenuItem name="Sugar-Free Oat Raisin" desc="Round, fluffy and still sweet enough to please" />
            <MenuItem name="Small Chocolate Chip" desc="The same recipe but in a small size *2oz" />
            <MenuItem name="Small Oat Raisin" desc="The same recipe but adorably pocket sized *2oz" />
          </MenuCategory>

          <MenuCategory title="Gluten-Free">
            <MenuItem name="Pumpkin" desc="Impressively soft and available with buttercream frosting *6oz" />
            <MenuItem name="Monster" desc="The gf version that has literally everything in it" />
            <MenuItem name="GF/VG Oat Raisin" desc="The perfectly chewy cookie that will leave you wanting more *6oz" />
            <MenuItem name="GF/VG Annie's Chip" desc="A favorite that's easy on the eyes and even easier to enjoy *3oz" />
          </MenuCategory>

          <MenuCategory title="Vegan">
            <MenuItem name="Snickerdoodle" desc="Made with tofu & vegan butter for ultimate softness" />
            <MenuItem name="Oat Raisin" desc="The cookie that keeps a favorite regular coming back" />
            <MenuItem name="Chocolate Chip w/ Walnuts" desc="Some would say it's better than the regular version" />
            <MenuItem name="GF/VG Oat Raisin" desc="The perfectly chewy cookie that will leave you wanting more *6oz" />
            <MenuItem name="GF/VG Annie's Chip" desc="A favorite that's easy on the eyes and even easier to enjoy *3oz" />
          </MenuCategory>
        </MenuSection>

        <MenuSection title="Quick Breads" subtitle="Fresh loaves baked daily">
          <MenuCategory title="Regular">
            <MenuItem name="Zucchini" />
            <MenuItem name="Pumpkin" />
            <MenuItem name="Banana" />
          </MenuCategory>
          <MenuCategory title="Gluten-Free">
            <MenuItem name="Zucchini" />
            <MenuItem name="Pumpkin" />
            <MenuItem name="Banana" />
            <MenuItem name="GF/VG Cinnamon Swirl" />
          </MenuCategory>
          <MenuCategory title="Vegan">
            <MenuItem name="Banana" />
            <MenuItem name="Chocolate Banana Marble" />
            <MenuItem name="GF/VG Cinnamon Swirl" />
          </MenuCategory>
        </MenuSection>

        <MenuSection title="Muffins" subtitle="Large, fluffy and flavorful">
          <MenuCategory title="Regular">
            <MenuItem name="Blueberry" />
            <MenuItem name="Lemon Poppyseed" />
            <MenuItem name="Apple Maple" desc="w/ maple frosting" />
            <MenuItem name="Zucchini" />
            <MenuItem name="Sugar-free Blueberry Bran" />
          </MenuCategory>
          <MenuCategory title="Gluten-Free">
            <MenuItem name="GF Zucchini" />
            <MenuItem name="GF Apple Walnut" />
            <MenuItem name="GF Blueberry" />
            <MenuItem name="GF Pumpkin" />
            <MenuItem name="GF/VG Cinnamon" />
          </MenuCategory>
          <MenuCategory title="Vegan">
            <MenuItem name="Pumpkin" />
            <MenuItem name="Banana Chip" />
            <MenuItem name="Almond Poppyseed" />
            <MenuItem name="GF/VG Cinnamon" />
          </MenuCategory>
        </MenuSection>

        <MenuSection title="Rolls & More" subtitle="Our signature treats">
          <MenuCategory title="Regular">
            <MenuItem name="Plain Jane" desc="Our cinnamon roll without frosting" />
            <MenuItem name="Plain Jane w/ Frosting" desc="Cinnamon roll with royal frosting" />
            <MenuItem name="Pull Apart" desc="3 cinnamon rolls twisted together" />
            <MenuItem name="White Sticky Bun" desc="Stacked rolls with caramel and pecans" />
            <MenuItem name="Whole Wheat Sticky Bun" desc="Dense rolls with caramel and pecans" />
          </MenuCategory>
          <MenuCategory title="Gluten-Free">
            <MenuItem name="Cinnamon Roll" desc="Tricky recipe mastered to perfection" />
            <MenuItem name="Brownie" desc="Packed with chocolate and topped with walnuts" />
            <MenuItem name="Macaroons" desc="Packed with coconut, fun to eat" />
            <MenuItem name="GF/VG Granola" desc="Spices, dates, orange, and more" />
          </MenuCategory>
        </MenuSection>

        <MenuSection title="Coffee" subtitle="Beans from Vashon Island Coffee Roasterie">
          <div style={{ color: 'var(--soft-blue-gray)', marginBottom: '2rem', maxWidth: '800px' }}>
            Our beans are rare, high mountain shade grown, and exquisite in flavor. We offer americano, latte, cappuccino, breve, and hot coco. Soy and almond milk available.
          </div>
          <MenuItem name="Freshly Brewed Coffee" desc="Black coffee samples available!" />
          <MenuItem name="Espresso Drinks" desc="Americano, Latte, Cappuccino, Breve" />
          <MenuItem name="Teas & More" desc="Assorted teas and hot chocolate" />
          <MenuItem name="Whole Bean Bags" desc="1 lb bags available in whole-bean or ground" />
        </MenuSection>
      </div>

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
        </div>
      </footer>

    </div>
  );
}

function MenuSection({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '6rem' }}>
      <div style={{ borderBottom: '2px solid var(--royal-blue)', paddingBottom: '1rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>{title}</h2>
        {subtitle && <p style={{ color: 'var(--soft-blue-gray)' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {children}
      </div>
    </div>
  );
}

function MenuCategory({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--pink-accent)', borderBottom: '1px solid rgba(236, 72, 153, 0.2)', paddingBottom: '0.5rem' }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {children}
      </div>
    </div>
  );
}

function MenuItem({ name, desc }: { name: string, desc?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
      <div style={{ flex: 1 }}>
        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{name}</h4>
        {desc && <p style={{ color: 'var(--soft-blue-gray)', fontSize: '0.875rem' }}>{desc}</p>}
      </div>
      <div style={{ flex: '0 0 auto', borderBottom: '1px dotted var(--royal-blue)', flexGrow: 1, margin: '0.7rem 0 0' }}></div>
      <div style={{ fontWeight: '700' }}>$—</div>
    </div>
  );
}
