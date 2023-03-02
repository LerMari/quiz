import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

function MainMenu() {
    const {gameState, setGameState} = React.useContext(QuizContext);
  return (
    <div className="menu">
        <button onClick={() => {
            setGameState("quiz");
        }}>
            Begin Quiz
        </button>
    </div>
  )
}

export default MainMenu