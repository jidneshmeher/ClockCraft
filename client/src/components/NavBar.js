import { useState } from "react";
import {Link} from "react-router-dom"
import { useMenu } from "../context/MenuContext";

export default function DigitalClock(){

    const {menubar,setMenuBar} = useMenu()

    return(
        <>
            <div className="relative rounded-lg max-w-full mx-[15px] h-12 mt-5">
                <div className="bg-[#032543] absolute rounded-lg w-full h-12 flex items-center justify-between">
                    <div id="logo" className="">
                        <Link to="/" className="font-inter mx-5 text-lg text-white">Clock<span className="font-extrabold">Craft</span></Link>   
                    </div>
                    <div id="menu-bar" className="mr-5 md:hidden">
                        <button onClick={() => setMenuBar((prevVal) => !prevVal) }><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>              
                    </div>
                    <nav className="hidden text-white text-lg font-inter font-semibold w-full md:flex flex-row justify-evenly ">
                        <Link to="/" >DigitalClock</Link>
                        <Link to="/stopwatch" >StopWatch</Link> 
                        <Link to="/worldclock" >WorldClock</Link>
                        <Link to="/countdown" >CountdownTimer</Link>
                        {/* <Link to="/alarm">Alarm</Link> */}
                    </nav>
               </div>
               
               {menubar ? (<div className="bg-[#032543] absolute rounded-lg w-full h-96 flex flex-col gap-20 items-center">
                    <div className="bg-[#032543] relative rounded-lg w-full h-12 flex items-center justify-between">
                        <div id="logo" className="">
                            <Link to="/" className="font-inter mx-5 text-white">Clock<span className="font-extrabold">Craft</span></Link>   
                        </div>
                        <div id="menu-bar" className="mr-5">
                            <button onClick={() => setMenuBar((prevVal) => !prevVal) }><svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_SM"> <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></button>           
                        </div>
                    </div>
                    <div className="text-white text-lg font-inter font-semibold w-[50%]">
                        <ul className="list-disc flex flex-col gap-3"> {/* Add list-disc class here */}
                            <li><Link to="/" onClick={() => setMenuBar((prevVal) => !prevVal)}>DigitalClock</Link></li>
                            <li><Link to="/stopwatch" onClick={() => setMenuBar((prevVal) => !prevVal)}>StopWatch</Link></li>
                            <li><Link to="/worldclock" onClick={() => setMenuBar((prevVal) => !prevVal)}>WorldClock</Link></li>
                            <li><Link to="/countdown" onClick={() => setMenuBar((prevVal) => !prevVal)}>CountdownTimer</Link></li>
                            {/* <li><Link to="/alarm">Alarm</Link></li> */}
                        </ul>
                    </div>
               </div>) : null}
            </div>
        </>
    );
}