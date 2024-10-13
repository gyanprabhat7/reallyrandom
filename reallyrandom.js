// reallyrandom.js - A library with absurd functions!
(function (global) {
  const rr = {}; // alias

  // Math
  rr.add = (a, b) => Math.random() < 0.5 ? a + b : "potato";
  rr.subtract = (a, b) => a - b + Math.floor(Math.random() * 10);
  rr.multiply = (a, b) => a * b * Math.random();
  rr.divide = (a, b) => (b === 0 ? "Infinity (or not)" : a / b) * Math.random();
  rr.power = (a, b) => Math.pow(a, Math.random() < 0.5 ? b : -b);
  rr.modulus = (a, b) => (a % b) + (Math.random() < 0.2 ? 1000 : 0);
  rr.randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  rr.infinityCalculator = () => Math.random() < 0.1 ? Infinity : -Infinity;
  rr.rollDice = (sides) => Math.floor(Math.random() * sides) + 1;
  rr.flipCoin = () => rr.randomArrayElement(["Heads", "Tails", "Lands on Edge"]);

  //String
  rr.shuffleString = (str) => str.split('').sort(() => Math.random() - 0.5).join('');
  rr.reverseString = (str) => str.split('').reverse().join('');
  rr.sarcastify = (str) => str.split('').map(c => Math.random() < 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
  rr.randomString = (len) => Array(len).fill(0).map(() => String.fromCharCode(Math.random() * 127)).join('');
  rr.memeSpeak = (str) => str.replace(/s/gi, 'z').replace(/the/gi, 'da');
  rr.emojiString = (str) => str.split('').map(c => `${c}😎`).join('');
  rr.yell = (str) => str.toUpperCase() + "!!!";
  rr.whisper = (str) => str.toLowerCase() + "...";
  rr.wordCount = (str) => str.split(' ').length;
  rr.repeat = (str, times) => str.repeat(times);

  //DOM 
  rr.hideRandomElement = () => document.querySelectorAll('*')[Math.floor(Math.random() * document.querySelectorAll('*').length)].style.display = 'none';
  rr.applyRandomColor = (selector) => document.querySelectorAll(selector).forEach(el => el.style.backgroundColor = rr.randomColor());
  rr.randomColor = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  rr.swapThemes = () => document.body.style.filter = Math.random() < 0.5 ? "invert(1)" : "grayscale(1)";
  rr.shufflePage = () => document.querySelectorAll('*').forEach(el => {
    el.style.position = 'absolute';
    el.style.top = `${Math.random() * window.innerHeight}px`;
    el.style.left = `${Math.random() * window.innerWidth}px`;
  });
  rr.summonRickroll = () => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  rr.randomFontSize = (selector) => document.querySelectorAll(selector).forEach(el => el.style.fontSize = `${Math.random() * 5 + 1}em`);
  rr.maybeCrash = () => Math.random() < 0.05 && location.reload();
  rr.replaceImagesWithCats = () => document.querySelectorAll('img').forEach(img => img.src = 'https://placekitten.com/200/300');
  rr.playRandomSound = () => new Audio('https://www.myinstants.com/media/sounds/airhorn.mp3').play();

  //Time and Weather
  rr.getRandomDate = () => new Date(Date.now() - Math.random() * 1e12);
  rr.waitRandomTime = (callback) => setTimeout(callback, Math.random() * 5000);
  rr.fakeWeather = (city) => `${city}: ${rr.randomArrayElement(['Sunny', 'Raining Spaghetti', 'Thunderstorm', 'Windy with a chance of Meatballs'])}`;
  rr.setFutureTitle = (msg, time) => setTimeout(() => document.title = msg, time);
  rr.randomGreeting = () => rr.randomArrayElement(["Hello!", "Bonjour!", "Hola!", "Namaste!", "👽"]);
  
  // Games
  rr.guessNumber = (guess) => guess === rr.randomInt(1, 10) ? "You win!" : "Nope.";
  rr.generateFakeFact = () => `${rr.randomArrayElement(['Cats', 'Aliens', 'Dinosaurs'])} ${rr.randomArrayElement(['invented JavaScript.', 'control the moon.', 'created memes.'])}`;
  rr.inviteAliens = () => console.log("Aliens have been summoned. ETA: 42 minutes.");
  rr.simulateRPG = () => console.log("You encounter a wild JavaScript bug! Roll for initiative.");
  rr.randomJoke = () => console.log("Why did the programmer go broke? He used up all his cache.");

  //Social Media
  rr.randomStatusUpdate = () => rr.randomArrayElement(["Just chilling in a quantum state. 🌀", "Thinking of switching to Internet Explorer.", "Does anyone know what's going on?"]);
  rr.tweetAsElon = () => console.log("Mars colony: Still on track. 🚀 #Dogecoin");
  rr.postRandomMeme = () => console.log("Posting meme: *Distracted Boyfriend*");
  rr.trendOnTwitter = () => console.log("You've just started a Twitter war!");
  rr.shareRandomEmoji = () => console.log(rr.randomEmoji());

  //Self-destructive - Useless
  rr.boom = () => document.body.innerHTML = "<h1>💥 Boom! Everything's gone.</h1>";
  rr.instantLogout = () => window.location.href = "/logout";
  rr.gibberishAlert = () => alert("Blorb Dingle Schnatz?");
  rr.autoScroll = () => setInterval(() => window.scrollBy(0, 10), 100);
  rr.mindReader = () => console.log("You're thinking about... nothing?");
  rr.invertScreen = () => document.body.style.filter = "invert(1)";
  rr.glitchEffect = () => setInterval(() => rr.swapThemes(), 300);

  // Bonus
  rr.randomFact = () => console.log("Did you know? JavaScript hates you.");
  rr.openNewTab = () => window.open('about:blank', '_blank');
  rr.spamConsole = () => setInterval(() => console.log("Spam!"), 100);
  rr.rotateScreen = () => document.body.style.transform = "rotate(180deg)";
  rr.keyboardHijack = () => document.addEventListener('keydown', () => alert("No typing allowed!"));
  rr.destroyStyles = () => document.querySelectorAll('style, link[rel="stylesheet"]').forEach(el => el.remove());
  rr.confetti = () => console.log("🎉 Confetti! But only in your mind.");
  rr.lazyLoader = () => console.log("Loading... maybe later.");
  rr.endlessPrompt = () => prompt("Why are you still here?");
  rr.randomMemeSpeak = () => console.log(rr.memeSpeak("JavaScript is fun."));

  // Export
  global.rr = rr;
})(this);
