/**
  * Wordle on your browser console.
  * This program is a small game where you'll have to guess a 5 letter word and you'll have 5 chances to do so. After every chance, you get a hint on whether your answer
  * is right or wrong. Green means the letter is placed in right position. Yellow means the letter is present in the word but in wrong position. Black means the letter is
  * not present in the word.
  *
  * NOTE: Paste this code in an online compiler or your browser's console and test it, as prompts doesn't work in local node environment.
*/

/**
 * An array containing words which are possible results in this game
 * */
const wordleWords = ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel"]

/** 
 * Returns a random number between two ranges.
 * @param {number} min: Minimum value of the number.
 * @param {number} max: Maximum value of the number.
 * @returns A random number between min and max range.
*/
const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Variable which holds the value a random word from the wordleWords array.
 */
const randomWord = wordleWords[randomNumberGenerator(0, wordleWords.length)];

// console.log(randomWord); //Uncomment this line to get the answer for the game even before you start with your guesses
let result = [];
let chances = 5;

/**
 * Function which returns the accuracy of guess made by the user.
 * NOTE:
 * Green color represents that the letter is present in the word and is placed in proper position.
 * Yellow color represents that the letter is present in the word but it isn't placed in proper position. A word can have same letter multiple times, and this function handles that case.
 * Black color represents that the letter is not present in the word.
 * @param {string} guess: Current guess made by the user 
 * @returns Color coded emojis which represents the accuracy of guess made by the user.
 */
const checkGuess = (guess) => {
  let tempWord = randomWord;
  if (guess === randomWord) {
    return "🟢🟢🟢🟢🟢";
  } else {
    let res = ["", "", "", "", ""];
    for (let i = 0; i < randomWord.length; i++) {
      if (guess[i].toLowerCase() == tempWord[i]) {
        res[i] = "🟢";
        tempWord = tempWord.split("");
        tempWord[i] = "_";
        tempWord = tempWord.join("");
      } else {
        res[i] = "D";
      }
    }
    for (let i = 0; i < randomWord.length; i++) {
      if (res[i] == "D") {
        if (tempWord.includes(guess[i].toLowerCase())) {
          tempWord = tempWord.split("");
          tempWord[tempWord.indexOf(guess[i].toLowerCase())] = "_";
          tempWord = tempWord.join("");
          res[i] = "🟡";
        } else {
          res[i] = "⚫";
        }
      }
    }
    res = res.join("");
    return res;
  }
};

for (let i = 0; i < chances; i++) {
  const word = prompt("Enter a 5 letter word: ");
  if (word.length != 5) {
    console.log("Please enter a 5 letter word");
    chances++;
  } else {
    let ans = checkGuess(word);
    result.push(ans);
    if (ans == "🟢🟢🟢🟢🟢") {
      console.log("You got the word right!");
      break;
    } else {
      console.log(ans);
      console.log("You got it wrong. You have " + (chances - i - 1) + " chances remaining");
    }
  }
}

console.log("Game over! Here is your results:");
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
