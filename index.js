function play() {
  let responseText = document.querySelector("#ball-text");

  let randomNumber = Math.floor(Math.random() * 8);
  console.log(randomNumber);
  if (randomNumber === 0) {
    responseText.innerHTML = "It is most certain";
  } else {
    if (randomNumber === 1) {
      responseText.innerHTML = "That may be true";
    } else {
      if (randomNumber === 2) {
        responseText.innerHTML = "Reply hazy try again";
      } else {
        if (randomNumber === 3) {
          responseText.innerHTML = "Cannot predict now";
        } else {
          if (randomNumber === 4) {
            responseText.innerHTML = "Do not count on it";
          } else {
            if (randomNumber === 5) {
              responseText.innerHTML = "My sources say no";
            } else {
              if (randomNumber === 6) {
                responseText.innerHTML = "Outlook not so good";
              } else {
                if (randomNumber === 7) {
                  responseText.innerHTML = "Signs point to yes";
                }
              }
            }
          }
        }
      }
    }
  }
}

function question(event) {
  event.preventDefault();

  let questionInput = document.querySelector("#input-bar");

  let questionText = document.querySelector("#question-text");
  if (questionInput.value) {
    questionText.innerHTML = `${questionInput.value}`;
  }

  document.getElementById("input-bar").value = " ";
  play();
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", question);
