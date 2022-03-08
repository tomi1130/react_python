import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const C = () => {
  const value = useContext(AppContext);
  if (value !== undefined) {
    return (
      <div>
        <h3>C</h3>
        <button onClick={() => value.dispatch("add_1")}>+1</button>
        <button onClick={() => value.dispatch("multiple_3")}>*3</button>
        <button onClick={() => value.dispatch("reset")}>reset</button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default C;
