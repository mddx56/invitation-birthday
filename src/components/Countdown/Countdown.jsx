import Wish from "./Wish";
import "./style.css";

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div className="box stack gap-2 lg:gap-4">
        <p>
          {countdownData.days}
          <span className="legend"> Dias</span>
        </p>
        <p>
          {countdownData.hours}
          <span className="countdown"> Horas</span>
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
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
