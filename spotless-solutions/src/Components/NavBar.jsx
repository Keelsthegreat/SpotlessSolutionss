import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <ul className='navBar'> 
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/Estimates'>Estimates</Link></li>
        <li><Link to ='/Contact'>Contact</Link></li>
        <li><Link to ='/Services'>Services</Link></li>
        <li><Link to ='/AboutCompany'>About Company</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;