import React, { useState, useEffect } from "react";
import "./App.css";
import Taskbar from "./Components/Taskbar";
import BotCollection from "./Components/BotCollection";

function App() {
  const [bots, setBots] = useState([]);
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <Taskbar />
      <BotCollection />
    </div>
  );
}

export default App;
