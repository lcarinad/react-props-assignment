const App = () => (
  <div>
    <Person
      name="lauren"
      age="36"
      hobbies={["coding", "gardening", "caring for my dogs"]}
    />

    <Person name="gaelan" age="37" hobbies={["ping pong", "baking"]} />

    <Person
      name="rosie"
      age="9"
      hobbies={["sleeping", "eating", "sunbathing with my pawrents"]}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
