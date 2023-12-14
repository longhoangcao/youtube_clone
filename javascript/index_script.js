const bell = document.querySelector("#bell");
const input_text = document.querySelector("#input_text");
const icon_input_text = document.querySelector("#icon_input_text");
const sideBarFullContent = document.querySelector(".sidebar");
const sideBarShort = document.querySelector(".sidebar-short");
const videoIcon = document.querySelector("#videoIcon");
const ellipsis_icon = document.querySelector("#ellipsis-icon");
const maxWidthCard = document.querySelector(".conatiner_texts");
const contents = document.querySelector("#contents");
const cards = document.querySelectorAll(".card");
const conatiner_texts = document.querySelectorAll(".conatiner_texts");
const videos = document.querySelectorAll(".video");
const container_thumbnails = document.querySelectorAll(".container_thumbnail");

let timeout;

start();

function start() {
  localStorage.clear();
}

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

// This function is used for handle about open and close sideBar
// And to make it long or short when user click the menu button
function showSideBar() {
  if (sideBarFullContent.style.display === "inline") {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "inline";
    contents.style.left = "70px";
    // This will effect all card item
    // This will be responsive card item when the showSideBar is clicked
    localStorage.setItem("shortBar", true);
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var text = conatiner_texts[i];
      card.style.width = "335px";
      text.style.maxWidth = "260px";
    }
    //==================================================================
  } else {
    sideBarFullContent.style.display = "inline";
    sideBarShort.style.display = "none";
    contents.style.left = "250px";
    localStorage.clear();
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var text = conatiner_texts[i];
      card.style.width = "390px";
      text.style.maxWidth = "320px";
    }
  }
}
// =========================================================================

// These two function below handle for start and stop video using hover technique
// It will auto play the video when user hover to the image of card (thumbnail in this situation)
// And will stop when the mouse move out the thumbnail
function startVideo(videoID) {
  if (localStorage.getItem("shortBar")) {
    const video = document.getElementById(videoID);
    video.querySelector(".container_thumbnail").style.display = "none";
    video.querySelector(".video").style.display = "inline";
    video.querySelector(".video").width = "330";
    video.querySelector(".video").height = "190";
    video.querySelector(".video").play();
  } else {
    const video = document.getElementById(videoID);
    video.querySelector(".container_thumbnail").style.display = "none";
    video.querySelector(".video").style.display = "inline";
    video.querySelector(".video").width = "380";
    video.querySelector(".video").height = "218";
    video.querySelector(".video").play();
  }
}

function stopVideo(videoID) {
  const video = document.getElementById(videoID);
  video.querySelector(".container_thumbnail").style.display = "inline";
  video.querySelector(".video").style.display = "none";
  video.querySelector(".video").pause();
}
// ================================================================================

// RESPONSIVE FUNCTIONS START FROM HERE

// For tablets
var x = window.matchMedia("(max-width: 1200px)");

// This function is responsed for make the input text fit the resolution
function changeWidthOfInputTexts(x) {
  if (x.matches) {
    input_text.style.width = "350px";
    icon_input_text.style.height = "42px";
  } else {
    input_text.style.width = "500px";
    icon_input_text.style.height = "43px";
  }
}

// This function is responsed for making sidebar short and the full content sidebar will change to modal
function changeSidebarToShort(x) {
  if (x.matches) {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "inline";
  } else {
    sideBarFullContent.style.display = "inline";
    sideBarShort.style.display = "none";
  }
}

// This function is repsonsed for making the content will fit the resolution
function changeWidthOfContents(x) {
  if (x.matches) {
    contents.style.left = "70px";
    contents.style.padding = "20px";
  } else {
    contents.style.left = "250px";
    contents.style.padding = "24px";
  }
}

// This function is repsonsed for making the cards will fit the resolution
function adjustifyCards(x) {
  if (x.matches) {
    cards.forEach((card) => {
      card.style.width = "430px";
    });
  } else {
    cards.forEach((card) => {
      card.style.width = "390px";
    });
  }
}

x.addEventListener("change", function () {
  changeWidthOfInputTexts(x);
  changeSidebarToShort(x);
  changeWidthOfContents(x);
  adjustifyCards(x);
});
// =============================

// ============================================
