let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

function playRound(humanChoice) {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        result = `It's a tie! You both chose ${humanChoice}`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    resultsDiv.innerHTML = `Result: ${result}<br>Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You" : "Computer";
        resultsDiv.innerHTML += `<br>${winner} won the game!`;
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll(".button").forEach((button) => (button.disabled = true));
}

document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", () => playRound(button.textContent.toLowerCase()))
);



// function playRound(humanChoice, computerChoice) {
//     if (
//         (humanChoice === "scissor" && computerChoice === "paper") ||
//         (humanChoice === "rock" && computerChoice === "scissor") ||
//         (humanChoice === "paper" && computerChoice === "rock")
//     ) {
//         return "human"; // Human wins the round
//     } else if (
//         (computerChoice === "scissor" && humanChoice === "paper") ||
//         (computerChoice === "rock" && humanChoice === "scissor") ||
//         (computerChoice === "paper" && humanChoice === "rock")
//     ) {
//         return "computer"; // Computer wins the round
//     } else {
//         return "tie"; // It's a tie
//     }
// }

// let humanScore = 0;
// let computerScore = 0;

// for (let i = 1; i <= 5; i++) {
//     console.log(`Round ${i}`);
    
//     // Get human choice (replace with prompt in browsers)
//     const humanChoice = prompt("Enter your choice (rock, paper, or scissor):").toLowerCase();

//     // Randomly generate computer choice
//     const choices = ["rock", "paper", "scissor"];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//     console.log(`You chose: ${humanChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     // Play the round
//     const winner = playRound(humanChoice, computerChoice);

//     if (winner === "human") {
//         console.log("You win this round!");
//         humanScore++;
//     } else if (winner === "computer") {
//         console.log("Computer wins this round!");
//         computerScore++;
//     } else {
//         console.log("It's a tie!");
//     }

//     console.log(`Score: You - ${humanScore}, Computer - ${computerScore}\n`);
// }

// // Determine the overall winner
// if (humanScore > computerScore) {
//     console.log("Congratulations! You win the game!");
// } else if (computerScore > humanScore) {
//     console.log("Computer wins the game. Better luck next time!");
// } else {
//     console.log("It's an overall tie!");
// }