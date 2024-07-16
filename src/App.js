import * as React from 'react';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import Services from './components/Services/Services';
import Schedule from './components/Schedule/Schedule';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Services />
      <Schedule />
    </>
  );
}

export default App;
