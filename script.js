function openform() {

  document.getElementById("popup").style.display = "block";
  document.getElementById("outer").classList.add("blur");
  // form.classList.toggle('show');
}
function closeform() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("outer").classList.remove("blur");
}


window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('food').style.backgroundImage = 'url("./asserts/image.png")';
  console.log("rec1 called");

});

const myDiv = document.getElementById("rec1");
window.addEventListener("DOMContentLoaded", () => {
  myDiv.style.backgroundColor = "#FF3147";
  myDiv.style.color = "#FFFFFF";
  document.getElementById("rec2").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec3").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec2").style.color = "#000000";
  document.getElementById("rec3").style.color = "#000000";
});

document.getElementById('rec1').addEventListener('click', function () {
  document.getElementById('food').style.backgroundImage = 'url("./asserts/image.png")';
  console.log("rec1 called");
});

document.getElementById('rec2').addEventListener('click', function () {
  document.getElementById('food').style.backgroundImage = 'url("./asserts/istockphoto-1428412216-612x612.jpg")'
});
document.getElementById('rec3').addEventListener('click', function () {
  document.getElementById('food').style.backgroundImage = 'url("./asserts/food-pizza-wallpaper-preview.jpg")'
})
const myDiv1 = document.getElementById("rec1");

myDiv1.addEventListener("click", () => {
  myDiv1.style.backgroundColor = "#FF3147";
  myDiv1.style.color = "#FFFFFF";
  document.getElementById("rec2").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec3").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec2").style.color = "#000000";
  document.getElementById("rec3").style.color = "#000000";
});

const myDiv2 = document.getElementById("rec2");
myDiv2.addEventListener("click", () => {
  myDiv2.style.backgroundColor = "#FF3147";
  myDiv2.style.color = "#FFFFFF";
  document.getElementById("rec1").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec3").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec1").style.color = "#000000";
  document.getElementById("rec3").style.color = "#000000";
});

const myDiv3 = document.getElementById("rec3");
myDiv3.addEventListener("click", () => {
  myDiv3.style.backgroundColor = "#FF3147";
  myDiv3.style.color = "#FFFFFF";
  document.getElementById("rec1").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec2").style.backgroundColor = "#F6F6F6";
  document.getElementById("rec1").style.color = "#000000";
  document.getElementById("rec2").style.color = "#000000";
});

document.getElementById('readmore1').addEventListener('click', () => {
  window.open("https://www.fylehq.com/", "_blank");

});
document.getElementById('readmore2').addEventListener('click', () => {
  window.open("https://www.fylehq.com/", "_blank");

});
document.getElementById('readmore3').addEventListener('click', () => {
  window.open("https://www.fylehq.com/", "_blank");

});
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#img');
  const interval = 2000;
  let currentIndex = 0;
  const dots = document.querySelectorAll('#dotchange');
  setInterval(() => {
    images[currentIndex].classList.remove('focused');
    dots[currentIndex].classList.remove('dotchanger');

    currentIndex = (currentIndex + 1) % images.length;

    dots[currentIndex].classList.add('dotchanger');
    images[currentIndex].classList.add('focused');
  }, interval);
});
