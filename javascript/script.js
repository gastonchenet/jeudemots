const gotoHome = document.getElementById("goto-home");
const gotoFavs = document.getElementById("goto-favs");

const pages = [
  document.getElementById("main-content"),
  document.getElementById("favs-content")
]

const Pages = {
  HOME: 0,
  FAVS: 1
}

gotoHome.addEventListener("click", () => {
  for (const i in pages) pages[i].hidden = true;
  pages[Pages.HOME].hidden = false;
  window.history.pushState({}, "", "/");
});

gotoFavs.addEventListener("click", () => {
  for (const i in pages) pages[i].hidden = true;
  pages[Pages.FAVS].hidden = false;
  window.history.pushState({}, "", "/favorites");
});