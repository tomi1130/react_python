import { useCallback, useReducer, useState } from "react";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
import B from "./components/B";
import Basic2 from "./components/Basic2";
import BasicReducer from "./components/BasicReducer";
import BasicUseEffect from "./components/BasicUseEffect";
import CountClick from "./components/CountClick";
import CountDisplay from "./components/CountDisplay";
import Memo from "./components/Memo";
import TimerContainer from "./components/TimerContainer";
import AppContext from "./context/AppContext";
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

function App() {
  const [count, dispatch] = useReducer(reducer, initial);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const AddCount1 = useCallback(() => {
    setCount1((prevCount1) => prevCount1 + 1);
  }, []);
  const AddCount2 = useCallback(() => {
    setCount2((prevCount2) => prevCount2 + 1);
  }, []);

  return (
    <AppContext.Provider value={{ count, dispatch }}>
      <div className="App">
        <header className="App-header">
          {/* <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* Count {count}
          <B /> */}
          {/* <BasicReducer /> */}
          {/* <Memo /> */}
          <CountDisplay name="count1" count={count1} />
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>
          <CountDisplay name="count2" count={count2} />
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
