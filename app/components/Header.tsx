export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true">
            N
          </span>
          <span className="brand-lockup">
            <span className="brand-name">NEHA</span>
            <span className="brand-tagline">Signature Jewelry</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#collections">Shop</a>
          <a href="#craft">Craft</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-primary btn-sm header-cta" href="#contact">
          Inquire
        </a>
      </div>
    </header>
  );
}
