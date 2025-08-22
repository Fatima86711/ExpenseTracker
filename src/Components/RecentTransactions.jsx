import React from 'react'

const RecentTransactions = ({transactions}) => {

    console.log(transactions)
    const categoryEmojis = {
    "Salary": "💰",
    "Groceries": "🛒",
    "Dining": "🍔",
    "Transport": "🚗",
    "Entertainment": "🎬",
    "Others": "📦"
};
  return (
    <>{transactions.slice(-10).reverse().map((tx,index)=>(
        <li key={index} className='transaction-item'>
            <span className='transaction-category'>{categoryEmojis[tx.category]} {tx.category}</span>
            <span className={"transaction-amount" &(tx.type == "Income"? "income":"expense")}>
                Rs. {tx.amount.toLocaleString()}
            </span>
        </li>

    ))}</>
  )
}

export default RecentTransactions