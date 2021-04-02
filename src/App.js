// import logo from './logo.svg';
//import './App.css';
import Student from './components/Students'
import Projects from './components/Projects'
import React from 'react'
import { useState } from 'react';

function App() {
  
  const [projects, setProjects] = useState (
    [{
      id: 1,
      desc: 'PHP Laravel Project',
      date: 'Februaury, 2021',
    },
    {
      id: 2,
      desc: 'Python Django Web Project',
      date: 'April 12, 2021',
    },
    {
      id: 3,
      desc: 'Ansible Web Server scripting',
      date: 'May 12, 2021',
    }
    ]
  )
  const student = {
    name: 'Jacob Giron',
    major: 'IS: Web App Dev',
    interest: 'Looking forward to graduating and getting to work'
  }

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className = "container">
      <div className="row">
      <div className="col"></div>
      <div className="col-6">
        <Student student = {student} />
        <Projects projects={projects} />
        </div>
        <div className="col"></div>
        </div>
        </div>

  );

}

export default App;
