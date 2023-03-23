//Enter to web
const primaryBtn = document.getElementById("primary-button");
primaryBtn.addEventListener("click", toggleSection);

const logoBtn = document.getElementById("logo");
logoBtn.addEventListener("click", toggleSection);

//Change beetween sections from menu bar
function toggleSection() {
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  if (main.className === "inactive") {
    main.className = "active";
    header.setAttribute("class", "inactive");
  }
  setTimeout(() => {
    main.removeAttribute("class");
  }, 1000);
}

//Return to home from web
const homeBtn = document.getElementById("goHome");
homeBtn.addEventListener("click", goHome);

function goHome() {
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  main.setAttribute("class", "inactive");

  header.classList.toggle("inactive");
}

//Active menu button
const menu = document.getElementById("menu");

menu.addEventListener("click", toggle);
function toggle() {
  const listMenu = document.getElementById("list-menu");
  listMenu.classList.toggle("inactive");
  listMenu.classList.toggle("active");

  const list = document.getElementsByClassName("menu__item");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle("itemOpen" + [i + 1]);
  }
}
