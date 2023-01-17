/* how to gen random item:
  get number of indexes in choices array
  generate random index within that number of choices (0-2, because 
  indexes start from 0)
  print that randomly generated index
  */
const choices = ['rock', 'paper', 'scissors'] ;

/* 
    interesting idea: use numbers instead of if conditionals to get the result

    lets say (corresponding to their indexes):

    rock = 0
    paper = 1
    scissors = 2 

    Player 1: 0, 1, 2, (rock, paper, scissors)
    Player 2: 0, 1, 2 -> x3 -> 0, 3, 6 (rock, paper, scissors)
    Each sum now gives an unique digit as a result
    
    rock v rock = 0 + 0
    rock v paper = 0 + 3, result = 3 

*/

function getComputerChoice() {
    
    let randomIndex = Math.floor((Math.random() * 3));
    /*  Math.random returns a number up to choicesLength (3) by multiplying it by 3
        E.g. if rando float is 0.4, * 3 = 1.2
        1.2 + 1 = 2.2, rounded down using math.floor() is 2
        result would be scissors
        Math.floor makes that number round DOWN to the closest whole number

        hang on ->

        original code: let randomIndex = Math.floor((Math.random() * choices.length) + 1)
        threw an error, break it down

        (math.random * 3) + 1

        random index should be a whole number between 0-2 because indexes start at 0

        math.random() * 3: -- initial result will be a decimal number between 0 - 1
        -- times the decimal number by 3 because there are 3 options 
         - if less than 1, it will be rounded down to 0 (rock)
         - if less than 2 but more than 1, it will be rounded down to 1 (paper)
         - if less than 3 but more than 2, it will be rounded down to 2 (scissors)

        first case scenario for getting rock: *********

        valid range: ~0.01 to ~0.33

        lets say a random gen number is 0.2 -> times it by 3 to get 0.6 -> 
        math.floor rounds it down to 0 and get rock (index = 0)

        second case scenario for getting paper: *********

        valid range: ~0.3 to ~0.6 

        lets say a random gen number is 0.5 -> times it by 3 to make 1.5 ->
        math.floor would round it down to 1 and get paper (index = 1)

        third case scenario for getting scissors: *******

        valid range: ~0.64 to ~0.99

        lets say another random gen number is 0.9 -> times it by 3 to make 2.7 ->
        math.floor would round it down to 2 and get scissors (index = 2)


        give or take, the chances of either rock paper or scissors are relatively even (~0.3)
    */
    
    let choice = choices[randomIndex] ;

    // variable choice is a random item of a random index from the   array "choices"
    
    return choice.toLowerCase(); // second thought, the .toLowerCase() is unnecessary 
// since the items in the array for the computer to choose from are already lower case lol
    
  }
  

  
function playerChoice() {
    const promptAnswer = window.prompt("Enter your choice (rock, paper, scissors): ") // window is LOWERCASE
    return promptAnswer.toLowerCase(); // the "value" of the function when called elsewhere
    // don't forget the () after toLowerCase
    // original (faulty) code: promptAnswer.toLowerCase(); return promptAnswer;
    // this isn't good because it results in an extra variable needing to be created, causing
    // extra bloat
    
}








function playRound() {
    
    // store the returned player selection in a variable so that the 
    // playerChoice() function doesn't run again because it opens a prompt
    // getComputerChoice(); playerChoice(); og code, but it repeats those functions
    // twice because the function is still mentioned. the below is enough to invoke it once

    let computerChoiceVariable = getComputerChoice();
    let playerSelectionVariable = playerChoice();
    // print out the choices, computer and player
    console.log(`You chose ${playerSelectionVariable}`) // call the function, not the promptAnswer variable :facepalm: lol
    
    console.log(`The computer chose ${computerChoiceVariable}`)

    
    if (playerSelectionVariable === 'rock' && computerChoiceVariable === 'scissors') {
        return `You win! ${playerSelectionVariable} beats ${computerChoiceVariable}`
        // if the player wins ^^
    } else if (playerSelectionVariable === 'scissors' && computerChoiceVariable === 'rock'){
        return `You lose! ${computerChoiceVariable} beats ${playerSelectionVariable}`
        // if the player loses ^^
    } else if (playerSelectionVariable === computerChoiceVariable) {
        return `It's a tie! ${computerChoiceVariable} and ${playerSelectionVariable} don't do anything to each other`
    } else if (playerSelectionVariable === 'paper' && computerChoiceVariable === 'rock') {
        return `You win! ${playerSelectionVariable} beats ${computerChoiceVariable}`
    } else if (playerSelectionVariable === 'rock' && computerChoiceVariable === 'paper') {
        return `You lose! ${computerChoiceVariable} beats ${playerSelectionVariable}`
    } else if (playerSelectionVariable === 'paper' && computerChoiceVariable === 'scissors') {
        return `You lose! ${computerChoiceVariable} beats ${playerSelectionVariable}`
    } else if (playerSelectionVariable === 'scissors' && computerChoiceVariable === 'paper') {
        return `You win! ${playerSelectionVariable} beats ${computerChoiceVariable}`
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) { // syntax for for loop: create a variable, add a condition for running, code to run at the end of the loop
        console.log(playRound())
    }
}

playGame()
// 