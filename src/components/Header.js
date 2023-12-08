import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div id="logo_name">
        <img src="/camera.png" alt="camera" />
      </div>
      <nav>
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/catalog">Catalog</Link>
        </div>
        <div className="nav-item">
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;