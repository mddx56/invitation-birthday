import { useEffect, useState } from "react";
import Countdown from "./Countdown";

const Birthday = ({ name, day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = "Mateo";
    month = 6; // Month of the Birthday
    day = 16; // Day of the Birthday
  }

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const isItBday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const dateAtm = new Date();

        let birthdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          birthdayDay = new Date(currentYear, month - 1, day);
        }

        const currentTime = dateAtm.getTime();
        const birthdayTime = birthdayDay.getTime();
        const timeRemaining = birthdayTime - currentTime;
        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItBday,
        }));
        //console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
      };
      if (!isItBday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItBday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItBday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Nobiembre",
    "Diciembre",
  ];
  let monthBday = monthNames[birth.getMonth()];

  return (
    <div className="maps">
      <Countdown countdownData={state} name={name} />
      {!isItBday && (
        <>
          <div className="stack">
            {day} {monthBday} {currentYear}
          </div>
        </>
      )}
    </div>
  );
};

export default Birthday;
