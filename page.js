const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuessInput").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById("message"), textContent =
            "Please enter a valid number between 1 and 10.";
    } else {
        if (userGuess === randomNumber) {
            document.getElementById("message").textContent =
                "Congratulations! You guessed the correct number!";
        } else {
            document.getElementById("message").textContent =
                "Sorry, wrong guess. Try again!";
        }
    }
}


// var toy = "ball";

// function sayHello() {
//     console.log("Hello, friends!")
// }

// sayHello();

// if (isRaining) {
//     console.log("It's raining! Stay inside!");
// } else {
//     console.log("It's not raining! Go outside!")
// }

// alert("Do not click!!!")
// var name = prompt("Enter your name: ")
