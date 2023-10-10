import { Greetings } from "./Greetings";
import { AgeCounter } from "./AgeCounter";

export function App() {
  return (
    <>
      <h1>Hello</h1>
      <Greetings 
      firstName={"Rachelle"}
      isSunny = {false}
      />
      <AgeCounter/>
    </>
  );
}
