import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, enlistedBots, onEnlist, onDischarge }) => {
  return (
    <div className="bot-collection">
      <h2 className="collection-title">Available Bots</h2>
      <div className="grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onEnlist={onEnlist}
            onDischarge={onDischarge}
            isEnlisted={enlistedBots((enlisted) => enlisted.id === bot.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default BotCollection;
