import axios from "axios";
import { useState, useEffect } from "react";

export default function WorldClock() {
  const [timezones, setTimezones] = useState([]);
  const [datetime, setDatetime] = useState("");
  const [region, setRegion] = useState("Asia/Kolkata");
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  let timer = null;

  const hRegion = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api")
      .then((res) => {
        setTimezones(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:3001/region", { region })
      .then((res) => {
        console.log("Region sent to the server:", res.data);
        console.log(res);
        let time = res.data.datetime.slice(11, 19);
        let hour = parseInt(res.data.datetime.slice(11, 13));
        let min = parseInt(res.data.datetime.slice(14, 16));
        let sec = parseInt(res.data.datetime.slice(17, 19));
        setHour(hour);
        setMin(min);
        setSec(sec);
        timer = setTimeout(() => {
          timer = setInterval(() => {
            setSec((prevSec) => {
              let newSec = prevSec + 1;
              if (newSec === 60) {
                newSec = 0;
                setMin((prevMin) => {
                  let newMin = prevMin + 1;
                  if (newMin === 60) {
                    newMin = 0;
                    setHour((prevHour) => prevHour + 1);
                  }
                  return newMin;
                });
              }
              return newSec;
            });
          }, 1000);
        }, 2000);
      })
      .catch((err) => {
        console.error("Error sending region to the server:", err);
      });

    return () => {
      clearTimeout(timer);
      clearInterval(timer);
    };
  }, [region]);

  useEffect(() => {
    const formattedTime = `${hour < 10 ? "0" + hour : hour}:${
      min < 10 ? "0" + min : min
    }:${sec < 10 ? "0" + sec : sec}`;
    setDatetime(formattedTime);
  }, [hour, min, sec]);

  return (
    <>
      <div className=" container flex flex-col max-w-2xl py-10 gap-10 mx-auto relative top-32">
        <div className="bg-[#449BDC] py-8 rounded-3xl text-center text-white text-8xl font-inter font-semibold">
          {datetime}
        </div>
        <div className="flex flex-row justify-center">
        {timezones.length ? <select className="w-full max-w-xl py-10 bg-[#E2E2B6] " value={region} onChange={hRegion} autoFocus size={6}>
          {timezones.map((timezone, index) => (
            <option id="wcoption2" key={index} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>:
        <div className="w-full flex flex-row justify-center">
                <div role="status">
                    <svg aria-hidden="true" className="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}
        </div>
        </div>
    </>
  );
}
