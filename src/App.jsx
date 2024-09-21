import { useState, useEffect } from 'react';
import './App.css';
import "./index.css";
import PageA from './assets/Components/PageA';
import Navbar from './assets/Components/Navbar';
import Movingtext from './assets/Components/Movingtext';
import PageB from './assets/Components/PageB';
import PageC from './assets/Components/PageC';
import PageD from './assets/Components/PageD';


function App() {
  
  useEffect(() => {
  
    document.body.classList.add('custom-cursor');

  
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);
  
  return (
    <>
    <Navbar/>
    <PageA/>
    <Movingtext/>
    <PageB/>
    <Movingtext/>
    <PageC/>
    <Movingtext/>
    <PageD/>
    <Movingtext/>
    </>
  )
}

export default App
