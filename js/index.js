// Your code goes here
const navLink = document.querySelector(".nav-link");

navLink.addEventListener("click", (e) => {
  e.target.style.border = "2px solid black";
  e.target.style.backgroundColor = "#ed4c81";
  console.log("you have enter the link zone");
});

navLink.addEventListener(
  "mouseover",
  (e) => {
    // highlight the mouseover target
    e.target.style.color = "crimson";

    // reset the color after a short delay
    setTimeout(function () {
      e.target.style.color = "";
    }, 500);
  },
  false
);

const header = document.querySelector("header");

header.addEventListener("mouseenter", (e) => {
  e.target.style.border = "5px dotted crimson";
});
header.addEventListener("mouseleave", (e) => {
  e.target.style.border = null;
});

const footer = document.querySelector("footer");

footer.addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "crimson";
  e.target.style.border = "5x dotted slategray";
});
footer.addEventListener("mouseleave", (e) => {
  e.target.style.backgroundColor = null;
  e.target.style.border = null;
});
