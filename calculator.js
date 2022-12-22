let display = document.getElementById("screen");
function allclear() {
  display.value = "";
}
function show(event) {
  display.value += event;
}
function calc() {
  display.value = eval(display.value);
}
