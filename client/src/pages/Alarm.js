import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Alarm(){

    const [time,setTime] = useState("");
    const [date,setDate] = useState("");
    const [hour,setHour] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [meridiem,setMeridiem] = useState("AM");

    const nav = useNavigate();

    const hHour = (event) =>{setHour(event.target.value)}
    const hMinutes = (event) =>{setMinutes(event.target.value)}
    const hMeridiem = (event) => {setMeridiem(event.target.value)}

    let timer = null;

    
    useEffect(()=>{
        timer = setInterval(()=>{
          let new_date = new Date().toDateString();  
          let hour = new Date().toLocaleTimeString();
          setTime(hour);
          setDate(new_date);
        },1000);

        return () => clearInterval(timer);
    });

    const SetAlarm = (event) =>{
        event.preventDefault();
        if(hour == 0 && minutes == 0)
      {
        alert("Invalid Time !")
      }
      else{
        nav("/ar",{state:{hour,minutes,meridiem}});
      }
    }


    return(
        <>
        <center>
            <h1>Alarm Clock</h1>
            <div >
            <h1>{date}</h1>
            <h2>{time}</h2>
            </div>
            <select name="hours" id="atime" onChange={hHour}>
              {
                Array.from({length:13},(_,index)=>(
                (index<10)? <option value={index}>{"0"+index}</option> :  <option value={index}>{index}</option>
                ))
              }
            </select>
            <b> : </b>
          <select name="minutes" id="atime" onChange={hMinutes}>
            {
            Array.from({ length: 60 }, (_,index) => (
                (index<10)? <option value={index}>{"0"+index}</option> :  <option value={index}>{index}</option>
                    ))}
          </select> &nbsp;
          <select name="meridiem" id="atime" onChange={hMeridiem}> 
          <option value="AM">AM</option>
          <option value="PM">PM</option>
          </select>
            <br/><br/>
            <button id="abtn" onClick={SetAlarm}>Set Alarm</button>
        </center>
        </>
    );
}