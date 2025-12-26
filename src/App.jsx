import Card from "./components/Card";
import GameHeader from "./components/GameHeader"
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const cardValues = [
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍓",
    "🥝",
    "🍑",
    "🍒",
    "🍎",
    "🍌",
    "🍇",
    "🍊",
    "🍓",
    "🥝",
    "🍑",
    "🍒",
  ];
  const {cards, score, moves, isGameComplete, handleCardClicked, initializeGame} = useGameLogic(cardValues);
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} onClick={handleCardClicked} />
        ))}
      </div>
    </div>
  )
}

export default App
