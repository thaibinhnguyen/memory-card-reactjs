import { useEffect, useState } from "react"

export const useGameLogic = (cardValues) => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [isBusy, setIsBusy] = useState(false)
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0)

  const shuffleArray = (array) => {
    const shuffled = [...array]
    for(let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const initializeGame = () => {

    const shuffled = shuffleArray(cardValues);

    const finalCards = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false
    }))
    setCards(finalCards);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
    setIsPlaying(false);
    setTimeElapsed(0);
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if(isPlaying) {
        const myTimeInterval = setInterval(() => {
            setTimeElapsed((prev) => prev + 1)
        }, 1000)
        return () => {
            clearInterval(myTimeInterval)
        }
    } else {
        return;
    }
  }, [isPlaying])

  useEffect(() => {
    if(matchedCards.length === cards.length) {
        setIsPlaying(false)
    }
  }, [matchedCards, cards])


  const handleCardClicked = (card) => {
    if (isBusy || card.isFlipped || card.isMatched) {
      return;
    }

    if(!isPlaying) {
        setIsPlaying(true);
    }

    // Flip the clicked card
    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlipped = [...flippedCards, card.id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [firstId, secondId] = newFlipped;
      const firstCard = newCards.find((c) => c.id === firstId);
      const secondCard = newCards.find((c) => c.id === secondId);

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        // Match: mark both as matched and keep them flipped
        setCards((prev) =>
          prev.map((c) =>
            c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c
          )
        );
        setScore((prev) => prev + 1)
        setMatchedCards((prev) => [...prev, firstId, secondId]);
        setFlippedCards([]);
      } else {
        // Mismatch: briefly show both, then flip back
        setIsBusy(true);
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
          setIsBusy(false);
        }, 800);
      }
      setMoves((prev) => prev + 1)
    }
  }

  const isGameComplete = matchedCards.length === cards.length
  return {cards, score, moves, isGameComplete, isPlaying, timeElapsed, handleCardClicked, initializeGame}
}