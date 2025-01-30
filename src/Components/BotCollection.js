import React, { useState, useEffect } from "react";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        setBots(data || []); // Ensure bots is always an array
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <p>{bot.health}</p>
          <p>{bot.damage}</p>
          <p>{bot.armor}</p>
          <p>{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
