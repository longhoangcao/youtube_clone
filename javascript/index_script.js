const bell = document.querySelector("#bell");
const input_text = document.querySelector("#input_text");
const icon_input_text = document.querySelector("#icon_input_text");

function inputTextFocus() {
  icon_input_text.style.display = "flex";
}

function blurFunction() {
  icon_input_text.style.display = "none";
}
