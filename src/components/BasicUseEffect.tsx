import { useEffect, useState } from "react";
import React from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("useEffect involed");
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
    </div>
  );
};

export default BasicUseEffect;
