// import React from "react"; babel imports react automatically if it sees JSX
import { StrictMode } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

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
  return (
    <div>
      <h1>Adopt me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Lucy" animal="Cat" breed="Siamese" />
      <Pet name="Mithu" animal="Bird" breed="Cockatiel" /> */}
      <SearchParams />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
