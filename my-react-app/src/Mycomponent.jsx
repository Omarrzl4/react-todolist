import React, { useState } from "react"
function Mycomponent(){
  const [name,setName]=useState("Guest");
  const[quantity,setQuantity]=useState(0);
  const [comment,setComment]=useState(" ");
  const[payment,setPayment]=useState("");
  const[trasport,setTransport]=useState("");

   const changee =(event)=>{
    setName(event.target.value)
   }
   
   const sets=(event)=>{
    setQuantity(event.target.value);
   }
   const changecom=(event)=>{
    setComment(event.target.value);
   }
   const paymentchange=(event)=>{
    setPayment(event.target.value)
   }

   const del=(event)=>{
    setTransport(event.target.value);
   }


  return(<>
  <div>
    <input type="text" value={name} onChange={changee} />
    <p> Name: {name}</p>
    
    <input type="text" onChange={sets} />
    <p>Quantity: {quantity}</p>
    
    <textarea value={comment} onChange={changecom} placeholder="Leave a comment"/>
    <p>{comment}</p>
    <hr />

    <select onChange={paymentchange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
    </select>
    <p>You choosed : {payment}</p>
    <hr />
    <p>Choose Your transportation</p>
    <input type="radio" name="del" value="Pick up" onChange={del} />PickUp
     <input type="radio" name="del" value="Delivery" onChange={del} />Delivery  
       
       <p>You choosed: {trasport}</p>
  </div>
  </>);

}
export default Mycomponent