
import React, {useState, useEffect} from "react";
import Data from "./Data.js";
const App = ()=>{
    const [index, setIndex] = useState(0);
    const [peopleData, setPeopleData] = useState([]);
    const dataItems = ()=>{
        setPeopleData([...peopleData, Data[index]]);
        
    }
    useEffect(()=>{
        dataItems();
    }, [])

    const {id, order, title, dates, duties} = peopleData;
    console.log(peopleData.company);
    return (
        <>
          <h1>Experience</h1>
          <div className="section" key={id}>
            <div>{title}</div>
          </div>
        </>
    )
}

export default App;