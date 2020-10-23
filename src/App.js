import React from 'react';

import Header from './components/Header';

export default function App() {
  return (
    <>
    <Header title="GoStack">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
      </ul>
    </Header>
    <Header title="Rocketseat">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
        <li>login</li>
      </ul>
    </Header>
    </>
  );
}