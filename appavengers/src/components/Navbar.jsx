import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
         <Link to='/'> <button>Home</button></Link>
        </li>
        <li>
        <Link to='/YourOtherComponents'>  <button>Write</button></Link>
        </li>
        <li>
          <Link to='/DocumentGrid'><button>Documents</button></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
