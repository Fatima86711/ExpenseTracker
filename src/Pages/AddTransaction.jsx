import {React, useState, useEffect} from 'react'
import "../Styles/AddTransaction.css"
import { useLocation } from 'react-router-dom';
const AddTransaction = () => {
    const [type, setType] = useState('Expense');
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category,setCategory] = useState('');
    const [transaction, setTransaction] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const location = useLocation();
function submitForm(e){
    console.log(amount, type,description,date, category)
    if(!amount || !category || !date){
        return alert("Please fill all the feilds!!");
    }
const dataObject = {
    type:type,
    date:date,
    description,
    amount:parseInt(amount),
    category
}

//get the previous data
const newTransactions = [...transaction,dataObject]
// let parsedPrevData=[];
// var prevData =[];
const stringify_transactions = JSON.stringify(newTransactions);
localStorage.setItem("TransactionData",stringify_transactions);
//  prevData = transaction;

// if(prevData){
//     try{
//     parsedPrevData = JSON.parse(prevData);
// }catch(err){
//     console.log(err);
// prevData = [];
// }
// }
alert("Transaction Added successfully")
//pushed the new object into the array
// parsedPrevData.push(dataObject);
//again convert back to stringify

// console.log(localStorage.getItem("transactionData"));
setAmount('');
setCategory('')
setDate('');
setDescription('');
setType('Expense');


}
useEffect(()=>{
  const existingTransaction= JSON.parse(localStorage.getItem("transactionData")) ||[];
  setTransaction(existingTransaction);
console.log("location is : ",location.state);
if(location.state && location.state.transaction){
  const data = location.state.transaction;
  setType(data.type);
  setCategory(data.category);
  setAmount(data.amount);
  setDate(data.date);
  setDescription(data.description);
  setEditIndex(transaction.index)
  
}
},[location]);
  return (
   <div className="add-transaction-container">
      <h2>Add Transaction</h2>
      <div className="transaction-box">
        <div className="transaction-type">
          <label>
            <input type="radio" value="Expense" checked = {type === "Expense"} onClick={(e)=>setType(e.target.value) }/> Expense
          </label>
          <label>
            <input type="radio" value="Income" checked = {type ==="Income"} onClick={(e)=>setType(e.target.value)}  /> Income
          </label>
        </div>
        <input value={amount} type="number" onChange = {(e)=>setAmount(e.target.value)} placeholder="Amount (Rs.)"  />
        <select value= {category} onChange={(e)=>{setCategory(e.target.value)}} >
          <option value="">Select a category</option>
          <option value="Salary">Salary</option>
          <option value="Groceries">Groceries</option>
          <option value="Dining">Dining</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
        <textarea value= {description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description"></textarea>
        <input value={date} type="date" onChange={(e)=>{setDate(e.target.value)}} />
        <button onClick={submitForm} >Add Transaction</button>
      </div>
    </div>
  )
}

export default AddTransaction;












