let get = document.getElementById("get");
let btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = () => {
  fetch(url).then(data => data.json())
    .then(item => {
      get.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click", getjoke);
getjoke();