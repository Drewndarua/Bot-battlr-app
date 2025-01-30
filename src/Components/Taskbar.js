import React, { useState } from "react";

const Taskbar = () => {
  const [search, setSearch] = useState("");
  return (
    <header>
      <div className="Links">
        <h1>Bot Battlr App</h1>
        <a href="/#">My army</a>
      </div>
      <div className="Searchbar">
        <input
          type="text"
          placeholder="Type here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Taskbar;
