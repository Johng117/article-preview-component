// element variables
const shareButton = document.getElementById("avatar-icon-share-container");
const desktopShareButton = document.getElementById(
  "avatar-icon-share-container-desktop"
);
const avatarInfoGroup = document.getElementById("avatar-info-container");
const socialGroup = document.getElementById("social-icons");
const avatarSocialContainer = document.getElementById(
  "avatar-social-container"
);
const shareImage = document.getElementById("avatar-icon-share");
const desktopShareImage = document.getElementById("avatar-icon-share-desktop");
const svgBox = document.getElementById("svg-container");

// toggle functions to switch views of avatar/social media element
function toggleFunc() {
  if (window.getComputedStyle(avatarInfoGroup).display === "flex") {
    avatarInfoGroup.style.display = "none";
    socialGroup.style.display = "flex";
    avatarSocialContainer.style.backgroundColor = "#48556a";
    shareButton.style.backgroundColor = "#9eafc2";
    shareImage.style.cssText = "filter: brightness(250%)";
  } else {
    avatarInfoGroup.style.display = "flex";
    socialGroup.style.display = "none";
    avatarSocialContainer.style.backgroundColor = "#ffffff";
    shareButton.style.backgroundColor = "#ecf2f8";
    shareImage.style.cssText = "filter: brightness(100%)";
  }
}

function desktopToggleFunc() {
  if (window.getComputedStyle(svgBox).visibility === "hidden") {
    svgBox.style.visibility = "visible";
    desktopShareButton.style.backgroundColor = "#48556a";
    desktopShareImage.style.cssText = "filter: brightness(250%)";
  } else {
    svgBox.style.visibility = "hidden";
    desktopShareButton.style.backgroundColor = "#ecf2f8";
    desktopShareImage.style.cssText = "filter: brightness(100%)";
  }
}

shareButton.addEventListener("click", toggleFunc);
desktopShareButton.addEventListener("click", desktopToggleFunc);

