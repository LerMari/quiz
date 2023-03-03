import React, {useState, useContext} from 'react';
import './App.css';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';


function App() {
  const [gameState, setGameState] = React.useState("menu");
  const [score, setScore] = React.useState(0);


  return (
    <div className="App">
      <h1>Hello</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
