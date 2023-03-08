import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>useState... otra vez</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        Incrementar +1
      </button>
    </>
  );
}
