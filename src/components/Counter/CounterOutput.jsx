export default function CounterOutput({ output }) {
  const cssClass = output >= 0 ? "counter-output" : "counter-output negative";
  return <p className={cssClass}>{output}</p>;
}
