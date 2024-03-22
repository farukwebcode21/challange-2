const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit-button");
const rating = document.getElementById("rating");
const ratesContainer = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

ratesContainer.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
