import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./components/Square";
import backgroundMusic from "/Users/learnacademy/Desktop/treasure-hunt-NikkiDunlap/src/components/monkeys-spinning-monkeys-kevin-macleod-main-version-02-05-8413.mp3";
import dogBark from "/Users/learnacademy/Desktop/treasure-hunt-NikkiDunlap/src/components/Z5QVAKY-dog.mp3";

const App = () => {
  const initialBoardState = ["❔", "❔", "❔", "❔", "❔", "❔", "❔", "❔", "❔"];
  const [board, setBoard] = useState(initialBoardState);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [audio] = useState(new Audio(backgroundMusic));
  const [barkSound] = useState(new Audio(dogBark));
  const [muted, setMuted] = useState(false);

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "🐶";
      setBoard(updateBoard);
      setTimeout(() => {
        barkSound.play(); // play dog barking sound
        alert("You Win! You Found The Dog!");
        handleResetGame();
      }, 100);
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💩";
      setBoard(updateBoard);
      setTimeout(() => {
        alert("You Lose! The Dog Is Still On The Loose!");
        handleResetGame();
      }, 100);
    } else {
      updateBoard[clickedSquare] = "🐾";
      setBoard(updateBoard);
    }
  };

  const handleResetGame = () => {
    setBoard(initialBoardState);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
  };

  const handleMute = () => {
    if (!muted) {
      audio.pause();
      barkSound.pause(); // pause dog barking sound as well
    } else {
      audio.play();
    }
    setMuted(!muted);
  };

  useEffect(() => {
    audio.volume = 1;
    audio.loop = true;
    audio.play();
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <h2
        style={{
          color: "white",
          margin: "",
        }}
      >
        🦴 Find the dog to return it to its owner 🐶
      </h2>
      <div className="board">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
              className={square === "❔" ? "bounce" : ""}
            />
          );
        })}
      </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "10px 0",
                borderRadius: "5px",
                cursor: "pointer",
                fontFamily: "Bebas Neue",
                fontSize: "2.2rem"

              }}
              onClick={handleResetGame}
            >
              Reset Game
            </button>
          </div>
        </>
        
      );
    };
    
export default App;




