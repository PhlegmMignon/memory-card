import "./App.css";
import React, { useState } from "react";
import ScoreTracker from "./components/ScoreTracker";
import Card from "./components/CardFactory";
import CardGrid from "./components/CardGrid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);

  const addPoint = () => {
    setCurrentScore(currentScore + 1);

    if (currentScore > bestScore) {
      setBestScore(currentScore + 1);
    }
    setReset(false);
  };

  const endGame = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }

    setCurrentScore(0);
    setReset(true);
  };

  //useeffect whenever position changes, rerender page [positions]

  return (
    <div className="App">
      <div className="title">Memory game</div>

      <ScoreTracker currentScore={currentScore} bestScore={bestScore} />
      <CardGrid reset={reset} addPoint={addPoint} endGame={endGame} />
    </div>
  );
}

export default App;
