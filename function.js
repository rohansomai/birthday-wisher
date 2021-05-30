alert("TOUCH THE CAKE 🎂 AND ENJOY THE PARTY 🎶🎉🎊");
let count = 0;
window.addEventListener("click", function () {
  var audio = document.getElementById("HBD");
  if (count % 2 == 0) {
    audio.play();
  } else {
    audio.pause();
  }
  count++;
});
