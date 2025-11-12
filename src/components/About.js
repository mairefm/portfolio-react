import React from 'react';
import '../assets/css/About.css';
import codeBackground from '../assets/images/code-background.png';
import maireAbout from '../assets/images/maire_about.webp';

const About = () => {
    return (
        <section id="about" className="about-container" style={{ backgroundImage: `url(${codeBackground})` }}>
            <h2 className="about-title">Sobre Mim</h2>
            <div className="about-content">
                <div className="about-text-container">
                <img src={maireAbout} alt="Perfil" className="about-image" />
                    <p>Olá! Sou desenvolvedora de software com experiência em programação e tecnologia. Minha paixão por inovação me levou a atuar tanto no 
                        desenvolvimento FrontEnd e BackEnd quanto na personalização de soluções para WordPress, criando plugins robustos e otimizados.
                        Trabalho com tecnologias como HTML, CSS, JavaScript, APIs e React, além de bancos de dados. 
                        Seja para criar uma solução eficiente ou capacitar novos talentos, meu objetivo é sempre impulsionar a tecnologia e a inovação. <br />
                        Vamos construir algo incrível juntos? </p>
                </div>
            </div>
        </section>
    );
};

export default About;



