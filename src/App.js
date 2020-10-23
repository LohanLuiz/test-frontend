import React, { useState } from 'react';

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

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar novo projeto</button>
    </>
  );
}