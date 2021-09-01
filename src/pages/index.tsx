import { ChallengeBox } from "../components/ChallengeBox";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";


export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <ExperienceBar></ExperienceBar>
        <CountdownProvider>
          <section>
            <div>
              <Profile></Profile>
              <CompletedChallenges></CompletedChallenges>
              <CountDown></CountDown>
            </div>
            <div>
              <ChallengeBox></ChallengeBox>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
