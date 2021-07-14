import React,{useState} from 'react'
import "./style.css"

const App=()=>{
  let [score,setScore]=useState(0)
  return(
    <div>
      <h1 style={{textAlign : "center"}}> Hey This is Counter Application</h1>
      <h1>The Value of score is {score} </h1>
      <button onclick={()=>{(score===25)? setScore(25) :setScore(score+1)}}> Increment</button>
      <button onclick={()=>{setScore(0)}}>Reset</button>
      </div>
    
  )
}
export default App