async function getJoke() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?type=single"
    );

    const data = await response.json(); // JSON → JS object

    document.getElementById("joke").innerText = data.joke;
    // console.log(data);
  } catch (error) {
    document.getElementById("joke").innerText =
      "Oops! Something went wrong 😢";
    console.error(error);
  }
}


getJoke();