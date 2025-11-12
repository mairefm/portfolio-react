import React from 'react';
import '../assets/css/Courses.css';
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <h2>Meus Cursos e Formação Acadêmica</h2>

      {/* Formação Acadêmica */}
      <div className="education">
        <h3><FaGraduationCap /> Formação Acadêmica</h3>
        <div className="courses-container">
          <div className="course-card">
            <h4>Análise e Desenvolvimento de Sistemas</h4>
            <p>Universidade Anhembi Morumbi - Concluído em 2019</p>
          </div>
          <div className="course-card">
            <h4>Licenciatura em Pedagogia</h4>
            <p>Universidade Anhembi Morumbi - Concluído em 2015</p>
          </div>
        </div>
      </div>

      {/* Cursos e Certificações */}
      <div className="courses">
        <h3><FaCertificate /> Cursos e Certificações</h3>
        <div className="courses-container">
          <div className="course-card">
            <h4><FaCode /> Desenvolvimento Frontend</h4>
            <p>Curso completo sobre HTML, CSS, JavaScript e React - Certificado em 2022</p>
          </div>
          <div className="course-card">
            <h4><FaCode /> Backend com Java</h4>
            <p>Curso de programação em Java, APIs e integração com banco de dados - Certificado em 2021</p>
          </div>
          <div className="course-card">
            <h4><FaCode /> Certificação em WordPress</h4>
            <p>Certificado oficial em desenvolvimento e customização de plugins WordPress - Certificado em 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
