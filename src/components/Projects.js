import React from 'react';
import '../assets/css/Projects.css';
import corporativo from '../assets/images/corporativo.png';
import cervejaria from '../assets/images/cervejaria.png';
import wikipedia from '../assets/images/wikipedia.png';
import estacionamento from '../assets/images/estacionamento.jpg';
import celulares from '../assets/images/celulares.webp';
import usuario from '../assets/images/usuario.webp';
import projeto1 from '../assets/images/projeto1.png';
import projeto2 from '../assets/images/projeto2.png';


const projects = [
  {
    title: "Site Corporativo",
    description: "Desenvolvido com WordPress, Elementor e JetEngine, incluindo filtros avançados para uma navegação eficiente e design personalizado.",
    image: corporativo,
    link: "https://corporativo.originalexperience.com.br/",
  },
  {
    title: "Cervejaria Goró",
    description: "E-commerce desenvolvido com Node.js, Express, React e API integrada a um banco de dados, garantindo alto desempenho e experiência fluida. ",
    image: cervejaria,
    link: "https://github.com/Zer0iUm/pi-backend",
  },
  {
    title: "Wikipedia",
    description: "Desenvolvido com HTML e CSS, focando em acessibilidade e SEO para uma experiência otimizada e inclusiva.",
    image: wikipedia,
    link: "https://github.com/mairefm/trilha-html-modulo-3",
  },
  {
    title: "Tela de Login",
    description: "Tela de login moderna com efeitos dinâmicos em CSS e JavaScript, proporcionando uma experiência interativa e atraente.",
    image: projeto1,
    link: "https://github.com/mairefm/Login-Cadastro-Dev-P2",
  },

  {
    title: "Sistema de Estacionamento ",
    description: "Desenvolvido em C# e .NET, com controle eficiente de vagas e integração via Git para versionamento.",
    image: estacionamento,
    link: "https://github.com/mairefm/trilha-net-fundamentos-desafio",
  },
  {
    title: "Testes Unitários com C#",
    description: "Sistema com validações reutilizáveis em C#. Testes automatizados com xUnit.",
    image: projeto2,
    link: "https://github.com/mairefm/trilha-net-testes-unitarios-desafio",
  },
  {
    title: "Sistema Celulares",
    description: "Sistema de celulares utilizando herança, polimorfismo e encapsulamento para promover reuso de código e flexibilidade. ",
    image: celulares,
    link: "https://github.com/mairefm/trilha-net-poo-desafio",
  },
  {
    title: "CRUD JAVA (desenvolvendo)",
    description: "Sistema em Java para gerenciar o cadastro de usuários. Criação, leitura, atualização e exclusão (CRUD) de forma eficiente e intuitiva.  ",
    image: usuario,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>MEUS PROJETOS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
