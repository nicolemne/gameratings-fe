import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";

import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";

import { AllGamesProvider } from "./contexts/AllGamesContext";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <div className="NavBar">
        <NavBar />
        <Container className={styles.Main}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PostsPage message="No results found. Adjust the search keyword." />
              )}
            />
            <Route
              exact
              path="/feed"
              render={() => (
                <PostsPage
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )}
            />
            <Route
              exact
              path="/liked"
              render={() => (
                <PostsPage
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              )}
            />
            <Route
              exact
              path="/posts/create"
              render={() => (
                <AllGamesProvider>
                  <PostCreateForm />
                </AllGamesProvider>
              )}
            />
            <Route exact path="/posts/:id" render={() => <PostPage />} />
            <Route exact path="/mygames" render={() => <h1>My Games</h1>} />
            <Route exact path="/profile" render={() => <h1>Profile</h1>} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/login" render={() => <SignInForm />} />
            <Route render={() => <h1>404 page not found</h1>} />
          </Switch>
        </Container>
      </div>
    </div>
  );
}

export default App;
