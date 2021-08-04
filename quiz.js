var quizForm = document.querySelector("#quiz");
var questions = document.querySelectorAll(".question");
var result = document.querySelector("#result");
var submit = document.querySelector("#submit");

var correctAnswers = [
  "option1",
  "option2",
  "option1",
  "option2",
  "option3",
  "option2",
  "option1",
  "option2",
  "option2",
  "option1",
];

var score = 0;

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 0; i < 10; i++) {
    if (correctAnswers[i] === quizForm.elements[`question${i + 1}`].value) {
      score++;
      questions[i].style.color = "green";
    } else {
      questions[i].style.color = "red";
    }
  }

  if (score === 10) {
    result.innerHTML = `You have scored ${score}/10. You have mastered triangle`;
  } else {
    result.innerHTML = `You have scored ${score}/10. You have to learn more about triangles <a href='/index.html'> click here</a>`;
  }
  disableEnter();
  submit.classList.add("hidden");
});

function disableEnter() {
  window.addEventListener(
    "keydown",
    function (e) {
      if (
        e.keyIdentifier == "U+000A" ||
        e.keyIdentifier == "Enter" ||
        e.keyCode == 13
      ) {
        //console.log("enter");

        if (e.target.nodeName == "INPUT") {
          e.preventDefault();
        }
      }
    },
    true
  );
}
