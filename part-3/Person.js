const Person = ({ name, age, hobbies }) => {
  let canVote;
  if (age > 18) {
    canVote = <h3>please go vote!</h3>;
  } else {
    canVote = <h3>you must be 18</h3>;
  }

  let displayName;
  if (name.length > 8) {
    displayName = name.slice(0, 7);
  } else {
    displayName = name;
  }
  return (
    <p>
      Learn some information about this person
      <br />
      <b>name:</b> {displayName}
      <br />
      <b>age:</b> {age}
      <br />
      <h3>{canVote}</h3>
      <ul>
        <b>Hobbies:</b>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </p>
  );
};
