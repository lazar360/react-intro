import { useState } from "react";

export function AgeCounter() {
    const [age, setAge] = useState(30);
    function increaseAge(){
        setAge(age+1);
    }
    
      return (
        <>
          <button onClick={increaseAge}>Increase age</button>
          <br/>
          <h3>You are {age} years old</h3>
        </>
      );
  }