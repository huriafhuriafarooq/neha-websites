import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

const featured = [
  {
    name: "Moonlit Pearl Necklace",
    category: "Necklaces",
    price: "$148",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arc Gold Hoops",
    category: "Earrings",
    price: "$92",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luna Chain Bracelet",
    category: "Bracelets",
    price: "$76",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Solstice Ring",
    category: "Rings",
    price: "$124",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
  },
];

const craftSteps = [
  {
    step: "01",
    title: "Design",
    text: "Sketched and refined for balance, comfort, and everyday wear.",
  },
  {
    step: "02",
    title: "Handcraft",
    text: "Metals and stones shaped by hand in small, considered batches.",
  },
  {
    step: "03",
    title: "Finish",
    text: "Polished, inspected, and prepared with meticulous care.",
  },
];

const highlights = [
  { label: "Handmade", value: "Every piece" },
  { label: "Materials", value: "Ethically sourced" },
  { label: "Since", value: "2018" },
];

export default function HomePage() {
  return (
    <div className="site">
      <Header />

      <main>
        {/* Hero */}
        <section className="hero" aria-label="Introduction">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="label">Handmade Jewelry</p>
              <h1>Refined pieces for modern elegance</h1>
              <p className="lead">
                Necklaces, earrings, and bracelets designed with intention — crafted to be worn,
                layered, and treasured.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#collections">
                  Shop Collection
                </a>
                <a className="btn btn-ghost" href="#contact">
                  Custom Order
                </a>
              </div>
              <ul className="hero-trust" aria-label="Brand highlights">
                {highlights.map((item) => (
                  <li key={item.label}>
                    <span className="hero-trust-label">{item.label}</span>
                    <span className="hero-trust-value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media">
              <div className="hero-media-frame">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                  alt="Handcrafted gold and pearl jewelry"
                  loading="eager"
                />
              </div>
              <div className="hero-badge">
                <span className="hero-badge-label">Featured</span>
                <span className="hero-badge-title">Moonlit Pearl</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="section">
          <div className="container">
            <header className="section-head">
              <div className="section-head-text">
                <p className="label">Curated Selection</p>
                <h2>The Collection</h2>
              </div>
              <p className="section-head-desc">
                Four signature styles — each handmade with premium materials and a timeless finish.
              </p>
            </header>

            <div className="product-grid">
              {featured.map((item) => (
                <article key={item.name} className="product-card">
                  <a href="#contact" className="product-link" aria-label={`Inquire about ${item.name}`}>
                    <div className="product-media">
                      <img src={item.image} alt={item.name} loading="lazy" />
                      <span className="product-overlay">Inquire</span>
                    </div>
                    <div className="product-body">
                      <span className="product-category">{item.category}</span>
                      <h3>{item.name}</h3>
                      <div className="product-meta">
                        <span className="product-price">{item.price}</span>
                        <span className="product-handmade">Handmade</span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Craft */}
        <section id="craft" className="section section-alt">
          <div className="container">
            <header className="section-head section-head-center">
              <p className="label">Our Process</p>
              <h2>Crafted with intention</h2>
              <p className="section-head-desc centered">
                From first sketch to final polish, every NEHA piece follows a thoughtful process.
              </p>
            </header>

            <div className="craft-grid">
              {craftSteps.map((item) => (
                <article key={item.step} className="craft-card">
                  <span className="craft-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <div className="container about-grid">
            <div className="about-media">
              <img
                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80"
                alt="Artisan crafting jewelry by hand"
                loading="lazy"
              />
            </div>
            <div className="about-copy">
              <p className="label">About NEHA</p>
              <h2>Where craftsmanship meets contemporary design</h2>
              <p>
                NEHA creates jewelry that feels personal and polished. Each design is finished by
                hand using ethically sourced materials — made to complement your style for years to come.
              </p>
              <ul className="about-list">
                <li>Small-batch production for lasting quality</li>
                <li>Custom commissions available on request</li>
                <li>Designed for everyday wear and special moments</li>
              </ul>
              <a className="btn btn-outline" href="#contact">
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" aria-label="Custom orders">
          <div className="container cta-inner">
            <div className="cta-copy">
              <p className="label label-light">Bespoke</p>
              <h2>Create something uniquely yours</h2>
              <p>Share your vision for a custom piece — rings, necklaces, or gifts made to order.</p>
            </div>
            <a className="btn btn-light" href="#contact">
              Request Custom Design
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <header className="section-head section-head-center">
              <p className="label">Contact</p>
              <h2>We&apos;d love to hear from you</h2>
              <p className="section-head-desc centered">
                For orders, custom requests, or general inquiries.
              </p>
            </header>

            <div className="contact-grid">
              <aside className="contact-aside">
                <div className="info-card">
                  <span className="info-label">Email</span>
                  <a className="info-value" href="mailto:hello@neha-jewelry.com">
                    hello@neha-jewelry.com
                  </a>
                </div>
                <div className="info-card">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">1–2 business days</span>
                </div>
                <div className="info-card">
                  <span className="info-label">Follow</span>
                  <div className="info-links">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                      Facebook
                    </a>
                  </div>
                </div>
              </aside>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
