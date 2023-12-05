const bell = document.querySelector("#bell");
const input_text = document.querySelector("#input_text");
const icon_input_text = document.querySelector("#icon_input_text");
const sideBarFullContent = document.querySelector(".sidebar");
const sideBarShort = document.querySelector(".sidebar-short");
const bellIcon = document.querySelector("#bellIcon");

function inputTextFocus() {
  icon_input_text.style.display = "flex";
}

function blurFunction() {
  icon_input_text.style.display = "none";
}

function makeVideoClick() {
  bellIcon.className = "fa-solid fa-video-slash";
}

function makeVideoBlur() {
  bellIcon.className = "fa-solid fa-video";
}

function bellClick() {
  bell.className = "fa-solid fa-bell";
}

function showSideBar() {
  if (sideBarFullContent.style.display === "inline") {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "inline";
  } else {
    sideBarFullContent.style.display = "inline";
    sideBarShort.style.display = "none";
  }
}
