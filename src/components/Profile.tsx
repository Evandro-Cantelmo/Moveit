import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const {level} = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/66844968?v=4"
        alt="Evandro Cantelmo"
      ></img>
      <div>
        <strong>Evandro Cantelmo</strong>
        <p>
          <img src="icons/level.svg" alt=""></img>
          Level {level}
        </p>
      </div>
    </div>
  );
}
