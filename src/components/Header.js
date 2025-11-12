import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Importa o React Scroll
import progImg from "../assets/images/programacao.jpg";
import '../assets/css/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-text">
        <h1>Mairê Malheiros</h1>
      </div>

      <nav className="navbar">
        <ul>
          <li><Link to="about" smooth={true} duration={500}>Sobre</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Habilidades</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projetos</Link></li>
          <li><Link to="courses" smooth={true} duration={500}>Cursos</Link></li>
        </ul>
      </nav>

      <img className="header-img" src={progImg} alt="Foto de Mairê" />
    </header>
  );
};

export default Header;
