import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const initialBoardState = ["❔", "❔", "❔", "❔", "❔", "❔", "❔", "❔", "❔"];
  const [board, setBoard] = useState(initialBoardState);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board];
    if (clickedSquare === treasureLocation) {
      updateBoard[clickedSquare] = "🐶";
      setBoard(updateBoard);
      setTimeout(() => {
        alert("You Win! You Found The Dog!")
        handleResetGame()
      }, 100)
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💩";
      setBoard(updateBoard);
      setTimeout(() => {
        alert("You Lose! The Dog Is Still On The Loose!")
        handleResetGame()
      }, 100)
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

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <h2 style={{
        color: "white",
        margin: ""
      }}
      >🦴 Find the dog to return it to its owner 🐶
      </h2>
      <div className="board">
        {board.map((square, index) => {
          return (
            <Square
              square={square}
              index={index}
              key={index}
              handleGamePlay={handleGamePlay}
              className={square === '❔' ? 'bounce' : ''}
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
    
    export default App



