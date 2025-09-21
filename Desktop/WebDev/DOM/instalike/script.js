const img = document.querySelector("img");

img.addEventListener("dblclick", function () {
  img.setAttribute("src", "heart.png");
  img.classList.add("active");
  setTimeout(() => {
    img.classList.remove("active");
    img.classList.add("position");
  }, 1000);
});
