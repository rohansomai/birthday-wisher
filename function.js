alert("TOUCH THE CAKE 🎂 AND ENJOY THE PARTY 🎶🎉🎊");
let count = 0;
window.addEventListener("click", function () {
  var audio = document.getElementById("HBD");
  if (count % 2 == 0) {
    console.log("in if");
    audio.play();
  } else {
    console.log("in else");
    audio.pause();
  }
  count++;
});

function fn() {
  alert("clicked");
}
