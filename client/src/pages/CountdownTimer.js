import {useState,useEffect} from "react";
import TimerSound from "../assets/TimerSound.mp3"

export default function CountdownTimer(){

    const [hour,setHour] = useState("0"+0);
    const [min,setMin] = useState("0"+0);
    const [sec,setSec] = useState("0"+0);
    const [check,setCheck] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(false);
    const[play,setPlay] = useState(false);
    const[playsound,setPlaysound] = useState(false);
    const [audio] = useState(new Audio(TimerSound));



    const hHour = (event) =>{
      const value = event.target.value;
      let hValue = value.replace(/\D/g, '');
      setHour(hValue);
    }
    
    const hMin = (event) =>{
      const value = event.target.value;
      let hValue = value.replace(/\D/g, '');
      if (hValue > 59) {
        hValue = 59;
      } 
      setMin(hValue);}
    
      const hSec = (event) =>{
        const value = event.target.value;
        let hValue = value.replace(/\D/g, '');
        if (hValue > 59) {
          hValue = 59;
        } 
        setSec(hValue);}

    let timer = null ;

    useEffect(() =>{
        if(check)
        {
        timer = setInterval(() =>{
        sec <= 10 ? setSec("0"+(sec - 1)):setSec(sec - 1) ;
        if(sec == 0 && min == 0 && hour == 0)
        {
          setHour("0"+0);
          setMin("0"+0);
          setSec("0"+0);
          clearInterval(timer);
          if(play)
          {
            audio.loop = true;
            audio.play();
            setPlaysound(true);
            setPlay(false);
          }
        }
        else if(sec == 0)
        {
          setSec(59);
          min<=10 ? setMin("0"+(min-1)):setMin(min-1);
          if(min == 0)
          {
            setMin(59)
            hour<=10 ? setHour("0"+(hour-1)):setHour(hour-1);
          }
        } 
        },1000);
        return () => clearInterval(timer);
        }
    });


    // Start 
  const Start = () =>{
    if(hour == 0 && min == 0 && sec == 0 || hour == "" || min == "" || sec=="")
    {
      alert("Invalid Time !");
    }
    else{
      setCheck(!check);
      setInputDisabled(true);
      setPlay(true);
    }
  }

  // Pause
  const Pause = () =>{
    setCheck(false);
  }

  //  Reset
  const Reset = () =>{
    setCheck(false);
    setInputDisabled(false);
    setHour("0"+0);
    setMin("0"+0);
    setSec("0"+0);
    clearInterval(timer);
  }

  const Stop = () =>{
    audio.pause();
    setPlaysound(false);
    setCheck(false);
    setInputDisabled(false);
  }

    return(
        <>
          <div className="container flex flex-col max-w-2xl py-20 gap-16 mx-auto relative top-32">
            <div className=" flex flex-row justify-center">
              <input className="font-inter bg-[#449BDC] text-white max-w-44 py-5 text-center text-8xl font-semibold rounded-3xl" type = "text" value={hour} disabled={inputDisabled} maxlength="2" onChange={hHour}/>
              <div className="text-white text-8xl font-semibold px-4 pt-3">: </div>
              <input  className="font-inter bg-[#449BDC] text-white max-w-44 py-5 text-center text-8xl font-semibold rounded-3xl" type = "text" value={min} disabled={inputDisabled} maxlength="2" onChange={hMin}/> 
              <div className="text-white text-8xl font-semibold px-4 pt-3">: </div>
              <input  className="font-inter bg-[#449BDC] text-white max-w-44 py-5 text-center text-8xl font-semibold rounded-3xl" type = "text" value={sec} disabled={inputDisabled} maxlength="2" onChange={hSec}/> 
              <br/><br/>
            </div>
            <div className="flex flex-row justify-center">
              {!playsound ? check ?
              <div> 
                <button  onClick={Pause} className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter">Pause</button><button onClick={Reset} className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter">Reset</button>
              </div>:
              <div> 
                <button onClick={Start} className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter">Start</button><button onClick={Reset} className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter">Reset</button>
              </div>:
              <button onClick={Stop} className="bg-[#E2E2B6] text-xl px-8 py-2 mx-10 rounded-3xl font-bold font-inter">Stop</button>}
            </div>
          </div>
        </>
    );
}