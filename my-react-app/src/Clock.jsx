import { useEffect, useState } from "react";
import './clock.css'
function Clock(){

   const[time,setTime]=useState(new Date());

   useEffect(
    ()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000);
    }
    ,[]);

    function format(){
      let hours=time.getHours();
      let min=time.getMinutes();
      let sec=time.getSeconds();
      const mer=hours>=12 ? "P.M" :"A.M";

      hours=hours%12 || 12;

       return `${pad(hours)} :${pad(min)} :${pad(sec)} ${mer}`;      
    }

    function pad(number){
     return (number<10 ?"0":"")+number;

    }

    return(
    <div className="clock-container">
           <div className="clock">
            <span>{format()}</span>
           </div>
        </div>
    );


}
export default Clock