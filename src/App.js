import React from 'react'
import { useState } from 'react'
import './App.css'
import { FaTrash} from 'react-icons/fa';

const App = () => {
  const [val, setValue] = useState();
  const [date, setDate] = useState();
  const [update,setupdate] = useState(false);//change the state of button
  const [arr, setarr] = useState([])//change the array
  const [idx,setidx] = useState();//save the index in update operation
  let Cll = (e) => {
    if(val===' ' || date ===' '){
      if(val===' '&& date ===' '){
        alert("give the info about the task")//will check value given or not
      }
      else if(val===' '){
        alert("Task can't be empty")
      }
     else  if(date===' '){
        alert("please provide a date")
      }
    }
    else{ let obj = {
      data: val,
      date: date,//converting value and date into a object
    }
     const b = [obj, ...arr];//creating an array (prevarray+obj)
     b.map((e,index)=>{
        return e.id = index;//we are also storing the index now;
     })
     setarr(b);
    console.log(b);
  }

  setValue(" ");//to empty the input file
  setDate(" ");
  }
     const delettask = (id) =>{
       arr.splice(id,1);
       const b = [...arr];
       setarr(b);
       console.log(arr);
     }
  
     const updat = (i)=>{
       setValue(arr[i].data);
       setDate(arr[i].date);
       setidx(i);
       setupdate(true);
     }
     const editHandle = () =>{
      let obj = {
        data: val,
        date: date,//converting value and date into a object
      }
       const b = [ ...arr,obj];
       
       b.splice(idx,1)
       setarr(b);
       setupdate(false);
       setValue(" ");//to empty the input file
       setDate(" ");
     }
  return (
    <div>
      <h1>Todolist</h1>
      <div className='btn'>
      <input type="text" value={val} className="inpbtn" onChange={(e) => { setValue(e.target.value) }} placeholder="give data of the task" />
      <input type="date" value={date} className="inpbtn" onChange={(e) => { setDate(e.target.value) }} placeholder="date of the task" />
      {
        !update?<button type="submit" className="button-85" onClick={Cll}>Create a Task</button>:
        <button type="submit" className="button-85" onClick={editHandle}>Update</button>
        //if else condition to change the button
      }
      </div>
      <div className='list'>{
      arr.map(
        (e,i) =>
         {
        return (
          
          <div className="task">
            <div className="taskdata">{e.data}</div>
            <div className="taskdate">{e.date}</div>
           <button onClick={()=>{updat(i)}}>Update</button>
           {/* <button onClick={()=>{delettask(i)}}>delete</button> */}
           <FaTrash onClick={()=>{delettask(i)}}></FaTrash>
          </div>
        )
         }
      )
      }</div>
        
       
    

    </div>
  )
}

export default App



// import React, { useState } from "react";
// function App(){
//    const [val,setVal]=useState([]);
//    const handleAdd=()=>{
//        const abc=[...val,[]]
//        setVal(abc)
//    }
//    const handleChange=(onChangeValue,i)=>{
//     const inputdata=[...val]
//     inputdata[i]=onChangeValue.target.value;
//     setVal(inputdata)
//    }
//    const handleDelete=(i)=>{
//        const deletVal=[...val]
//        deletVal.splice(i,1)
//        setVal(deletVal)  
//    }
//    console.log(val,"data-")
// return(
//     <>
//     <button onClick={()=>handleAdd()}>Add</button>
//         {val.map((data,i)=>{
//             return(
//                <div>
//                     <input value={data} onChange={e=>handleChange(e,i)} />
//                     <button onClick={()=>handleDelete(i)}>x</button>
//                </div>
//             )
//         })}
//     </>
// );
// }
// export default App;