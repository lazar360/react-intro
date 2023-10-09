import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <h1>Hello to the React World</h1>
      <Greetings 
      firstName={"Rachelle"}
      age={50}
      isSunny = {false}
      />
    </>
  );
}
