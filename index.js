console.log("on");

btn = document.getElementById("btn");
modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
  modal.classList.remove("active-modal");
});

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const modalStatus = urlParams.get("modal");

console.log(modalStatus);

if (modalStatus === "active") {
  modal.classList.add("active-modal");
  document.querySelector(
    ".params"
  ).innerText = `URL Query String: ${queryString}`;
}
