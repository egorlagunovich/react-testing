import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet({ name = "John" }: GreetProps) {
  return (
    <div>
      <h1>Greeting form</h1>
      <h2>Section 1</h2>
      {`Hello ${name}`}
      <button>Submit</button>
    </div>
  );
}
