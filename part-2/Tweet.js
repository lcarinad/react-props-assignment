const Tweet = ({ name, username, date, message }) => (
  <p>
    {name}
    <span>
      <b>{username} Tweeted🐦:</b> {message} <br />
    </span>
    <span>
      <i>on {date}</i>
    </span>
  </p>
);
