import React from "react"

const Square = ({ square, index, handleGamePlay }) => {
  return (
    <div className="square" onClick={() => handleGamePlay(index)}>
      <span className={square === '❔' ? 'bounce' : ''}>{square}</span>
    </div>
  )
}
export default Square
