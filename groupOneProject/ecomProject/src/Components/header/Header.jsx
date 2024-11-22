import './Header.css';

function Header() {
  return (
    <header className="hdr-container">
      <section className="hdr-content">
        <p className="hdr-msg">Sign up and get 20% off your first order.</p>
        <a href="/signup" className="signup-btn">Sign Up Now</a>
        <i class="fa-solid fa-x"></i>
      </section>
    </header>
  );
}

export default Header;
