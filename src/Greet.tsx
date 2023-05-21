import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet({ name = "John" }: GreetProps) {
  return (
    <div>
      <h1>Greeting form</h1>
      <h2>Section 1</h2>
      <label htmlFor="name">Ok</label>
      <input
        placeholder="name"
        id="name"
        type="text"
        value="haha"
        onChange={() => {}}
      />
      <div data-testid="23"></div>
      <img src="" alt="nothing" />
      <span title="close">X</span>
      {`Hello ${name}`}
      <button>Submit</button>
      <button>Close</button>
    </div>
  );
}
