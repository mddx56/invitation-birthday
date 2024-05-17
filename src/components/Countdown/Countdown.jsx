import Wish from "./Wish";

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h3 className="heading">
          Esperando con emoción el gran día{" "}
          <span className="highlight">{name}</span>
        </h3>
        <div className="flex">
          <p>
            {countdownData.days}
            <span className="legend"> Dias</span>
          </p>
          <p>
            {countdownData.hours}
            <span className="legend"> Horas</span>
          </p>
          <p>
            {countdownData.minutes}
            <span className="legend"> Minutos</span>
          </p>
          <p>
            {countdownData.seconds}
            <span className="legend"> Segundos</span>
          </p>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
