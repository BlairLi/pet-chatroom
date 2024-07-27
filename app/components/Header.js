// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="/">
            PET UNIVERSE
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/signup">
              <div className="button is-light">Sign Up</div>
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/signin">
              <div className="button is-light">Sign In</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
