import React from 'react';
// import pic from './components/pic.png';
import pic from '../components/pic.png'
import '../App.css' 
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import DocumentGrid from './DocumentGrid';

const Home = () => {
    return (
        <div className='home-main'> 
       
       <div className='uper-div'> <h1 style={ {color:'blue'}}>Create Your Own Docs</h1></div>
        <Link to='/YourOtherComponents'>
        <div className='div1'>
        <img className='pic' src={pic} alt="Your Image" />
      
      </div>
      </Link>
      
      </div>
       
    );
}

export default Home;
