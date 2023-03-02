import React, { useState, setState } from "react";

const ScoreTracker = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);

  let scores = (
    <div>
      <div>Current score: 0</div>
      <div>Best score: 0</div>
    </div>
  );

  if (props.currentScore != 0 || props.bestScore != 0) {
    scores = (
      <div>
        <p>
          Current score: <span>{props.currentScore}</span>
        </p>
        <p>
          Best score: <span>{props.bestScore}</span>
        </p>
      </div>
    );
  }

  return scores;
};

export default ScoreTracker;
