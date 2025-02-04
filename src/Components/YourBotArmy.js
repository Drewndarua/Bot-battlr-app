import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ enlistedBots = [], onRelease, onDischarge }) {
  if (enlistedBots.length === 0) {
    return (
      <div className="bot-army">
        <h2 className="army-title">Your Bot Army</h2>
        <p className="empty-army-message">
          No bots enlisted yet. Click on a bot to add it to your army
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="army-grid">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="army-bot">
            <BotCard
              bot={bot}
              onRelease={onRelease}
              onDischarge={onDischarge}
              isEnlisted={true}
            />
            <button
              className="remove-button"
              onClick={() => onRelease(bot)}
              title="Remove from Army">
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
