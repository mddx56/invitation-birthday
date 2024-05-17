const Wish = ({ name }) => {
  return (
    <div className="wish-message">
      Feliz Cumpleaños...{" "}
      <span className="highlight">{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
