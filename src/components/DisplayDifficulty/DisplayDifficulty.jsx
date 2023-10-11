import s from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={s.container}>Difficulty set to : {props.difficulty}</div>
  );
}
