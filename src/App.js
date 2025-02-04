import { useState, useEffect } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bots")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        setBots(data || []);
      });
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const onRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = async (bot) => {
    try {
      await fetch(`/bots/${bot.id}`, { method: "DELETE" });
      setBots(bots.filter((b) => b.id !== bot.id));
      setArmy(bots.filter((b) => b.id !== bot.id));
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Bot Army</h1>
        </div>
      </header>
      <main className="main-content">
        <YourBotArmy
          army={army}
          onRelease={onRelease}
          dischargeBot={handleDischarge}
        />
        <BotCollection
          bots={bots}
          enlistedBots={army}
          onEnlist={handleEnlist}
          onDischarge={handleDischarge}
        />
      </main>
    </div>
  );
}

export default App;
