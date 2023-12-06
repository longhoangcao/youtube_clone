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

function inputTextFocus() {
  icon_input_text.style.display = "flex";
}

function blurFunction() {
  icon_input_text.style.display = "none";
}

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

function showSideBar() {
  if (sideBarFullContent.style.display === "inline") {
    sideBarFullContent.style.display = "none";
    sideBarShort.style.display = "inline";
    contents.style.left = "70px";
    // This will effect all card item
    // This will be responsive card item when the showSideBar is clicked
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
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var text = conatiner_texts[i];
      card.style.width = "390px";
      text.style.maxWidth = "320px";
    }
  }
}

function cardHover() {
  ellipsis_icon.style.display = "inline";
  maxWidthCard.style.maxWidth = "325px";
}

function cardHoverOut() {
  ellipsis_icon.style.display = "none";
  maxWidthCard.style.maxWidth = "340px";
}
