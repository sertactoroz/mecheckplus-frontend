import React from 'react';
import logo from './logo.svg';

import './App.css';
// import ChecklistList from "./components/ChecklistList";
import TaskLibrary from './components/TaskLibrary';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* İstersen React logosunu kaldırabilir veya altına checklisti ekleyebilirsin */}
        <h1>MeCheck+</h1>
      </header>

      {/* Checklist listesini buraya yerleştiriyoruz */}
      <main>
        {/* <ChecklistList /> */}
        <TaskLibrary />
      </main>
    </div>
  );
}

export default App;
