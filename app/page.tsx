nn"use client";

import { useState } from "react";

export default function HomePage() {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <main className="page-container">
      <header className="site-header">
        <div className="search-block">
          <button
            type="button"
            className="search-menu"
            aria-label="Show new style high demand jewelry"
            onClick={() => setShowLabel((visible) => !visible)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className="search-field">
            <input type="search" placeholder="Search jewelry" aria-label="Search jewelry" />
          </div>
          {showLabel ? (
            <div className="search-popup">New style: high demand jewelry</div>
          ) : null}
        </div>

        <div className="brand">
          <span className="brand-logo" aria-hidden="true">N</span>
          <div>
            <div className="brand-name">NEHA</div>
            <div className="brand-tag">Signature Jewelry</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#custom">Custom</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-ring" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">Handmade Jewelry</span>
          <h1>Elegant pieces crafted with modern grace</h1>
          <p>
            Discover a refined selection of necklaces, rings, bracelets, and bespoke designs made for everyday luxury.
          </p>
          <ul className="hero-features">
            <li>Premium gemstones</li>
            <li>Modern silhouettes</li>
            <li>Custom design service</li>
          </ul>
          <a className="button" href="#collections">
            Explore the Collection
          </a>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <p className="hero-card-label">Best Seller</p>
            <h2>Moonlit Pearl Necklace</h2>
            <p>A luminous statement piece designed to feel delicate and unforgettable.</p>
            <div className="hero-card-footer">
              <span>Handmade</span>
              <span>Limited Edition</span>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="collections">
        <div className="section-heading">
          <h2>Explore the Collection</h2>
          <p>Shop refined necklaces, earrings, bracelets, and jewelry sets designed for modern style.</p>
        </div>

        <div className="cards">
          <article className="card">
            <div className="card-content">
              <span className="new-label">New Collection</span>
              <h3>Necklaces</h3>
              <p>Fine pendants and layering chains made with polished elegance.</p>
            </div>
          </article>

          <article className="card">
            <img
              className="product-image"
              src="https://www.crunchyfashion.com/cdn/shop/files/CFE1928_D_f69e2cad-31ce-4599-a742-c1f6e457a7f5.jpg?v=1684581970"
              alt="Elegant earrings"
              loading="lazy"
            />
            <div className="card-content">
              <h3>Earrings</h3>
              <p>Classic studs, sculptural hoops, and refined drop styles.</p>
            </div>
          </article>

          <article className="card">
            <img
              className="product-image"
              src="https://images.karmagear.co.uk/wp-content/uploads/2021/04/Karma-Gear-Friendship-Bracelets-Handmade-Fair-Trade-Gallery-D-E-F.jpg"
              alt="Bracelet detail"
              loading="lazy"
            />
            <div className="card-content">
              <h3>Bracelets</h3>
              <p>Elegant wristwear that balances polished finish with thoughtful detail.</p>
            </div>
          </article>

        </div>
      </section>

      <section id="about" className="about">
        <div className="section-heading">
          <h2>About the Brand</h2>
          <p>Neha&apos;s blends artisan craftsmanship with a contemporary aesthetic, using ethically sourced materials for every piece.</p>
        </div>
      </section>

      <section id="custom" className="custom-request">
        <div className="section-heading">
          <h2>Custom Jewelry Requests</h2>
          <p>Share your idea and let us create a custom piece made just for you.</p>
        </div>
      </section>

      <section id="contact" className="footer-info">
        <div className="footer-card">
          <h2>Styling Tips</h2>
          <p>Find ideas for layering, mixing metals, and caring for your favorite pieces.</p>
        </div>
        <div className="footer-card">
          <h2>Contact</h2>
          <p>Reach out via email or social media for custom requests, new arrivals, or styling help.</p>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <span aria-hidden="true">📘</span>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <span aria-hidden="true">📸</span>
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              <span aria-hidden="true">🎵</span>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
