export function Greetings(props) {
    console.log(props);
    return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>My</li>
      <li>Friend</li>
    </ul>
  );
}
