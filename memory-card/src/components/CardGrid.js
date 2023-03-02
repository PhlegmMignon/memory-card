import React, { useState, useEffect } from "react";
import Card from "./CardFactory";
import "../App.css";

const CardGrid = (props) => {
  //roygbv black pink brown
  const colorArray = [
    { color: "#FF0000", name: "red" },
    { color: "#FFA500", name: "orange" },
    { color: "#FFFF00", name: "yellow" },
    { color: "#00FF00", name: "green" },
    { color: "#0000FF", name: "blue" },
    { color: "#A020F0", name: "purple" },
    { color: "#000000", name: "black" },
    { color: "#FFC0CB", name: "pink" },
    { color: "#964B00", name: "brown" },
  ];

  let [positions, setPositions] = useState(
    colorArray.map((value, index) => index)
  );

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

  //   console.log(positions);

  return (
    <div id="cardGrid">
      {positions.map((position) => {
        return (
          <Card
            key={colorArray[position].name + "card"}
            color={colorArray[position].color}
            name={colorArray[position].name}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
