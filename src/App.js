import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import HomeLanding from './components/Home-Landing/Home-Landing'
import AboutMe from './components/About-Me/About-Me'
import Portfolio from './components/Portfolio/Portfolio'
import PriorExperience from './components/Prior-Experience/Prior-Experience'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="portfolio">
      <NavBar/>
      <div className='container'>
      <HomeLanding/>
      <AboutMe/>
      <Portfolio/>
      <PriorExperience/>
      <Contact/>
      </div>
     <h1>Welcome To production</h1>
    </div>
  );
}

export default App;
