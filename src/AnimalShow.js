import React, { useState } from "react";
import Cat from "./assets/cat.png";
import Dog from "./assets/dog.png";
import Cow from "./assets/cow.png";
import Pig from "./assets/pig.png";
import Chik from "./assets/chik.png";
import Heart from "./assets/heart.png";

const AnimalsObj = {
  Cat,
  Dog,
  Cow,
  Pig,
  Chik,
};

function AnimalShow({ type }) {
  const [size, setSize] = useState(0);
  function handleSize() {
    if (size === 0) {
      setSize(size + 1);
    } else {
      setSize(0);
    }
  }

  return (
    <div onClick={handleSize} style={{ position: "relative" }}>
      <img style={{ width: "50px" }} src={AnimalsObj[type]} alt='animal' />
      <img
        style={{
          width: 10 + 10 * size + "px",
          position: "absolute",
          left: "20px",
          bottom: "10px",
        }}
        src={Heart}
        alt='heart'
      />
    </div>
  );
}

export default AnimalShow;
