import React, { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>SwitchTimer</button>
      {display && <Timer />}
    </>
  );
};

export default TimerContainer;
