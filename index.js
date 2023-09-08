console.log("on");

btn = document.getElementById("btn");
modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});
