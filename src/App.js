import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Another from "./Another";

function App() {
  const style = {
    backgroundColor: "blue",
    fontSize: "25px",
  };
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    setCount((prev) => prev + 5);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Another />
        <img src={logo} className="App-logo" alt="logo" />
        {4 > 6 ? (
          <p style={style}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        ) : (
          <div>
            <p>{count}</p>
            <div>
              <button onClick={decrement}>-</button>
            </div>
            <div>
              <button onClick={increment}>+</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
