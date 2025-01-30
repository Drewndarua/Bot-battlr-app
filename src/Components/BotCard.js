import React from "react";

const BotCard = ({ bot }) => {
  const { name, avatar_url, bot_class, health, damage, armor, catchphrase } =
    bot;
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class:{bot_class}</p>
      <p>Health:{health}</p>
      <p>Damage:{damage}</p>
      <p>Armor:{armor}</p>
      <p>Catchphrase:{catchphrase}</p>
    </div>
  );
};

export default BotCard;
