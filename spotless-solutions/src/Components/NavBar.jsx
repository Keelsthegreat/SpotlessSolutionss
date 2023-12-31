import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <ul className='navBar'> 
        <li className='logoPic'><Link to ='/'>Home</Link></li>
        <li><Link to ='/Gallery'>Gallery</Link></li>
        <li><Link to ='/Contact'>Contact</Link></li>
        <li><Link to ='/Services'>Services</Link></li>
        <li><Link to ='/About'>About</Link></li>
        <li><Link to ='Reviews'>Reviews</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;