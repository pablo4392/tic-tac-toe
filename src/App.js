import './App.css';
import Game from "./components/Game";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <h1 className="principal-title">
        <FontAwesomeIcon icon={faSlackHash} className="title-icon" />
        Tic Tac Toe
      </h1>
      <Game />
    </div>
  );
}

export default App;
