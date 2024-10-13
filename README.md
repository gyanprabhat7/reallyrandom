# reallyrandom.js - The Ultimate Chaos Library

The JavaScript library built to inject **randomness** into your projects. What's the use? There's none.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
  - [Math](#math)
  - [String](#string)
  - [DOM](#dom)
  - [Time](#time)
  - [Weather](#weather)
  - [Game](#game)
  - [Social](#social)
  - [Self-Destruct](#self-destruct)
  - [Misc](#misc)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Option 1: Download the script

```html
<script src="reallyrandom.js"></script>
```

### Option 2: CDN

```
https://cdn.jsdelivr.net/gh/gyanprabhat7/reallyrandom/reallyrandom.js
```

## Usage

Once the library is included, access all the functions using the `rr` object:

```javascript
// Roll a 6-sided die
console.log(rr.rollDice(6)); // 4 (or any random number between 1-6)

// Mess with your page layout
rr.shufflePage();

// Enjoy infinite prompts
rr.endlessPrompt();
```

## Functions

### Math

Unpredictability meets calculations.

```javascript
rr.add(5, 10); // May return 15 or "avocado"
rr.subtract(7, 3); // Outputs 4... or a random insult
rr.divide(8, 2); // 4 or a meme response
rr.infinityCalculator(); // Randomly returns Infinity or -Infinity
rr.rollDice(sides = 6); // Rolls a die with N sides (1 to 6 by default)
```

### String

Manipulate strings like a mad scientist!

```javascript
rr.shuffleString("JavaScript"); // e.g., "vSJaacript"
rr.sarcastify("Nice work"); // "NiCe WoRk"
rr.emojiString("Good Job!"); // "G😎o😎o😎d😎 J😎o😎b😎!"
rr.reverseString("Chaos"); // "soahC"
rr.memeSpeak("It just works"); // "iT jUsT wOrKS"
```

### DOM

Transform your page into chaos central.

```javascript
rr.hideRandomElement(); // Hides a random HTML element
rr.shufflePage(); // Scrambles the position of all elements
rr.replaceImagesWithCats(); // Replaces every image with a random cat pic
rr.autoScroll(); // Scrolls the page forever
rr.rotateScreen(); // Rotates the screen by 180 degrees
```

### Time

Mess with time (or at least the perception of it).

```javascript
rr.getRandomDate(); // Returns a random historical date
rr.waitRandomTime(() => console.log("Finally!")); // Delays a function randomly
rr.timeTravel(); // Pretends it's the year 3025
rr.fakeClock(); // Shows a random time on the screen
```

### Weather

Forecasts so unpredictable they might just be true.

```javascript
rr.fakeWeather("New York"); // "Snow with a chance of spaghetti."
rr.randomTemperature(); // Outputs a random temperature (-50 to 120)
rr.weatherMood(); // Generates moods based on fake weather conditions
```

### Game

Bring some fun (or frustration) to your site.

```javascript
rr.guessNumber(5); // Prompts users to guess a number between 1-10
rr.randomChoice(["Yes", "No", "Maybe"]); // Randomly selects from options
rr.generateFakeFact(); // e.g., "Bananas were invented by ducks."
rr.simulateRPG(); // "You find a treasure! Or a bug. Roll for luck."
```

### Social

Introduce some social chaos into your code.

```javascript
rr.randomStatusUpdate(); // Posts "Living the dream. 🌀" to console
rr.trendOnTwitter(); // Randomly generates a viral hashtag
rr.tweetAsElon(); // "Mars colony status: pending 🚀"
rr.fakeNotification(); // Alerts: "You've won a trip to the Moon!"
```

### Self-Destruct

Unleash your inner troll with these destructive tools.

```javascript
rr.boom(); // 💥 Deletes all content on the page
rr.instantLogout(); // Redirects users to /logout
rr.gibberishAlert(); // Alerts nonsense like "Dinglewharp!"
rr.endlessPrompt(); // Prompts the user infinitely
rr.spamConsole(); // Spams the console every 100ms
```

### Misc

Everything else that makes no sense (because why not?).

```javascript
rr.randomFact(); // "Did you know? Pigeons can code."
rr.openNewTab(); // Opens a new tab to confuse users
rr.summonRickroll(); // Plays Rick Astley's "Never Gonna Give You Up"
rr.replaceWordsWithLlama(); // Changes every word on the page to "Llama"
rr.fakeError(); // Throws random errors like "Error: Everything is broken"
```

## Contributing

Want to join the chaos? Submit pull requests with your wildest function ideas!

## License

This project is licensed under the **MIT License**. Feel free to use it—but don't blame us when your project becomes too unpredictable!

## Final Warning

This library is **not recommended for production** unless you enjoy chaotic surprises. Use it **at your own risk**! 🎭
