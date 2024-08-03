import {Link} from "react-router-dom"

export default function DigitalClock(){

    return(
        <>
            <div className=" bg-[#032543] rounded-lg max-w-7xl h-10 mx-auto mt-5 flex items-center">
                <nav className="text-white font-inter font-semibold w-full flex flex-row  justify-evenly">
                    <Link to="/">DigitalClock</Link>
                    <Link to="/stopwatch">StopWatch</Link> 
                    <Link to="/worldclock">WorldClock</Link>
                    <Link to="/countdown">CountdownTimer</Link>
                    {/* <Link to="/alarm">Alarm</Link> */}
               </nav>
            </div>
        </>
    );
}