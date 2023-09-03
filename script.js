const contextMenu = document.querySelector(".wrapper");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.offsetX;
  let y = e.offsetY;

  let winWidth = window.innerWidth;
  let cmWidth = contextMenu.offsetWidth;

  let winHeight = window.innerHeight;
  let cmHeight = contextMenu.offsetHeight;

  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
  console.log("rigt clict");
});
