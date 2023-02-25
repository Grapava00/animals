import React, { useState } from "react";
import "bulma/css/bulma.css";
import { v4 as uuidv4 } from "uuid";
import AnimalShow from "./AnimalShow";

function randomAnimal() {
  const animalsArr = ["Cow", "Cat", "Dog", "Pig", "Chik"];

  return animalsArr[Math.floor(Math.random() * animalsArr.length)];
}

function App() {
  const [animals, setAnimal] = useState([]);

  function handleClick() {
    setAnimal([...animals, randomAnimal()]);
  }

  const renderedAnimals = animals.map((animal) => {
    return <AnimalShow type={animal} key={uuidv4()} />;
  });

  return (
    <div>
      <button
        onClick={handleClick}
        className='button is-primary is-outlined m-3'
      >
        Add Animal
      </button>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {renderedAnimals}
      </div>
    </div>
  );
}

export default App;
