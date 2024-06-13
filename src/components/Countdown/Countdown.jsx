import Wish from "./Wish";

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div class="box">
        <h5 class="">
          {countdownData.days} Dias {countdownData.hours} Horas{" "}
          {countdownData.minutes} Minutos {countdownData.seconds} Segundos
        </h5>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
