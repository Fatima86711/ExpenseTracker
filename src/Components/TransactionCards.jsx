import React from 'react'

const div = ({currentBalance,totalExpense,totalIncome}) => {
  return (
    <div>
        <div className='balance-card'>
            <p>Current Balance</p>
            <h1>Rs. {currentBalance}</h1>
        </div>
        <div className='summary-cards'>
            <div className='income-card'>
                <p>Total Income</p>
                <h3 className='income'>Rs. {totalIncome}</h3>
            </div>
            <div className='expense-card'>
                <p>Total Income</p>
                <h3 className='expense'>Rs. {totalExpense}</h3>
            </div>
        </div>
    </div>
  )
}

export default 
div