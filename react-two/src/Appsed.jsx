import { useState, useEffect } from 'react'
import './App.css'
import "./Data.js";
import Data from './Data.js';
// import PeopleComponent from './PeopleComponent.jsx';

function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const [people, setPeople ] = useState([]);
  // console.log(people);
  const handleItem = ()=>{
    setPeople([...people, Data[value]])
    setIsLoading(false);
  }
  // console.log(people);
  useState(()=>{
    handleItem();
  }, [])
  
  if (isLoading){
    return <h1>Loading...</h1>
  }
  
//   const handleClick = (id)=>{
//     const myChoice = Data.filter((btn)=>{
//         return btn.company !== id;
//     })
//     setPeople(myChoice)
// }

// const peopleData = people;
// console.log(peopleData);
const {id, order, title, dates, duties, company} = people;
console.log(people);
// [value];

// console.log(title);
  return (
    <>
      <h1> Experience</h1>
      {
            Data.map((itemize, index)=>{
                return <button key={itemize.id} className="btn" onClick={()=>setValue(index)}>{itemize.company}
                
                </button>
            })
        }
        {
        
        }
        {
          <section key={id} className="sec">
          <div>{title}</div>
          {/* <button>{company}</button> */}
          {/* <div>{dates}</div> */}
          <div>
              {/* {
               duties.map((items, index)=>{
                  return <div key={index}>
                      <div>{items}</div>
                      </div>
                  })
              } */}
          </div>
          <button>More Info</button>
          
      </section>
      
        } 
      
        
      {/* {
        people.map((item)=>{
            const {id, order, title, dates, duties, company} = item;
            return <section key={id} className="sec">
                <div>{title}</div>
                <button>{company}</button>
                <div>{dates}</div>
                <div>
                    {
                     duties.map((items, index)=>{
                        return <div key={index}>
                            <div>{items}</div>
                            </div>
                        })
                    }
                </div>
                <button>More Info</button>
                
            </section>
            
        })
      }
         */}
        
        
      {/* <PeopleComponent people={people} value={index}></PeopleComponent> */}
    </>
  )
}
export default App
