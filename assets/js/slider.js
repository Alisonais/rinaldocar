var radio = document.querySelector('.manualbtn');
var cont = 0;

setInterval(() => {
  nextImg();
}, 5000);

function nextImg() {
  cont++

  cont > 6 ? cont = 1: cont;

  document.getElementById(`radio${cont}`).checked = true;
}