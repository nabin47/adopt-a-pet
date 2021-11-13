// import React from "react"; babel imports react automatically if it sees JSX 
import ReactDOM from "react-dom";
import Pet from "./Pet";

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
      <pet name="Luna" animal="Dog" breed="Havanese" />
      <pet name="Lucy" animal="Cat" breed="Siamese" />
      <pet name="Mithu" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
