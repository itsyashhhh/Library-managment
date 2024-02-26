import React from 'react'
import {useNavigate} from 'react-router-dom';
import './home.css';
//import './Home.css';

const Home = () => {
    const navigate= useNavigate();

    const handleclick=()=>{
        navigate('/User');
    }
    
    const handleclick2=()=>{
        navigate('/Admin');
    }



  return (
    <div className="container">
    <div className="thebox">
        <div className="title-container">
          <h1>YASH LIBRARY</h1>
        </div>
        <div className="subtitle-container">
          <h2>THE GREATEST BOOKS OF ALL TIME</h2>
        </div>
        <div className="subsubtitle">
            <h3> LOGIN </h3>
        </div>
        <div className="buttons-container">
        
          <button id="admin" onClick={handleclick2}>ADMIN</button>
          
        
          <button id="user" onClick={handleclick}>USER</button>
        </div>
    </div>
    </div>

  )
  }

export default Home;