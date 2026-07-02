const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-name">NEHA</span>
          <p>Handmade jewelry for everyday elegance.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-nav-title">Navigate</span>
          <a href="#collections">Shop</a>
          <a href="#craft">Craft</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-connect">
          <span className="footer-nav-title">Connect</span>
          <a href="mailto:hello@neha-jewelry.com">hello@neha-jewelry.com</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>&copy; {currentYear} NEHA Signature Jewelry</p>
        </div>
      </div>
    </footer>
  );
}
