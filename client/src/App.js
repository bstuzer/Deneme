import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/Navbar';
import FrontPage from './Pages/FrontPage';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import API from './API.js';
import { useEffect, useState } from 'react';




function App() {
  const [cpus, setCpus] = useState([]);
  const [gpus, setGpus] = useState([]);
  /*
  const [hdds, setHdds] = useState([]);
  const [mbs, setMbs] = useState([]);
  const [rams, setRams] = useState([]);
  const [games, setGames] = useState([]);
  */

  useEffect(()=> {
    const getCpus = async () => {
      const cpu = await API.getAllCpu();
      setCpus(cpu);
      
    };
    getCpus();
  
  }, []);
  
  
  useEffect(()=> {
    const getGpus = async () => {
      const gpu = await API.getAllGpu();
      setGpus(gpu);
      
    };
    getGpus();
  
  }, []); 

  
    

    return (
      <>
      <NavBar /> 

      
      <p>
        
        CPU:
        id: {cpus[0].id}
        brand: {cpus[0].brand}
        model: {cpus[0].model}
        
        GPU:
        id: {gpus[0].id}
        brand: {gpus[0].brand}
        model: {gpus[0].model} 
      </p>
          
      </> 
    );
  }

export default App;
