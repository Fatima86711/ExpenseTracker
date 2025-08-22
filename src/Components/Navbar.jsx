import {React,useEffect, useState} from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"
import Dashboard from '../Pages/Dashboard'
const Navbar = () => {
   const location = useLocation();
   const [isModalOpen, setModal] = useState(false);
   const [quote, setQuote] = useState();


       const fetchQuote=async()=>{
        try {
            const response=await fetch('https://quotes-api-self.vercel.app/quote');
            const data=await response.json();
            console.log(data);
            setQuote(data.quote);
            setModal(true);
            
        } catch (error) {
            console.log(error);
            
        }
       
    }
  return (
    <nav className='navbar'>
        <h1 className='logo'>Expense Tracker</h1>
    <ul className='nav-links'>
        <li className={location.pathname === "/Dashboard"?"active":""} >
            <Link to ="/Dashboard"  >📊 Dashboard</Link>
        </li>
        <li className={location.pathname === "/Report"?"active":""} >
            <Link to ="/Report" >⏳ Report</Link>
        </li>
        <li className={location.pathname === "/Transaction"?"active":""} >
            <Link to ="/Transaction" >📄 Transaction</Link>
        </li>
        <li >
            <div className= 'quote-btn' onClick={fetchQuote}>💡 Get Quote</div>
        </li>
        <li >
            <Link to ="/" >🔄 Reset</Link>
        </li>
       
    </ul>
    {
        isModalOpen && (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <p>{quote}</p>
                <button className='close-btn' onClick={()=>setModal(false)}>Close</button>
            </div>



        </div>)
    }
    </nav>
  )
}

export default Navbar