import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Stacks from './pages/Stacks';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [storage, setStorage] = useState('darkMode');
  return (
    <div className={storage === "darkMode" ? "darkMode" : "lightMode" }>
    <Switch>
      <div className={storage === "darkMode" ? "darkMode" : "lightMode" }>
        <Header changeMode={ setStorage } />
        <Route exact path="/" component={ HomePage } />
        <Route path="/about" component={ About } />
        <Route path="/stacks" component={ Stacks } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Footer />
      </div>
    </Switch>
    </div>
  );
}

export default App;
