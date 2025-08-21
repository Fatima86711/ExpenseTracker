import {React, useState} from 'react'
import "../Styles/AddTransaction.css"
const AddTransaction = () => {
    const [type, setType] = useState('Expense');
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category,setCategory] = useState('');
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

let parsedPrevData=[];
var prevData =[];

 prevData = localStorage.getItem("transactionData");

if(prevData){
    try{
    parsedPrevData = JSON.parse(prevData);
}catch(err){
    console.log(err);
prevData = [];
}
}

//pushed the new object into the array
parsedPrevData.push(dataObject);
//again convert back to stringify
var transactionData = JSON.stringify(parsedPrevData);

localStorage.setItem("transactionData",transactionData);
console.log(localStorage.getItem("transactionData"));
setAmount('');
setCategory('')
setDate('');
setDescription('');
setType('Expense');


}
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












