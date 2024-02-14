import { useState } from "react";

function Mycomponent3(){

    const [food,setFood]=useState(["Apple","Orange","Peache"]);
    

    function add(){
         
       
        const newfood=document.getElementById("nfood").value;
         document.getElementById("nfood").value="";
         setFood(f=>([...f,newfood]));
    }

    const remove=(index)=>{
         setFood(food.filter((_,i)=>i!==index))
    }
return(
    <div>
      <ul>
      {food.map((kind,index)=><li onClick={()=>remove(index)} key={index}>{kind} {index}</li>)}
      </ul>
       <input type="text" id="nfood" placeholder="Enter food name"/>
      <button onClick={add}>Add Item</button>
       
    </div>
);
}
export default Mycomponent3