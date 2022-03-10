var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "What was Pixar's first 3D animated movie?",
    o : [
      "Shrek",
      "Toy Story",
      "Monster's Inc",
      "Finding Nemo"
    ],
    a : 1 // arrays start with 0, so answer is Toy Story
  },
  {
    q : "How many Pokemon generations are there so far? (announced included)",
    o : [
      "7",
      "8",
      "6",
      "9"
    ],
    a : 3
  },
  {
    q : "What was the first movie involved in the Marvel Cinematic Universe?",
    o : [
      "Iron Man",
      "Thor",
      "Incredible Hulk",
      "Captain America: The First Avenger"
    ],
    a : 2
  },
  {
    q : "Which of these companies no longer makes game consoles?",
    o : [
      "SEGA",
      "Sony",
      "Microsoft",
      "Nintendo"
    ],
    a : 0
  },
  {
    q : "What Youtube channel uploaded a video every day, then was deleted after a year?",
    o : [
      "Dangerous Accidents",
      "LazeeReacts",
      "Remember Death",
      "Unus Annus"
    ],
    a : 3
  },
  {
    q : "What Linkin Park song was written for the second Michael Bay Transformers movie?",
    o : [
      "In The End",
      "Breaking The Habit",
      "New Divide",
      "What I've Done"
    ],
    a : 2
  },
  {
    q : "Who is the creator and director of the Super Smash Brothers franchise?",
    o : [
      "Akira Toriyama",
      "Shigeru Miyamoto",
      "Satoru Iwata",
      "Masahiro Sakurai"
    ],
    a : 3
  },
  {
    q : "The iconic Creeper monster in Minecraft was made after a failed attempt at what animal?",
    o : [
      "Pig",
      "Cow",
      "Sheep",
      "Chicken"
    ],
    a : 0
  },
  {
    q : "What year was the first Star Wars movie released?",
    o : [
      "1983",
      "1980",
      "1977",
      "1973"
    ],
    a : 2
  },
  {
    q : "Who is the author of the book Ready Player One?",
    o : [
      "S.J. Kincaid",
      "Ernest Cline",
      "Johnathan Carr",
      "Dr. Seus"
    ],
    a : 1
  },
  {
    q : "What was the first pokemon ever designed?",
    o : [
      "Pikachu",
      "Bulbasaur",
      "Rhydon",
      "Mew"
    ],
    a : 2
  },
  {
    q : "What creature in Dungeons and Dragons has a large eye along with many small eyes on tendrils?",
    o : [
      "Beholder",
      "Mind-Flayer",
      "Roper",
      "Otyguh"
    ],
    a : 0
  },
  {
    q : "What news company does Superman work for?",
    o : [
      "The Daily Bugle",
      "The Daily Beast",
      "The Quahog Informant",
      "The Daily Planet"
    ],
    a : 3
  },
  {
    q : "How many years has it been since Valve gave Team Fortress 2 a major update?",
    o : [
      "One Year",
      "Four Years",
      "Two Years",
      "Three Years"
    ],
    a : 1
  },
  {
    q : "Which of these games won Best Action in 2020",
    o : [
      "DOOM Eternal",
      "Half-Life: Alyx",
      "Hades",
      "Nioh 2"
    ],
    a : 2
  },
  {
    q : "What game released along with DOOM Eternal on 03/20/2020? ",
    o : [
      "Animal Crossing: New Horizons",
      "Ori and the Will of the Wisp",
      "Cyberpunk 2077",
      "Final Fantasy VII Remake"
    ],
    a : 0
  },
  {
    q : "How many years did it take for Incredibles to get a sequel?",
    o : [
      "6",
      "11",
      "7",
      "14"
    ],
    a : 3
  },
  {
    q : "Which of these characters has no limbs?",
    o : [
      "Crash Bandicoot",
      "Rayman",
      "Bomberman",
      "Sly Cooper"
    ],
    a : 1
  },
  {
    q : "Who conducted the music in DOOM(2016) and DOOM Eternal?",
    o : [
      "Darren Korb",
      "Mick Gordon",
      "Kristofer Maddigan",
      "Matthias Bossi"
    ],
    a : 1
  },
  {
    q : "Which character starring in Skylanders was originally made by Insomniac Games?",
    o : [
      "Trigger Happy",
      "Crash Bandicoot",
      "Bowser",
      "Spyro The Dragon"
    ],
    a : 3
  },
  {
    q : "How many video game based questions were in this quiz?",
    o : [
      "11",
      "7",
      "21",
      "14"
    ],
    a : 0
  }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapperS
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => { quiz.select(label); });
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: (option) => {
    // (D1) DETACH ALL ONCLICK
    let correctAudio = new Audio('correct-answer.wav');
    let incorrectAudio = new Audio('incorrect-answer.wav');
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");
    } else {
      option.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You answered ${quiz.score} of ${quiz.data.length} correctly!`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};
window.addEventListener("load", quiz.init);
