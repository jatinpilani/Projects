const quizQuestions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: 1,
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: 1,
  },
  {
    question: "Who is known as the father of computers?",
    options: [
      "Albert Einstein",
      "Charles Babbage",
      "Isaac Newton",
      "Nikola Tesla",
    ],
    answer: 1,
  },
  {
    question: "Which planet is called the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Home Text Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    answer: 2,
  },
  {
    question: "Which data type is used for true/false values in JavaScript?",
    options: ["String", "Boolean", "Number", "Array"],
    answer: 1,
  },
  {
    question: "Which method converts JSON to JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: 0,
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->", "**"],
    answer: 0,
  },
  {
    question: "Which company developed the Android OS?",
    options: ["Apple", "Google", "Microsoft", "Samsung"],
    answer: 1,
  },
];
let question = document.getElementById("ques");
let optionss = document.getElementById("option");
let nextques = document.getElementById("nxt");
let count = 0;
var totalscore = 0;
nextques.disabled=true;
function showQuestion() {
  if (count >= quizQuestions.length) {
    question.textContent = "Quiz Finished!";
    optionss.innerHTML = "";
    nextques.textContent = "Total Score is 10/" + totalscore;
    return;
  }

  question.textContent = quizQuestions[count].question;

  optionss.innerHTML = "";

  quizQuestions[count].options.forEach((opt) => {
    let option = document.createElement("button");
    option.classList.add("h");
    option.addEventListener("click", function () {
nextques.disabled=false;

      if (
        this.textContent ==
        quizQuestions[count].options[quizQuestions[count].answer]
      ) {
        option.style.background = "green";
        totalscore++;
      } else {
        option.style.background = "red";
      }
      let optionss2 = document.getElementsByClassName("h");
      for (let btn of optionss2) {
        btn.disabled = true;
      }
      
    });
    option.textContent = opt;
    optionss.append(option);
    nextques.disabled=true;
  });
}

showQuestion();

nextques.addEventListener("click", function () {
  count++;
  showQuestion();
});
