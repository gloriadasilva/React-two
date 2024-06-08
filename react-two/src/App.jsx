
import React, {useState, useEffect} from "react";
import { FaAnglesRight } from "react-icons/fa6";
import "./Data.js";
import "./App.css";
import Data from "./Data.js";
const App = ()=>{
    const [expData, setExpData] = useState(null);
    const [value, setValue] = useState(0)
    
    useEffect(()=>{
        setExpData(Data[value]);
    }, []);
    
    const handleBtn = (btns)=>{
        setExpData(btns)
    }
    
    return (
        <>
          <h1 className="exp">Experience
          </h1>
          <div className="underline">
             <div className="underlin"></div>
          </div>
          <div className="parent">
            <div className="button">
                {
                    Data.map((btns, index)=>{
                        return <div className="hove">
                              <div key={index} onClick={()=>handleBtn(btns)} 
                              className={`buttonss ${btns == value && "active"}`}>{btns.company}</div>
                            </div>
                    })
                }
            </div>
            <div className="text">
            {
            expData ? <div key={expData.id}>
                <div className="titl">{expData.title}</div>
                <div className="dates">{expData.dates}</div>
                <div>
                    {expData.duties.map((items)=>{
                        return <div className="btnn">
                            <div key={items.id}className="but"> 
                            <FaAnglesRight className="icon" />
                            {items}</div>
                        </div>
                        
                    })}
               </div>
            </div>
            
            : <div> Cannot be Accessed.</div>
          }
            </div>
          </div>
        </>
    )
}

export default App;