alert("TOUCH THE CAKE π AND ENJOY THE PARTY πΆππ");
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
