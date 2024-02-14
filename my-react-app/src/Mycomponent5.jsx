import { useEffect, useState } from "react";

function Mycopmponent5(){
    const[count,setCount]=useState(0);
    const[color,setColor]=useState("green");
    useEffect(()=>{
        document.title=`Count:${count} ${color} `;
    },[count,color]);

   function add(){
    setCount(c=>c+1);
   }
   function deletee(){
    setCount(count-1);
   }
   function changeColor(){
    setColor(c=>c=== "green" ? "red" : "green")
   }

    return(<div>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={deletee}>Delete</button>
      <br />
      <button onClick={changeColor}>Change</button>
      <p>The color is now :{color}</p>
    </div>);
}
export default Mycopmponent5