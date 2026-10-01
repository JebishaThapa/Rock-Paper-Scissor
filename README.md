Rock Paper Scissors

A simple browser-based Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript.

Features
Play Rock, Paper, or Scissors against the computer
Computer picks randomly
Live score tracking (Won / Lost / Draw)
Retry to keep playing, or Exit to see a final summary
Clean, dark-themed UI
How It Works

The game uses three screens, all hidden/shown with JavaScript:

Weapon Select Screen — Choose Rock, Paper, or Scissors. Score is visible here.
Result Screen — Shows your choice, the computer's choice, and whether you won, lost, or drew. Options to Retry or Exit.
Game Over Screen — Appears after Exit, showing final Won/Lost/Draw totals.
Game Flow
Player clicks a weapon button
Computer picks a random weapon
Choices are compared to determine the result
Score updates immediately
Result screen appears with the outcome
Retry returns to the weapon select screen (score carries over)
Exit shows the final score and ends the game
Tech Used
HTML — page structure, three screens
CSS — Flexbox layout, dark theme, hover effects
JavaScript — Math.random(), event listeners, DOM manipulation, conditional logic
Concepts Practiced
addEventListener with event.target
Comparing values with if / else
Showing/hiding elements with style.display
Tracking state with variables
Updating the DOM dynamically with textContent
Project Status

Built as a learning project to practice core JavaScript fundamentals: events, conditionals, randomness, and DOM manipulation.
