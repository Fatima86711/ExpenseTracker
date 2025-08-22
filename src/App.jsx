import { useState } from 'react'
import './App.css'
import { Link, Route, Routes,BrowserRouter } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Transaction from './Pages/Transaction'
import Report from './Pages/Report'
import Navbar from './Components/Navbar'
import NotFound from './Pages/NotFound'
import AddTransaction from './Pages/AddTransaction'
function App() {
 
  return (
    <>
    <Navbar/>
    
    <Routes>
      
      <Route path='/' element= {<Dashboard/>} />
      <Route path='/dashboard' element= {<Dashboard/>} />
      <Route path='/transaction' element= {<Transaction/>} />
      <Route path='/report' element= {<Report/>} />
      <Route path='*' element= {<NotFound/>} />
      <Route path='/add-transaction' element= {<AddTransaction/>} />

      
    </Routes>
    {/* <Link  to={"/transaction"}>Navigation</Link> */}
    </>
  )
}

export default App;
