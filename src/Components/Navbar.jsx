import {React,useEffect, useState} from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"
import Dashboard from '../Pages/Dashboard'
const Navbar = () => {
    // const [className, setClass] = useState('active')
   const location = useLocation();
  return (
    <nav className='navbar'>
        <h1 className='logo'>Expense Tracker</h1>
    <ul className='nav-links'>
        <li className={location.pathname === "/Dashboard"?"active":""} >
            <Link to ="/Dashboard"  >Dashboard</Link>
        </li>
        <li className={location.pathname === "/Report"?"active":""} >
            <Link to ="/Report" >Report</Link>
        </li>
        <li className={location.pathname === "/Transaction"?"active":""} >
            <Link to ="/Transaction" >Transaction</Link>
        </li>
        <li >
            <Link to ="/" >Get Quote</Link>
        </li>
        <li  >
            <Link to ="/" >Reset</Link>
        </li>
       
    </ul>
    </nav>
  )
}

export default Navbar