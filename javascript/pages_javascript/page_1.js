const bell = document.querySelector("#bell");
const input_text = document.querySelector("#input_text");
const icon_input_text = document.querySelector("#icon_input_text");
const sideBarFullContent = document.querySelector(".sidebar");
const sideBarShort = document.querySelector(".sidebar-short");
const videoIcon = document.querySelector("#videoIcon");
const ellipsis_icon = document.querySelector("#ellipsis-icon");
const contents = document.querySelector("#contents");
const conatiner_texts = document.querySelectorAll(".conatiner_texts");
const videosAndRelated = document.querySelector("#videosAndRelated");
const catalogVideos = document.querySelector("#catalogVideos");
const video = document.querySelector("#video");

// This function is used to handle search Text input
// Make the text input like dynamic
function inputTextFocus() {
  icon_input_text.style.display = "flex";
}

function blurFunction() {
  icon_input_text.style.display = "none";
}
// ==================================================

// These two function is used for make the button like dynamic
// It will change classname the icon so that make the icon can change to different ways
function makeVideoClick() {
  if (videoIcon.className === "fa-solid fa-video")
    videoIcon.className = "fa-solid fa-video-slash";
  else if (videoIcon.className === "fa-solid fa-video-slash")
    videoIcon.className = "fa-solid fa-video";
}

function bellClick() {
  if (bell.className === "fa-regular fa-bell")
    bell.className = "fa-solid fa-bell";
  else if (bell.className === "fa-solid fa-bell")
    bell.className = "fa-regular fa-bell";
}
// ======================================================================================

// RESPONSIVE FUNCTIONS START FROM HERE

// For tablets
var tabletDevices = window.matchMedia("(max-width: 1200px)");

// This function is responsed for make the input text fit the resolution
function changeWidthOfInputTexts(tabletDevice) {
  if (tabletDevice.matches) {
    input_text.style.width = "350px";
    icon_input_text.style.height = "42px";
  } else {
    input_text.style.width = "500px";
    icon_input_text.style.height = "43px";
  }
}

// This function is repsonsed for making the button click show side bar can not click
function disabledButtonShowBar(x) {
  if (x.matches) {
    buttonSideBar.style.cursor = "not-allowed";
    buttonSideBar.disabled = true;
  } else {
    buttonSideBar.style.cursor = "pointer";
    buttonSideBar.disabled = false;
  }
}

function changeContents(x) {
  if (x.matches) {
    contents.style.display = "block";
    contents.style.padding = "0px 30px";
    videosAndRelated.style.width = "100%";
    videosAndRelated.style.margin = "0px";
    catalogVideos.style.width = "100%";
    catalogVideos.style.margin = "0px";
    catalogVideos.style.marginTop = "20px";
    video.style.height = "400px";
  } else {
    contents.style.display = "flex";
    contents.style.padding = "30px 100px";
    videosAndRelated.style.width = "70%";
    videosAndRelated.style.margin = "5px";
    catalogVideos.style.width = "30%";
    catalogVideos.style.margin = "5px";
    catalogVideos.style.marginTop = "0px";
    video.style.height = "500px";
  }
}

tabletDevices.addEventListener("change", function () {
  changeWidthOfInputTexts(tabletDevices);
  disabledButtonShowBar(tabletDevices);
  changeContents(tabletDevices);
});
// =============================
// For Max800px
var screenMax800px = window.matchMedia("(max-width: 800px)");

function changeInputTexts(mobileDevice) {
  if (mobileDevice.matches) {
    input_text.style.width = "150px";
    icon_input_text.style.height = "43px";
  } else {
    input_text.style.width = "500px";
    icon_input_text.style.height = "43px";
  }
}

function displayNoneForSidebarMobile(mobileDevice) {
  if (mobileDevice.matches) {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "none";
  } else {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "inline";
  }
}

screenMax800px.addEventListener("change", function () {
  changeInputTexts(screenMax800px);
  displayNoneForSidebarMobile(screenMax800px);
});

// For Max700px
var screenMax700px = window.matchMedia("(max-width: 700px)");

function headerContents(screen700px) {
  var content_center = document.querySelector("#content-center");
  var icons700px = document.querySelectorAll("#icon-700px");
  if (screen700px.matches) {
    content_center.style.display = "none";
    icons700px.forEach((element) => {
      element.style.display = "flex";
    });
  } else {
    content_center.style.display = "flex";
    icons700px.forEach((element) => {
      element.style.display = "none";
    });
  }
}

screenMax700px.addEventListener("change", function () {
  headerContents(screenMax700px);
});

// For
var screen500px = window.matchMedia("(max-width: 500px)");

function changeWidthOfHeader(x) {
  var icons700px = document.querySelectorAll("#icon-700px");
  if (x.matches) {
    icons700px.forEach((element) => {
      element.style.display = "none";
    });
  }
}

screen500px.addEventListener("change", function () {
  changeWidthOfHeader(screen500px);
});

// ============================================
// ============================================
