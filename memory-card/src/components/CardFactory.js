import React, { setState, useState } from "react";

const Card = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      //Score++
    } else {
      //End stage and reset
    }
  };

  return (
    <div className="cards" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
};

export default Card;
