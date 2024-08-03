import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AlarmSound from "../assets/Alarmsound.mp3";

export default function AlarmRing() {
  const location = useLocation();
  const hour = location.state.hour;
  const min = location.state.minutes;
  const meridiem = location.state.meridiem;
  const nav = useNavigate();
  const [audio] = useState(new Audio(AlarmSound));
  const [check,setCheck] = useState(false);
  const [currentTime, setCurrentTime] = useState("");



  useEffect(() => {
    const interval = setInterval(() => {
      const stime = new Date().toLocaleTimeString();
      setCurrentTime(stime);
      let etime = new Date();
      etime.setHours(hour);
      etime.setMinutes(min);
      etime.setSeconds("0"+0);
      etime = etime.toLocaleTimeString().replace(/(\s\w+)/," "+meridiem);
      console.log(stime);
      console.log(etime);
      if (stime === etime) {
        setCheck(true);
        audio.loop = true;
        audio.play();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  const stopAlarm = () => {
    audio.pause();
    audio.currentTime = 0;
    nav("/a");
  };

  const Dismiss =() =>{
    nav("/a");
  }

  return (
    <>
      <center>
        <h1>Alarm Ring</h1>
        <br />
        <h1 id="artime">{currentTime}</h1>
        <br/>
        <h1 id="artime2">
          Alarm will ring at :-
          <u>
          {hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min} {meridiem}
          </u>
        </h1>
        <br />
        {check ? <button id="arbtn" onClick={stopAlarm}>Stop</button>:
        <button id="arbtn"onClick={Dismiss}>Dismiss</button>}
      </center>
    </>
  );
}
