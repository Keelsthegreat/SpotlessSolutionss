import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <ul className='navBar'> 
        <li><Link to ='/'>Home</Link></li>
        <li><Link to =''></Link></li>
        <li><Link to =''></Link></li>
        <li><Link to =''></Link></li>
        <li><Link to =''></Link></li>
        </ul>
    </div>
  )
}

export default NavBar;