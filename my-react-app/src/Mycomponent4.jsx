import { useState } from "react"

function Mycomponent4(){

    const[cars,setCars]=useState([]);
    const[caryear,setYear]=useState(new Date().getFullYear());
    const[make,setMake]=useState("");
    const[model,setModel]=useState("");

       function addCar(){
        const newcar={year:caryear,makee:make,modell:model}
         setCars(c=>[...c,newcar])
         setYear(new Date().getFullYear())
         setMake("");
         setModel("");
       }

       function removeCar(index){
         
        setCars(c=>c.filter((_,i) => i!==index))

       }

       function changeYear(event){
         setYear(event.target.value)
       }

       function changeMake(event){
        setMake(event.target.value)
       }

       function changeModel(event){
        setModel(event.target.value)
       }

    return(
        <>
        <div>
            <h1>List of Car Objects</h1>
            <ul>
              {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>
                {car.year} {car.makee} {car.modell}
              </li>)}
            </ul>

            <input type="number" value={caryear} onChange={changeYear}/>
            <br />
            <input type="text" placeholder="Enter car make" value={make} onChange={changeMake}/>
            <br/>
            <input type="text" placeholder="Enter car model" value={model} onChange={changeModel} />
            <br />
            <button onClick={addCar}>Add car</button>
        </div>
        </>
    );


}

export default Mycomponent4