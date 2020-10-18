function toggleMenu(toggle) {
  sub = document.getElementById("sub")
  if (typeof (toggle) == "boolean") {
    sub.classList.toggle("toggled", toggle)
  } else {
    sub.classList.toggle("toggled");
  }
}