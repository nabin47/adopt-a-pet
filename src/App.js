// import React from "react"; babel imports react automatically if it sees JSX
import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Lucy",
//       animal: "Cat",
//       breed: "Siamese",
//     }),
//     React.createElement(Pet, {
//       name: "Mithu",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//   ]);
// };

// Equivalent JSX for the abaove commented portion

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Lucy" animal="Cat" breed="Siamese" />
    <Pet name="Mithu" animal="Bird" breed="Cockatiel" /> */}
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
