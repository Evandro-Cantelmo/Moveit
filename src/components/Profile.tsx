import styles from "../styles/components/Profile.module.css";

export function Profile() {
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
          Level 1
        </p>
      </div>
    </div>
  );
}
