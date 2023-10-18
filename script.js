const mainBtn = document.querySelector(".main-button");
const splitBtn = document.querySelector('.split-button');
const menuTray = document.querySelector('.menu');
const count = document.getElementById('count');

splitBtn.addEventListener("click", () => {
  menuTray.classList.toggle("show");

});

mainBtn.addEventListener("click", () => {
    let countVal = parseInt(count.innerText);
    countVal++;
    count.innerHTML = countVal;
});