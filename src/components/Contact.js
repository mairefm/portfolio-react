import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaPhp } from 'react-icons/fa'; // Ícones para as skills
import '../assets/css/Skills.css';

const skills = [
  { type: 'HTML', description: 'Estruturação de páginas web usando HTML5.', icon: <FaHtml5 /> },
  { type: 'CSS', description: 'Estilização de páginas com CSS3 e frameworks como Bootstrap.', icon: <FaCss3Alt /> },
  { type: 'JavaScript', description: 'Desenvolvimento de funcionalidades interativas usando JavaScript.', icon: <FaJs /> },
  { type: 'React', description: 'Criação de interfaces dinâmicas com React.', icon: <FaReact /> },
  { type: 'WordPress', description: 'Criação e customização de sites e plugins WordPress.', icon: <FaWordpress /> },
  { type: 'PHP', description: 'Desenvolvimento Backend com PHP, criação de APIs e plugins WordPress.', icon: <FaPhp /> },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2>Minhas Habilidades</h2>
      
      {/* Descrições das Skills */}
      <div className="skills-description">
        {skills.map((skill, index) => (
          <div key={index} className="skill-description">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <div className="skill-text">
              <p><strong>{skill.type}:</strong> {skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
