import "./App.css"
const PeopleComponent = ({people, value})=>{
    // console.log(people);
    // const handleClick = (id)=>{
    //     const myChoice = data.filter((btn)=>{
    //         console.log(btn.company !== id);
    //     })
    //     setPeople(myChoice)
    // }
    // handleClick();
    return <div className="parent">
        {/* {
            data.map((itemize)=>{
                return <div key={itemize.id} className="btn">
                      <button onClick={()=>handleClick(itemize.id)}>{itemize.company}</button>
                    </div>
            })
        } */}
      {
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
    </div>
}
export default PeopleComponent;