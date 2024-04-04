// This component controls the input and creation of elements to render player name

import { useState, useRef } from 'react';

export default function Player() {
  // useRef hook to access player name input element
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // Update enteredPlayerName State Hook with value from input element
  function handleClick() {
    setEnteredPlayerName(playerName.current.value.trim());
    playerName.current.value = '';
  }

  // Create rendering elements for player name
  // Use ref prop to access playerName native input element
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
