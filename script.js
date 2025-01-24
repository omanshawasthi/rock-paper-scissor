const readline = require('readline');

// Function to decide the winner of a round
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "human"; // Human wins the round
    } else if (
        (computerChoice === "scissor" && humanChoice === "paper") ||
        (computerChoice === "rock" && humanChoice === "scissor") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        return "computer"; // Computer wins the round
    } else {
        return "tie"; // It's a tie
    }
}

let humanScore = 0;
let computerScore = 0;

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to play the game for 5 rounds
function playGame(round) {
    if (round > 5) {
        // Game ends after 5 rounds
        console.log("Game Over!");
        if (humanScore > computerScore) {
            console.log("Congratulations! You win the game!");
        } else if (computerScore > humanScore) {
            console.log("Computer wins the game. Better luck next time!");
        } else {
            console.log("It's a tie game!");
        }
        rl.close();
        return;
    }

    console.log(`Round ${round}`);

    // Get human choice
    rl.question("Enter your choice (rock, paper, or scissor): ", (humanChoice) => {
        humanChoice = humanChoice.toLowerCase();

        // Validate human input
        if (!["rock", "paper", "scissor"].includes(humanChoice)) {
            console.log("Invalid choice! Please enter 'rock', 'paper', or 'scissor'.");
            playGame(round);  // Restart the round if input is invalid
            return;
        }

        // Randomly generate computer choice
        const choices = ["rock", "paper", "scissor"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        // Play the round
        const winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            console.log("You win this round!");
            humanScore++;
        } else if (winner === "computer") {
            console.log("Computer wins this round!");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }

        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}\n`);

        // Call the function recursively for the next round
        playGame(round + 1);
    });
}

// Start the game
playGame(1);

