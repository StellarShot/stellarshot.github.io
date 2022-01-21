function toggle() {
  togglebtn();
  const menu = document.querySelector("#menu");

  if (menu.classList.contains("hidden")) {
    menu.classList.add("flex");
    menu.classList.remove("hidden");
  } else {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
}

function togglebtn() {
  const btn = document.querySelector("#toggler");
  if (btn.classList.contains("fa-bars")) {
    btn.classList.add("fa-times");
    btn.classList.add("mx-1");
    btn.classList.remove("fa-bars");
  } else {
    btn.classList.remove("fa-times");
    btn.classList.remove("mx-1");
    btn.classList.add("fa-bars");
  }
}
