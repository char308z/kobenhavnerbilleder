import "./style.css";
document.querySelector("#darkMode").addEventListener("click", addDark);
function addDark() {
  document.documentElement.classList.add("dark");
}

document.querySelector("#lightMode").addEventListener("click", removeDark);
function removeDark() {
  document.documentElement.classList.remove("dark");
  document.querySelector("#lightMode");
}

// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
