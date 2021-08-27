import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completados</span>
            <span>S</span>
        </div>
    )
}