function Nav() {
    const logoStyle = {
        width: '70px',
        height: '70px',
        marginLeft: '-25rem', // Move the image 24 rem to the left
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
                        <a href="#" className="navigation__text">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="navigation__text">
                            Catalog
                        </a>
                    </li>
                    <li>
                        <a href="#" className="navigation__text">
                            Cart
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
