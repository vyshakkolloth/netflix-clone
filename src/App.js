
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { orginals,action } from './url';


function App() {
  return (
    <div className="App">
    
       
      <Navbar /> 
      <Banner />
      <RowPost title="Netflix Orginals" url={orginals}/>
      <RowPost title="Action" isSmall url={action}/>

      
    </div>
  );
}

export default App;
