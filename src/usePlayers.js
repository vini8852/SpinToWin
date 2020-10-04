import { useState, useEffect } from "react";

export const usePlayers = () => {
  const defaultPlayers = [
    { name: "First person", checked: true },
    { name: "Second person", checked: true },
    { name: "Third person", checked: true },
    { name: "Fourth person", checked: true }
  ];
  const [players, setPlayers] = useState(defaultPlayers);

  useEffect(() => {
    let playersPresent = JSON.parse(localStorage.getItem("spin-to-win-players"));
    if (!playersPresent) {
      playersPresent = defaultPlayers
    }
    setPlayers(playersPresent);
  }, []);

  const persistPlayers = (players) => {
    localStorage.setItem("spin-to-win-players", JSON.stringify(players));
    setPlayers(players);
  }

  return {
    players,
    persistPlayers,
  };
};
