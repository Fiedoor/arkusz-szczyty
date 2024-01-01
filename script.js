var num = 1;
function min(x) {
  num = x;
  document.getElementById('big').src = x + '.jpg';
}
function next() {
  num++;
  if (num > 5) {
    num = 1;
  }
  document.getElementById('big').src = num + '.jpg';
}
function prev() {
  num--;
  if (num < 1) {
    num = 5;
  }
  document.getElementById('big').src = num + '.jpg';
}
