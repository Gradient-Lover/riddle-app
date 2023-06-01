import { useState } from "react";
import "./App.css";

export default function App() {
  const [riddle, setRiddle] = useState({ question: "", answer: "" });

  const getRiddles = async () => {
    let data = await fetch("https://api.api-ninjas.com/v1/riddles");
    let convertedData = await data.json();
    console.log(convertedData);
    setRiddle(convertedData[0]);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Your riddle will appear here:</h1>
        <button onClick={getRiddles} className="riddlebutton">
          Click here to get riddle
        </button>
        <h3>{riddle.question}</h3>
        <h1 className="arrow"> ⬇ </h1>
        <h3 className="correct-answer">{riddle.answer}</h3>
      </div>
    </div>
  );
}
