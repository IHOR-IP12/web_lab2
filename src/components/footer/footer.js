import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="footer-title">
                    <p>Branding stuff</p>
                    <p>Lorem ipsum it conte dolor amen frome tournet casap pocas ifno ifazgiv kofno</p>
                </div>
                <img src="logo.png" alt="Логотип" className="footer-logo" />
            </div>
            <hr />
            <div className="footer-right">
                <p>2020 IoT © Copyright all rights reserved, bla bla</p>
            </div>
        </div>
    );
}

export default Footer;
