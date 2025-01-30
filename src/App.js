import React from "react";
import "./App.css";
import Taskbar from "./Components/Taskbar";
import BotCollection from "./Components/BotCollection";
import BotCard from "./Components/BotCard";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <BotCollection />
      {/* <BotCard /> */}
    </div>
  );
}

export default App;
