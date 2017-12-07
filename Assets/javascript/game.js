
var disneyWords = [
    "Walt",
    "Mickey",
    "Dumbo",
    "Vanellope",
    "ToyStory",
    "LostBoys",
    "Aristocats"
]

var word = disneyWords[Math.floor(Math.random() * word.length)];

var answerArray = [];

for (var i = 0; i < word.length; i++) {

  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {

  alert(answerArray.join(""));

}

var guess = prompt("Press any letter to Start!");

if (guess === null) {

}

else if (guess.length !== 1) {

  alert("Please enter a single letter.");

}

else {
  for (var j = 0; j < word.length; j++) {

    if (word[j] === guess) {

        answerArray[j] = guess;

        remainingLetters--;

    }
  }
}

alert(answerArray.join(" "));

alert("Good job! The answer was " + word);
