const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
    // We want to run the game loop at least once, so a do...while loop works well here
    do {
      this.prevGuesses.push(this.getGuess());
      this.resetRange();
      this.render();
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
  },
  getGuess: function () {
    let guess;

    while (
      isNaN(guess) ||
      guess < this.smallestNum ||
      guess > this.biggestNum
    ) {
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
        )
      );
    }
    return guess;
  },
  resetRange: function () {
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
    } else {
      this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
    }
  },
  render: function () {
    let msg;

    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${
        this.prevGuesses.length > 1 ? "guesses" : "guess"
      }!`;
    } else {
      msg = `Your guess is too ${
        this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum
          ? "high"
          : "low"
      }\nPrevious guesses: ${this.prevGuesses.join(", ")}`;
    }

    alert(msg);
  },
};

game.play();
