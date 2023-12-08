import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <img src="/camera.png" alt="Site Icon" className="footer-icon" />
          <p className="footer-text">
            blah blah blah Iot blah blah blah blah jsd jf because blah blah blah
          </p>
        </div>
        <div className="footer-right">
  <a href="https://www.youtube.com" target="_blank">
    <img src="/youtube.png" alt="YouTube" />
  </a>
  <a href="https://www.facebook.com" target="_blank">
    <img src="/facebook.png" alt="Facebook" />
  </a>
  <a href="https://twitter.com" target="_blank">
    <img src="/twitter.png" alt="Twitter" />
  </a>
  <a href="https://www.linkedin.com" target="_blank">
    <img src="/linkedin.png" alt="LinkedIn" />
  </a>
</div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright">&copy; 2023 IoT. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
