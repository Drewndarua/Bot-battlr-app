import React from "react";

const BotCard = ({ bot, onEnlist, onRelease, onDischarge, isEnlisted }) => {
  const handleClick = () => {
    if (isEnlisted && onRelease) {
      onRelease(bot);
    } else if (onEnlist) {
      onEnlist(bot);
    }
  };

  return (
    <div className="bot-card" onClick={handleClick}>
      {onDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot.id);
          }}
          className="discharge-button"></button>
      )}

      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />

      <h3 className="bot-name">{bot.name}</h3>
      <p className="bot-catchphrase">{bot.catchphrase}</p>

      <div className="bot-stats">
        <div className="stat">
          <span>{bot.health}</span>
        </div>
      </div>
      <div className="bot-stats">
        <div className="stat">
          <span>{bot.damage}</span>
        </div>
      </div>
      <div className="bot-stats">
        <div className="stat">
          <span>{bot.armor}</span>
        </div>
      </div>

      <div className="bot-class">
        <span className="class-tag">{bot.bot_class}</span>
      </div>
    </div>
  );
};

export default BotCard;
