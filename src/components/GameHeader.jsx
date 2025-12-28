import React from 'react'

const GameHeader = ({ score, moves, onReset, timeElapsed }) => {
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2,"0");
  }  
  return (
    <div className='game-header'>
        <h1>🎮Memory Card Game</h1>
        <div className='timer'>
            <span className='stat-label'>Time Elapsed:</span>
            <span className='stat-value'>{formatTime(timeElapsed)}</span>
        </div>
        <div className="stats">
            <div className='stat-item'>
                <span className='stat-label'>Score:</span>{" "}
                <span className='stat-value'>{score}</span>
            </div>
            <div className="stat-item">
                <span className='stat-label'>Moves:</span>{" "}
                <span className='stat-value'>{moves}</span>
            </div>
        </div>
        <button className="reset-btn" onClick={onReset}>New Game</button>
    </div>
  )
}

export default GameHeader