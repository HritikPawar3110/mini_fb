import React,{useState} from "react";
function App(){
  const[plus,setCount]=useState(0);

  return(
    <main>
     <h1>{plus}</h1>

      <button onClick={()=>setCount(plus-1)}>click me</button>
    </main>
  );

}
export default App;