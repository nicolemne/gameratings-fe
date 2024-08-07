import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo_gg1.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      fixed="top"
      bg="transparent"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="70px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.NavBackground}>
            <Form className={`d-flex ${styles.NavSearchForm}`}>
              <FormControl
                type="text"
                placeholder="Search"
                size="sm"
                className={styles.NavSearchInput}
              />
              <Button variant="link" className={styles.BtnSearch} size="sm">
                <i
                  className={`fa-solid fa-magnifying-glass ${styles.NavSearchIcon}`}
                ></i>
              </Button>
            </Form>
            <Nav className="ml-auto text-right">
              <Nav.Link className={styles.BtnHome}>
                <i className={`fa-solid fa-house ${styles.NavHomeIcon}`}></i>
              </Nav.Link>
              <Nav.Link className={styles.NavLink}>
                <i className={`fa-solid fa-plus ${styles.NavPostIcon}`}></i>
                New Post
              </Nav.Link>
              <Nav.Link className={styles.NavLink}>
                <i className={`fa-solid fa-heart ${styles.NavLikeIcon}`}></i>
                Liked Posts
              </Nav.Link>
              <Nav.Link className={styles.NavLink}>
                <i
                  className={`fa-solid fa-gamepad ${styles.NavMyGamesIcon}`}
                ></i>
                My Games
              </Nav.Link>
              <Nav.Link className={styles.NavLink}>Profile</Nav.Link>
              <Nav.Link>
                <Button
                  className={styles.BtnSignUp}
                  variant="primary"
                  size="sm"
                >
                  Sign Up
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className={styles.BtnLoginOut}
                  variant="outline-dark"
                  size="sm"
                >
                  Log In
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  className={styles.BtnLoginOut}
                  variant="outline-dark"
                  size="sm"
                >
                  Log Out
                </Button>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
