import "./App.css";
import React, { useState, setState } from "react";
import ScoreTracker from "./components/ScoreTracker";
import Card from "./components/CardFactory";
import CardGrid from "./components/CardGrid";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);

  let scores = (
    <div>
      <div>Current score: 0</div>
      <div>Best score: 0</div>
    </div>
  );

  if (currentScore != 0 || bestScore != 0) {
    scores = (
      <div>
        <p>
          Current score: <span>{currentScore}</span>
        </p>
        <p>
          Best score: <span>{bestScore}</span>
        </p>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="title">Memory game</div>

      <ScoreTracker />
      <CardGrid />
    </div>
  );
}

export default App;
