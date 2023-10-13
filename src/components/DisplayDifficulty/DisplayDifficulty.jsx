import s from "./style.module.css";

export function DisplayDifficulty({difficulty}) {
  return (
    <div className={s.container}>
      {difficulty
        ? `Difficulty set to : ${difficulty}`
        : "No difficulty set"}
    </div>
  );
}
