import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar></ExperienceBar>
      <section>
        <div>
          <Profile></Profile>
          <CompletedChallenges></CompletedChallenges>
          <CountDown></CountDown>
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
