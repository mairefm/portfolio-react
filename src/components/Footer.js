import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="mailto:maire.malheiros@gmail.com" className="footer-contact">
            <i className="fas fa-envelope"></i> maire.malheiros@gmail.com
          </a>
          <a href="https://github.com/mairefm" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/maire-malheiros/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <p className="footer-copyright">Copyright © 2025 Mairê Malheiros. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;



