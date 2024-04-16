const App = () => (
  <div>
    <Tweet
      name="Rosie DeLago"
      username="Rosie"
      message="I'm a dog🐶"
      date="April 14, 2024"
    />
    <Tweet
      name="Teddy Cyrano"
      username="Teddy"
      message="I'm Rosie's brother🦴"
      date={new Date().toDateString()}
    />
    <Tweet
      name="Georgie the King"
      username="Georgie"
      message="I'm Rosie's and Teddy's cousin."
      date={new Date().toDateString()}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
