import {Alarm,AlarmRing,CountdownTimer,DigitalClock,StopWatch,WorldClock} from "./pages/index"
import NavBar from "./components/NavBar"
import ShowNavbar from './components/ShowNavbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { MenuContextProvider } from "./context/MenuContext";
import { useState } from "react";

function App() {

  const [menubar,setMenuBar] = useState(false)

  return (
    <div className="App">
      <MenuContextProvider value={{menubar,setMenuBar}}>
        <BrowserRouter>
          <ShowNavbar>
            <NavBar/>
          </ShowNavbar>
          <Routes>
            <Route path="/" element={<DigitalClock/>} />
            <Route path="/stopwatch" element={<StopWatch/>} />
            <Route path="/worldclock" element={<WorldClock/>} />
            <Route path="/countdown" element={<CountdownTimer/>} />
            <Route path="/alarm" element={<Alarm/>}/>
            <Route path="/alarmring" element={<AlarmRing/>}/>
            <Route path="*" element={<DigitalClock/>} />
          </Routes>
        </BrowserRouter>
      </MenuContextProvider>
    </div>
  );
}

export default App;
