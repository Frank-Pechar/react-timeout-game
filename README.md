# Timeout Game
## React Project

## Description of App Functionality, Features, and Methods

React project I completed from Udemy: React - The Complete Guide 2023 (incl. React Router & Redux) by Maximilian Schwarzmuller. I added comments for educational purposes.

App can be run from: https://frank-pechar-react-timeout-game.netlify.app/

## App Description

This App is a Timeout Guessing Game

## App Functionality

Add Player Name
  - Enter Name in Set Name Input Field
  - Click &lt;Set Name&gt; Button

Play a Game
  - Click &lt;Start Challenge&gt; Button next to game time
  - Guess timer up by waiting a specific amount of time
  - Click &lt;Stop Challenge&gt; Button
  - A score will be displayed
  - Click &lt;Close&gt; Button

## React Features and Methods Used

- Usage of Refs as element pointers
- Usage of Refs as persistent instance variables
- Forwarding Refs to other components
- Implemented useImperativeHandle to allow access to child (ResultModal) function within parent (TimerChallenge) to open modal
- Use of Portal to render modal into DOM
- Implemented useState hook 
- Use of state update function parameter within Set State Function to ensure most current state
- Passing props data 
- Maintaining minimum state management
- Dynamic styling
- Basic event handling
