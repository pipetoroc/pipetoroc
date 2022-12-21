const primaryBtn = document.getElementById("primary-button");
primaryBtn.addEventListener("click", toggleSection);

const logoBtn = document.getElementById("logo");
logoBtn.addEventListener("click", toggleSection);

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

const homeBtn = document.getElementById("goHome");
homeBtn.addEventListener("click", goHome);

function goHome() {
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  main.setAttribute("class", "inactive");

  header.classList.toggle('inactive');
}
