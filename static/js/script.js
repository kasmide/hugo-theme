function toggleMenu(toggle) {
  sub = document.getElementById("sub")
  if (typeof (toggle) == "boolean") {
    sub.classList.toggle("toggled", toggle)
  } else {
    sub.classList.toggle("toggled");
  }
}
window.onload= () => {
  Array.from(document.getElementById("sub").getElementsByTagName("a")).forEach((a)=>{
    a.addEventListener("click",toggleMenu,false);
      console.log(name)
    })
}
