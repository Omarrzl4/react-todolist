import { useState } from "react"

function Mycomponent2(){

    const[car,setCar]=useState({year:2007 ,
                                 make:"Chevy" ,
                                 model:"Camaro"})
      
      
                                 

    const yearChange=(event)=>{
        setCar(car=>({...car,year:event.target.value}))
    }

    const makeChange=(event)=>{
        setCar(car=>({...car,make:event.target.value}))

    }

    const modelChange=(event)=>{
        setCar(car=>({...car,model:event.target.value}))
    }
    return(
        <div>
            <p>Your Favorite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={yearChange} />

            <input type="text" value={car.make} onChange={makeChange}/>

            <input type="text" value={car.model} onChange={modelChange}/>

        </div>
    );                             
}
export default Mycomponent2