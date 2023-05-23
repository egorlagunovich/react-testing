import React from "react";
import Counter from "./components/Counter";

function App() {
  const clickHandler = () => {};
  return (
    <div className="App">
      <Counter clickHandler={clickHandler} />
    </div>
  );
}

export default App;
