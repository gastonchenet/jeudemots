const wordsElement = document.getElementById("favs-words");
const rhymesElement = document.getElementById("favs-rhymes");
const gotoFavs = document.getElementById("goto-favs");

function load() {
  const favs = JSON.parse(window.localStorage.getItem("favs") || "[]");
  const words = favs.filter((x) => x.type === 1);
  const rhymes = favs.filter((x) => x.type === 2);

  wordsElement.innerHTML = "";
  rhymesElement.innerHTML = "";
  
  if (words.length === 0) {
    wordsElement.textContent = "Aucun jeu de mot favori.";
  }
  if (rhymes.length === 0) {
    rhymesElement.textContent = "Aucune rime favorite.";
  }

  for (const { word, baseWord } of words) {
    const wordElement = document.createElement("div");
    const textContent = document.createElement("div");
    const wordText = document.createElement("h4");
    const originalWord = document.createElement("p");
    const heart = document.createElement("i");
  
    wordText.textContent = word;
    originalWord.textContent = "Avec " + baseWord;
  
    originalWord.classList.add("original-word");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    heart.classList.add("red");
    textContent.classList.add("word-text-content");
    wordElement.classList.add("word-details");

    wordElement.id = word;
  
    heart.addEventListener("click", () => {
      const wi = favs.findIndex((x) => x.word === word && x.baseWord === baseWord);
      favs.splice(wi, 1);
      wordElement.remove();
  
      window.localStorage.setItem("favs", JSON.stringify(favs));

      if (favs.filter((x) => x.type === 1).length === 0) {
        wordsElement.textContent = "Aucun jeu de mot favori.";
      }
    });
  
    textContent.append(wordText);
    textContent.append(originalWord);
    wordElement.append(textContent);
    wordElement.append(heart);
    wordsElement.append(wordElement);
  }

  for (const { word, baseWord } of rhymes) {
    const wordElement = document.createElement("div");
    const textContent = document.createElement("div");
    const wordText = document.createElement("h4");
    const originalWord = document.createElement("p");
    const heart = document.createElement("i");

    wordText.innerHTML = word;
    originalWord.textContent = "Rime avec " + baseWord;
  
    originalWord.classList.add("original-word");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    heart.classList.add("red");
    textContent.classList.add("word-text-content");
    wordElement.classList.add("word-details");

    wordElement.id = word;
  
    heart.addEventListener("click", () => {
      const wi = favs.findIndex((x) => x.word === word && x.baseWord === baseWord);
      favs.splice(wi, 1);
      wordElement.remove();
  
      window.localStorage.setItem("favs", JSON.stringify(favs));

      if (favs.filter((x) => x.type === 2).length === 0) {
        rhymesElement.textContent = "Aucune rime favorite.";
      } 
    });
  
    textContent.append(wordText);
    textContent.append(originalWord);
    wordElement.append(textContent);
    wordElement.append(heart);
    rhymesElement.append(wordElement);
  }

  document.getElementById("searchbar-favs").addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    favs.forEach((fav) => {
      if (fav.word.startsWith(filter)) {
        document.getElementById(fav.word).style.display = "flex";
      } else {
        document.getElementById(fav.word).style.display = "none";
      }
    });
  });
}

load();
gotoFavs.addEventListener("click", load);