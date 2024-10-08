let randomWordArray = ["pizza","burrito","pasta","burger","soup","sandwich"];

function getWord() {
  return randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
}

let curWord = getWord();

let split_word = curWord.split("");
console.log(split_word);

let wordLength = split_word.length;

let hiddenWord = "";
  
for(var i = 0; i < curWord.length; i++)
  {
    hiddenWord = "_" + hiddenWord;
  }

const submit = document.querySelector("button");
const input = document.querySelector("input");

function findLetters(letter, wrd) {
  let instances = [];
  
  for(let i = 0; i < wrd.length; i++) {
    if(wrd[i] == letter) {
      instances.push(i);
    }
  }
  return instances;
}

console.log(findLetters("a", "aba"));

function replaceLetter(indices, letter, wrd){
  let output = wrd.split("");

  for(let i = 0; i < indices.length; i++) {
    output[indices[i]] = letter;
  }

  return output.join("");
}

console.log(replaceLetter([0,2], "a", "___"));

let guessedLetters = [];
let alreadyGuessed = document.querySelector(".guessedLetters");
let amountDiv = document.querySelector(".amountGuessed");

let displayedWord = document.querySelector(".word");
displayedWord.innerHTML = hiddenWord;

input.addEventListener("input", () => {

  let guess = input.value;
  
  hiddenWord = replaceLetter(findLetters(guess, curWord), guess, hiddenWord);

  displayedWord.innerHTML = hiddenWord;

  guessedLetters.push(guess);
  
  alreadyGuessed.innerHTML = `Guessed Letters: ${guessedLetters}`;
  let amountGuessed = guessedLetters.length;
  amountDiv.innerHTML = `Amount Guessed: ${amountGuessed}`;

  input.value = "";
})

let test = "hello";
console.log(test[3]);

