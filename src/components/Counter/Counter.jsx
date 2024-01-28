import { useState } from "react";
import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";

export default function Counter() {
  const [enterNumber, setEnterNumber] = useState(0);
  function handleDecrement() {
    setEnterNumber((prev) => prev - 1);
  }

  function handleIncrement() {
    setEnterNumber((prev) => prev + 1);
  }

  return (
    <>
      <section className="counter">
        <p>
          <IconButton icon={MinusIcon} onClick={handleDecrement}>
            Decrement
          </IconButton>
          <CounterOutput output={enterNumber} />
          <IconButton icon={PlusIcon} onClick={handleIncrement}>
            Increment
          </IconButton>
        </p>
      </section>
    </>
  );
}
