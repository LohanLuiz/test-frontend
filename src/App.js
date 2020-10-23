import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg';

import Header from './components/Header';

export default function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }


  return (
    <>
    <Header title="Rocketseat" />

    <img width={200} src={backgroundImage} alt="Logo"/>

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
    </>
  );
}