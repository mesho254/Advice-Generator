const adviceText = document.getElementById("advice-text");
const generateBtn = document.getElementById("generate-btn");
const count =document.querySelector(".count");

generateBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceText.textContent = data.slip.advice;
        count.textContent = data.slip.id;
    })
    .catch((error) => {
      adviceText.textContent = "Oops! Something went wrong.";
    });
});
