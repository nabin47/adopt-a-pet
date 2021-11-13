const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Lucy",
      animal: "Cat",
      breed: "Siamese",
    }),
    React.createElement(Pet, {
      name: "Mithu",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
