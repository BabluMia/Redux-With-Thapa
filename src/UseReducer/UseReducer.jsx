import React, { useReducer } from "react";
import "./UseReducer.css";
const initialState = 1;
const reducer = (state, action) => {
  console.log(action.type);
  console.log(state);
 
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
  
  

  return state;
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 style={{ color: "skyblue", fontSize: "50px" }}>UseReducer Hooks</h2>
      <h3>{state}</h3>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
