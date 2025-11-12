// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
