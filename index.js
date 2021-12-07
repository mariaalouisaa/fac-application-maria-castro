// Javascript for Toggle Bar

const toggleBar = document.getElementById("toggle");

function nightMode(event) {
  if (this.checked) {
    document.querySelector("body").classList.add("dark-mode");
    document.querySelector("header").classList.add("dark-mode");
  } else {
    document.querySelector("body").classList.remove("dark-mode");
    document.querySelector("header").classList.remove("dark-mode");
  }
}

toggleBar.addEventListener("change", nightMode);

//Functionality of Fortune Teller Feature

let responses = [
  "It is most certain",
  "That may be true",
  "Reply hazy try again",
  "Cannot predict now",
  "Do not count on it",
  "My sources say no",
  "Outlook not so good",
  "Signs point to yes",
];

function play() {
  const responseText = document.querySelector("#ball-text");
  let randomNumber = Math.floor(Math.random() * 8);

  responseText.innerHTML = responses[randomNumber];
}

function question(event) {
  event.preventDefault();

  const questionInput = document.querySelector("#input-bar");

  const questionText = document.querySelector("#question-text");
  if (questionInput.value) {
    questionText.innerHTML = `${questionInput.value}`;
  }

  document.getElementById("input-bar").value = " ";
  play();
}

const form = document.querySelector("#search-bar");
form.addEventListener("submit", question);
