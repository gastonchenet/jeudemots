import words from "./data/words.json" assert { type: "json" }
import Lister from "./functions/Lister.js";
import Symbols from "./constants/Symbols.js";

const lw = (s) => s.toLowerCase();

const gotoHome = document.getElementById("goto-home");
const searchbar = document.getElementById("searchbar");
const searchForm = document.getElementById("search-form");
const includingElement = document.getElementById("including");
const startingElement = document.getElementById("starting");
const endingElement = document.getElementById("ending");
const rhymesElement = document.getElementById("rhymes-list");

function load() {
  const favs = JSON.parse(window.localStorage.getItem("favs") || "[]");

  searchbar.value = "";
  includingElement.innerHTML = "";
  startingElement.innerHTML = "";
  endingElement.innerHTML = "";
  rhymesElement.innerHTML = "";

  document.getElementById("words").hidden = true;
  document.getElementById("rhymes").hidden = true;

  searchForm.style.borderBottom = "none";
  searchForm.style.paddingBottom = "0";
  searchForm.style.marginBottom = "0";

  searchbar.addEventListener("input", () => {
    if (searchbar.value === "") {
      if (searchbar.parentElement.classList.contains("bordered")) {
        searchbar.parentElement.classList.remove("bordered");
      }
    } else {
      if (!searchbar.parentElement.classList.contains("bordered")) {
        searchbar.parentElement.classList.add("bordered");
      }
    }
  });
  
  
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    search(searchbar.value);
  });
  
  const randomize = document.getElementById("randomize");
  randomize.addEventListener("click", () => {
    const { word } = words[Math.floor(Math.random() * words.length)];
    searchbar.value = word;
    search(word);
  });
  
  function search(baseWord) {
    const lister = new Lister(baseWord);
  
    const including = lister.including();
    const starting = lister.starting();
    const ending = lister.ending();
    const rhymes = lister.ryhme();

    document.getElementById("words").hidden = false;
    document.getElementById("rhymes").hidden = false;

    searchForm.style.borderBottom = "1px solid #3b3e41";
    searchForm.style.paddingBottom = "30px";
    searchForm.style.marginBottom = "30px";

    includingElement.innerHTML = "";
    startingElement.innerHTML = "";
    endingElement.innerHTML = "";
    rhymesElement.innerHTML = "";
  
    if (including.length === 0) {
      includingElement.textContent = "Aucun mot correspondant.";
    }
    if (starting.length === 0) {
      startingElement.textContent = "Aucun mot correspondant.";
    }
    if (ending.length === 0) {
      endingElement.textContent = "Aucun mot correspondant.";
    }
    if (rhymes.words.length === 0) {
      rhymesElement.textContent = "Aucune rime trouvée.";
    }
  
    for (const { word, phonetic } of including.slice(0, 50)) {
      const wordElement = document.createElement("div");
      const textContent = document.createElement("div");
      const wordText = document.createElement("h4");
      const originalWord = document.createElement("p");
      const phonems = document.createElement("p");
      const heart = document.createElement("i");
      
      wordText.innerText = phonetic.map((s) => s.comp).join("");
      originalWord.textContent = word;
      phonems.textContent = "[ " + phonetic.map((s) => Symbols[s.sound]).join("") + " ]";
  
      wordText.classList.add("word-content");
      originalWord.classList.add("original-word");
      phonems.classList.add("phonems");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");
      textContent.classList.add("word-text-content");
      wordElement.classList.add("word-details");
      if (favs.findIndex((x) => 
          x.word === phonetic.map((s) => s.comp).join("") &&
          lw(x.baseWord) === lw(baseWord)
      ) + 1) {
        heart.classList.add("red");
      }
  
      heart.addEventListener("click", () => {
        const wi = favs.findIndex((x) => 
          x.word === phonetic.map((s) => s.comp).join("") &&
          lw(x.baseWord) === lw(baseWord)
        );
        if (wi + 1) {
          heart.classList.remove("red");
          favs.splice(wi, 1);
        } else {
          heart.classList.add("red");
          favs.push({
            word: phonetic.map((s) => s.comp).join(""),
            date: Date.now(),
            type: 1,
            baseWord
          });
        }
  
        window.localStorage.setItem("favs", JSON.stringify(favs));
      });
  
      textContent.append(wordText);
      textContent.append(originalWord);
      textContent.append(phonems);
      wordElement.append(textContent);
      wordElement.append(heart);
      includingElement.append(wordElement);
    }
  
    for (const { word, phonetic } of starting.slice(0, 50)) {
      const wordElement = document.createElement("div");
      const textContent = document.createElement("div");
      const wordText = document.createElement("h4");
      const originalWord = document.createElement("p");
      const phonems = document.createElement("p");
      const heart = document.createElement("i");
      
      wordText.innerText = phonetic.map((s) => s.comp).join("");
      originalWord.textContent = word;
      phonems.textContent = "[ " + phonetic.map((s) => Symbols[s.sound]).join("") + " ]";
  
      wordText.classList.add("word-content");
      originalWord.classList.add("original-word");
      phonems.classList.add("phonems");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");
      textContent.classList.add("word-text-content");
      wordElement.classList.add("word-details");
      if (favs.findIndex((x) => 
        x.word === phonetic.map((s) => s.comp).join("") &&
        lw(x.baseWord) === lw(baseWord)
      ) + 1) {
        heart.classList.add("red");
      }
  
      heart.addEventListener("click", () => {
        const wi = favs.findIndex((x) => 
          x.word === phonetic.map((s) => s.comp).join("") &&
          lw(x.baseWord) === lw(baseWord)
        );
        if (wi + 1) {
          heart.classList.remove("red");
          favs.splice(wi, 1);
        } else {
          heart.classList.add("red");
          favs.push({
            word: phonetic.map((s) => s.comp).join(""),
            date: Date.now(),
            type: 1,
            baseWord
          });
        }
  
        window.localStorage.setItem("favs", JSON.stringify(favs));
      });
  
      textContent.append(wordText);
      textContent.append(originalWord);
      textContent.append(phonems);
      wordElement.append(textContent);
      wordElement.append(heart);
      startingElement.append(wordElement);
    }
  
    for (const { word, phonetic } of ending.slice(0, 50)) {
      const wordElement = document.createElement("div");
      const textContent = document.createElement("div");
      const wordText = document.createElement("h4");
      const originalWord = document.createElement("p");
      const phonems = document.createElement("p");
      const heart = document.createElement("i");
      
      wordText.innerText = phonetic.map((s) => s.comp).join("");
      originalWord.textContent = word;
      phonems.textContent = "[ " + phonetic.map((s) => Symbols[s.sound]).join("") + " ]";
  
      wordText.classList.add("word-content");
      originalWord.classList.add("original-word");
      phonems.classList.add("phonems");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");
      textContent.classList.add("word-text-content");
      wordElement.classList.add("word-details");
      if (favs.findIndex((x) => 
        x.word === phonetic.map((s) => s.comp).join("") &&
        lw(x.baseWord) === lw(baseWord)
      ) + 1) {
        heart.classList.add("red");
      }
  
      heart.addEventListener("click", () => {
        const wi = favs.findIndex((x) => 
          x.word === phonetic.map((s) => s.comp).join("") &&
          lw(x.baseWord) === lw(baseWord)
        );
        if (wi + 1) {
          heart.classList.remove("red");
          favs.splice(wi, 1);
        } else {
          heart.classList.add("red");
          favs.push({
            word: phonetic.map((s) => s.comp).join(""),
            date: Date.now(),
            type: 1,
            baseWord
          });
        }
  
        window.localStorage.setItem("favs", JSON.stringify(favs));
      });
  
      textContent.append(wordText);
      textContent.append(originalWord);
      textContent.append(phonems);
      wordElement.append(textContent);
      wordElement.append(heart);
      endingElement.append(wordElement);
    }
  
    for (const { word, phonetic } of rhymes.words) {
      const wordElement = document.createElement("div");
      const textContent = document.createElement("div");
      const wordText = document.createElement("h4");
      const phonems = document.createElement("p");
      const heart = document.createElement("i");
  
      let cleanPhonetic = false
      if (phonetic[phonetic.length - 1].sound === "NPH") cleanPhonetic = true;
      
      wordText.innerHTML = 
        phonetic.slice(0, - (1 + cleanPhonetic)).map((x) => x.comp).join("") +
        "<span style=\"text-decoration: underline;\">" +
        phonetic[phonetic.length - (1 + cleanPhonetic)].comp +
        "</span>" + 
        (
          cleanPhonetic ?
          phonetic[phonetic.length - 1].comp:
          ""
        )
  
      phonems.textContent = "[ " + phonetic.map((s) => Symbols[s.sound]).join("") + " ]";
  
      wordText.classList.add("word-content");
      phonems.classList.add("phonems");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");
      textContent.classList.add("word-text-content");
      wordElement.classList.add("word-details");
      if (favs.findIndex((x) => 
        x.word === phonetic.map((s) => s.comp).join("") &&
        lw(x.baseWord) === lw(baseWord)
      ) + 1) {
        heart.classList.add("red");
      }
  
      heart.addEventListener("click", () => {
        const wi = favs.findIndex((x) => 
          x.word === phonetic.map((s) => s.comp).join("") &&
          lw(x.baseWord) === lw(baseWord)
        );
        if (wi + 1) {
          heart.classList.remove("red");
          favs.splice(wi, 1);
        } else {
          heart.classList.add("red");
          favs.push({ word, date: Date.now(), type: 2, baseWord });
        }
  
        window.localStorage.setItem("favs", JSON.stringify(favs));
      });
  
      textContent.append(wordText);
      textContent.append(phonems);
      wordElement.append(textContent);
      wordElement.append(heart);
      rhymesElement.append(wordElement);
    }
    
    for (const element of document.getElementsByClassName("word")) {
      element.innerHTML = baseWord;
    }
  
    searchbar.blur();
    if (searchbar.parentElement.classList.contains("bordered")) {
      searchbar.parentElement.classList.remove("bordered");
    }
  }
}

load();
gotoHome.addEventListener("click", load);