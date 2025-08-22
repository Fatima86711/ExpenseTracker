import React from 'react'
import "../Styles/Transaction.css";
import {useNavigate} from "react-router-dom";
const Transaction = () => {
  const navigate = useNavigate();
  const existingData = JSON.parse(localStorage.getItem("transactionData")) || [];
 const categoryEmojis = {
    "Salary": "💰",
    "Groceries": "🛒",
    "Dining": "🍔",
    "Transport": "🚗",
    "Entertainment": "🎬",
    "Others": "📦"
};
const handleEdit = (index)=>{
  const existingTransaction = existingData[index];
  navigate("/add-transaction", {state:{transaction:{...existingTransaction,index}}})
}
const handleDelete = (index)=>{

}
  return (
    <>
    <div className='transactions-container'>
      <h2>All Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          existingData.map((data,index)=>(
            <tr key={index}>
              <td>
               { data.category }{categoryEmojis[data.category]}
              </td>
              <td>{
                data.description || "No Description"
                }</td>
                <td className={data.type ==="Income"? "income":"expense"}>{(data.amount).toLocaleString('en-pk',{style:'currency',currency:'PKR'})}</td>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>
                  <div className='action-buttons'>
                    <button className='edit-btn' onClick={()=>handleEdit(index)} >✏️ Edit</button>
                    <button className='delete-btn' onClick={()=>handleDelete(index)}>🗑️ Delete</button>
                  </div>
                </td>
            </tr>
          ))
        }
      </tbody>
    </table>
     
    </div>
    </>
  )
}

export default Transaction;


// 1:47