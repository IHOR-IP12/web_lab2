import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav() {
    const logoStyle = {
        width: '70px',
        height: '70px',
        marginLeft: '-25rem',
    };

    return (
        <div className="nav">
            <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="logo"
                style={logoStyle}
            />
            <div className="navigation__container">
                <ul className="navigation__list">
                    <li>
                        {/* Use Link to navigate to the Home component */}
                        <Link to="/" className="navigation__text">
                            Home
                        </Link>
                    </li>
                    <li>
                        {/* Use Link to navigate to the Catalog component */}
                        <Link to="/Catalog" className="navigation__text">
                            Catalog
                        </Link>
                    </li>
                    <li>
                        {/* Use Link to navigate to the Cart component */}
                        <Link to="/Cart" className="navigation__text">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
