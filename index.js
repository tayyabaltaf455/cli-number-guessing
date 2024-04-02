#! /usr/bin/env node
import inquirer from "inquirer";
const guessNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    { message: "Please guess a number between 1-10", type: "number", name: "guessNumber" },
]);
if (answers.guessNumber === guessNumber) {
    console.log("Congratulation ! You select correct number.");
}
else {
    console.log("Sorry ! You select wrong number.");
}
