"use strict";

// Get button element to control on click event
var successBtn = document.querySelector(".sucsess");
var errorBtn = document.querySelector(".error");
var warningBTN = document.querySelector(".warning");
var success_alert_Ash = function success_alert_Ash() {
  if (successBtn) {
    successBtn.addEventListener("click", function () {
      // create element successfully
      var DivSuccess = document.createElement("div");
      DivSuccess.className = "success_notification";
      /*************************************************/
      // btn content
      var divIconStatus = document.createElement("div");
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.position = "relative";
      var content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/check.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivSuccess.appendChild(divIconStatus);
      /*************************************************/
      var title = document.createElement("span");
      title.style.position = "absolute";
      title.style.top = "50%";
      title.style.left = "50%";
      title.style.transform = "translate(-50%, -50%)";
      title.style.color = "white";
      title.style.fontSize = "22px";
      title.style.width = "80%";
      title.style.textAlign = "center";
      title.innerHTML = "process successfully 😍";
      DivSuccess.appendChild(title);
      document.body.appendChild(DivSuccess);
      /*************************************************/
      // add active class to transition
      setTimeout(function () {
        DivSuccess.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(function () {
        successBtn.disabled = true;
      }, 0);
      setTimeout(function () {
        successBtn.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(function () {
        DivSuccess.remove();
      }, 3500);
    });
  }
};
var warning_alert_Ash = function warning_alert_Ash() {
  if (warningBTN) {
    warningBTN.addEventListener("click", function () {
      // create element warning
      var DivWarning = document.createElement("div");
      DivWarning.className = "warning_notification";
      // btn content
      var divIconStatus = document.createElement("div");
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.position = "relative";
      var content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/warning.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivWarning.appendChild(divIconStatus);
      /*************************************************/
      var title = document.createElement("span");
      title.style.position = "absolute";
      title.style.top = "50%";
      title.style.left = "50%";
      title.style.transform = "translate(-50%, -50%)";
      title.style.color = "white";
      title.style.fontSize = "22px";
      title.style.width = "80%";
      title.style.textAlign = "center";
      title.innerHTML = "process Warning 🫤";
      DivWarning.appendChild(title);
      document.body.appendChild(DivWarning);
      /*************************************************/
      // add active class to transition
      setTimeout(function () {
        DivWarning.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(function () {
        warningBTN.disabled = true;
      }, 0);
      setTimeout(function () {
        warningBTN.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(function () {
        DivWarning.remove();
      }, 2300);
    });
  }
};
var error_alert_Ash = function error_alert_Ash() {
  if (errorBtn) {
    errorBtn.addEventListener("click", function () {
      // create element error
      var DivError = document.createElement("div");
      DivError.className = "error_notification";
      // btn content
      var divIconStatus = document.createElement("div");
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.position = "relative";
      var content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/error.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivError.appendChild(divIconStatus);
      /*************************************************/
      var title = document.createElement("span");
      title.style.position = "absolute";
      title.style.top = "50%";
      title.style.left = "50%";
      title.style.transform = "translate(-50%, -50%)";
      title.style.color = "white";
      title.style.fontSize = "22px";
      title.style.width = "80%";
      title.style.textAlign = "center";
      title.innerHTML = "process bom 😭";
      DivError.appendChild(title);
      document.body.appendChild(DivError);
      /*************************************************/
      // add active class to transition
      setTimeout(function () {
        DivError.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(function () {
        errorBtn.disabled = true;
      }, 0);
      setTimeout(function () {
        errorBtn.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(function () {
        DivError.remove();
      }, 2500);
    });
  }
};
success_alert_Ash();
warning_alert_Ash();
error_alert_Ash();