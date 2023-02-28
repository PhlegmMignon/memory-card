import "./App.css";
import React, { useState, setState } from "react";
import ScoreTracker from "./components/ScoreTracker";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className="App">
      <div className="title">Memory game</div>
      <ScoreTracker />
    </div>
  );
}

export default App;
