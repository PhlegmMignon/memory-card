import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      props.addPoint();
      setClicked(true);
    } else {
      props.endGame();
    }

    props.shuffle();
  };

  useEffect(() => {
    if (props.reset) {
      setClicked(false);
    }
  }, [props.reset]);

  return (
    <div
      className="cards"
      onClick={handleClick}
      style={{ backgroundColor: props.color }}
    >
      {props.name}
    </div>
  );
};

export default Card;
