"use strict";

// Get button element to control on click event

var successBtn = document.querySelector(".sucsess");
var errorBtn = document.querySelector(".error");
var warningBTN = document.querySelector(".warning");
if (successBtn) {
  successBtn.addEventListener("click", function () {
    // create element successfully
    var DivSuccess = document.createElement("div");
    DivSuccess.className = "success_notification";
    document.body.appendChild(DivSuccess);
    /*************************************************/
    // add active class to transition
    setTimeout(function () {
      DivSuccess.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(function () {
      successBtn.disabled = true; // Disable the button for 5 seconds
    }, 0);
    setTimeout(function () {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 3500);
    /*************************************************/
    // remove element form page
    setTimeout(function () {
      DivSuccess.remove();
    }, 3000);
  });
}
if (errorBtn) {
  errorBtn.addEventListener("click", function () {
    // create element error
    var DivError = document.createElement("div");
    DivError.className = "error_notification";
    document.body.appendChild(DivError);
    /*************************************************/
    // add active class to transition
    setTimeout(function () {
      DivError.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(function () {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 2000);
    /*************************************************/
    // remove element form page
    setTimeout(function () {
      DivError.remove();
    }, 2300);
  });
}
if (warningBTN) {
  warningBTN.addEventListener("click", function () {
    // create element warning
    var DivWarning = document.createElement("div");
    DivWarning.className = "warning_notification";
    document.body.appendChild(DivWarning);
    /*************************************************/
    // add active class to transition
    setTimeout(function () {
      DivWarning.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(function () {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 2000);
    /*************************************************/
    // remove element form page
    setTimeout(function () {
      DivWarning.remove();
    }, 2300);
  });
}