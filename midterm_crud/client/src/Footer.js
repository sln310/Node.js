import React from "react";
import "./footer.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>
        <p>© 2023 CREATE POST</p>
      </div>
    </footer>
  );
}

export default Footer;
