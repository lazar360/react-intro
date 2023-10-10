import s from "./style.module.css";

export function Greetings(props) {
  console.log(props);
    return (
      <ul >
        <li className={s.li}>Hello {props.firstName}</li>
        <li>You are {props.age} years old</li>
        <li>Friend</li>
        <li>{props.isSunny ? <ItsSunny /> : <ItsRainy/>}</li>
      </ul>
    );
}

function ItsSunny(){
    return "Il fait beau"
}
function ItsRainy(){
    return "Il pleut"
}
