const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

async function imageGenerator() {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.nekosapi.com/v4/images/random"
  );
  const data = await response.json();

  const imageUrl = data[0].url;
  animeContainerEl.style.display = "block";

  if (data[0].rating === "explicit") {
    imageGenerator();
  } else {
    animeImgEl.src = imageUrl;
  }
}

btnEl.addEventListener("click", imageGenerator);
