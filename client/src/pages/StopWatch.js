import { useState, useEffect, useRef } from "react";

export default function StopWatch() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [check, setCheck] = useState(false);

  let timer = null;
  let timer2 = null;

  useEffect(() => {
    if (check) {
      timer = setInterval(() => {
        setSec(prevSec => prevSec + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [check]);


  useEffect(() => {
    if (sec == 60) {
      setSec(0);
      setMin(prevMin => prevMin + 1);
    }
    if (min == 59 && sec == 60) {
      setSec(0);
      setMin(0);
      setHour(prevHour => prevHour + 1);
    }
  },[sec])

  // Start
  const Start = () => {
    setCheck(prev => !prev);
  };

  // Pause
  const Pause = () => {
    clearInterval(timer);
    setCheck(false);
  };


  //  Reset
  const Reset = () => {
    setSec(0);
    setMin(0);
    setHour(0);
    setCheck(false);
    clearInterval(timer);
  };

  return (
    <>
      <div className="container flex flex-col max-w-2xl py-20 gap-10 mx-auto relative top-32">
        <div className="bg-[#449BDC] py-8 rounded-3xl text-center text-white text-8xl font-inter font-semibold">
          {hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}:
          {sec < 10 ? "0" + sec : sec}
        </div>
        <div className="flex flex-row justify-center">
          {check ? (
            <button className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter" onClick={Pause}>
              Pause
            </button>
          ) : (
            <button className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter" onClick={Start}>
              Start
            </button>
          )}
          <button className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
