import Wish from "./Wish";

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <h5 class="">
        {countdownData.days} Dias {countdownData.hours} Horas{" "}
        {countdownData.minutes} Minutos {countdownData.seconds} Segundos
      </h5>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
