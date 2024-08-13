import React from "react";
import styles from "../styles/SharedBoxStyles.module.css";

const GameInfo = ({ game }) => {
  return (
    <div className={styles.Box}>
      <h5 className="text-center">
        {game?.game_title || game?.title || ""}
      </h5>
      <div className={styles.InfoContainer}>
        <div className={styles.InfoText}>
          <strong>Platform</strong> {game?.game_platform || game?.platform?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Developer</strong> {game?.game_developer || game?.developer || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Genre</strong> {game?.game_genre || game?.genre?.name || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Release Year</strong> {game?.game_release_year || game?.release_year || ""}
        </div>
        <div className={styles.InfoText}>
          <strong>Multiplayer</strong> {game?.game_multiplayer ? "Yes" : "No"}
        </div>
        <div className={styles.InfoText}>
          <strong>Avg Rating</strong> {game?.game_average_star_rating || game?.average_star_rating || "N/A"}
        </div>
        <div className={styles.ImageBox}>
          <img src={game?.game_image || game?.image} alt="Game Cover" className={styles.Image} />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
