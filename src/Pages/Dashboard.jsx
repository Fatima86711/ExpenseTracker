import React, { useEffect, useState } from 'react'
import "../Styles/Dashboard.css"
import TransactionCards from  "../Components/TransactionCards.jsx"
import RecentTransactions from '../Components/RecentTransactions.jsx';
const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setIncome] = useState(0);
  const [totalExpense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  useEffect(()=>{
    let income = 0;
    let expense = 0;
    // console.log("useEffect() executed")
    const existingTransactions= JSON.parse(localStorage.getItem("transactionData"))|| [];
    setTransactions(existingTransactions);
    existingTransactions.forEach(element => {
      if(element.type === 'Income')
        income+=element.amount;
      
      else 
       expense += element.amount;
     
      // totalExpense = 
console.log("its total expense" , totalExpense);
    });
 setExpense(expense);
      setIncome(income);
      setBalance(income - expense);
  },[]);
  return (
    <div className='dashboard'>
      <div className='dashboard-inner'>
        <h2>Dashboard</h2>
        <button className='add-transaction'> + Add Transaction</button>
      </div>
      <TransactionCards currentBalance = {balance} totalExpense = {totalExpense} totalIncome = {totalIncome}/>
      <div className='transactions-chart-row'>
        <div className='transactions half-width'>
          <h3>Recent Transactions</h3>
          <RecentTransactions transactions = {transactions} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard