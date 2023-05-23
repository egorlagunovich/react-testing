import React, { useState } from "react";

type CounterProps = {
  clickHandler: () => void;
};

export default function Counter({ clickHandler }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  const [countValue, setCountValue] = useState<number>(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <input
        type="number"
        onChange={(e) => setCountValue(parseInt(e.target.value))}
        value={countValue}
      />
      <button
        onClick={() => {
          setCount(countValue);
        }}
      >
        Add
      </button>
      <button onClick={clickHandler}>Mocking</button>
    </div>
  );
}
