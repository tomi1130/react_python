import React, { useReducer } from "react";

const initial = 0;
const reducer = (currentState: number, action: any) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initial;
    default:
      return currentState;
  }
};
const BasicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch("add_1")}>+1</button>
      <button onClick={() => dispatch("multiple_3")}>*3</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default BasicReducer;
