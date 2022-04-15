import React, { useEffect } from 'react';
import './App.css';
import GameControl from './modules/GameControl';

function App() {

  useEffect(() => {
    const gameControl = new GameControl();
    gameControl.food.change();
    setInterval(()=>{
      // console.log(gameControl.direction)
    }, 1000)
  }, [])
  
  return (
    <div>
      <div id="stage">
        <div id="snake">
          <div></div>
        </div>
        <div id="food">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div id="score-panel">
        <div>
          SCORE: <span id="score">0</span>
        </div>
        <div>
          LEVEL: <span id="level">1</span>
        </div>
      </div>
    </div>
  );
}

export default App;
