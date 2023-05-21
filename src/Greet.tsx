import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet({ name = "John" }: GreetProps) {
  return (
    <div>
      {`Hello ${name}`}
      <button>Submit</button>
    </div>
  );
}
