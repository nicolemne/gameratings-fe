import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/SavedGames.module.css";
import { Dropdown } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick, status }, ref) => (
  <button
    ref={ref}
    className={`${styles.DropdownToggle} ${styles[status]}`}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children} &#x25BE;
  </button>
));

const SavedGames = ({ savedGames }) => {
  return (
    <Container className={`${styles.Container}`}>
      <Row className="justify-content-center">
        <Col className="py-2 p-0 p-lg-2">
          <div>
            {savedGames.map((myGame) => (
              <div key={myGame.id} className={`p-3 mb-4 ${styles.GameCard}`}>
                <div className="text-center mb-4">
                  <h5 className={`mb-2 ${styles.Title}`}>
                    {myGame.game_title}
                  </h5>
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id={`dropdown-status-${myGame.id}`}
                      status={myGame.status}
                    >
                      {myGame.status}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="completed">
                        Completed
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="wishlist">
                        Wishlist
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="in_progress">
                        In Progress
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className={styles.ImageBox}>
                    <img
                      src={myGame?.game_image}
                      alt="Game Cover"
                      className={styles.Image}
                    />
                  </div>
                  <div className="ms-3 text-start">
                    <strong className={styles.GameInfo}>Developer</strong>
                    <p className={styles.InfoText}>{myGame.game_developer}</p>
                    <strong className={styles.GameInfo}>Release Year</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_release_year}
                    </p>
                    <strong className={styles.GameInfo}>Genre</strong>
                    <p className={styles.InfoText}>{myGame.game_genre}</p>
                    <strong className={styles.GameInfo}>Platform</strong>
                    <p className={styles.InfoText}>{myGame.game_platform}</p>
                    <strong className={styles.GameInfo}>Multiplayer</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_multiplayer ? "Yes" : "No"}
                    </p>
                    <strong className={styles.GameInfo}>Avg Rating</strong>
                    <p className={styles.InfoText}>
                      {myGame.game_average_star_rating}
                    </p>
                  </div>
                </div>
                <hr className={styles.CustomHr} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SavedGames;
