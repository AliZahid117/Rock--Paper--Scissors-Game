console.log("hi");

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" ||
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        console.log("Error! Please choose either rock, paper, or scissors.");
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
    if (userChoice === "bomb") {
        return "You win!";
    }
}

/*const userChoice = getUserChoice("rock");
const computerChoice = getComputerChoice();
console.log("Player: " + userChoice);
console.log("Computer: " + computerChoice);
console.log(determineWinner(userChoice, computerChoice));*/

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();




