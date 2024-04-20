// Get button element to control on click event

const successBtn = document.querySelector(".sucsess") as HTMLButtonElement;
const errorBtn = document.querySelector(".error") as HTMLButtonElement;
const warningBTN = document.querySelector(".warning") as HTMLButtonElement;

if (successBtn) {
  successBtn.addEventListener("click", () => {
    // create element successfully
    const DivSuccess = document.createElement("div");
    DivSuccess.className = "success_notification";
    document.body.appendChild(DivSuccess);
    /*************************************************/
    // add active class to transition
    setTimeout(() => {
      DivSuccess.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(() => {
      successBtn.disabled = true; // Disable the button for 5 seconds
    }, 0);
    setTimeout(() => {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 3500);
    /*************************************************/
    // remove element form page
    setTimeout(() => {
      DivSuccess.remove();
    }, 3000);
  });
}

if (errorBtn) {
  errorBtn.addEventListener("click", () => {
    // create element error
    const DivError = document.createElement("div");
    DivError.className = "error_notification";
    document.body.appendChild(DivError);
    /*************************************************/
    // add active class to transition
    setTimeout(() => {
      DivError.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(() => {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 2000);
    /*************************************************/
    // remove element form page
    setTimeout(() => {
      DivError.remove();
    }, 2300);
  });
}

if (warningBTN) {
  warningBTN.addEventListener("click", () => {
    // create element warning
    const DivWarning = document.createElement("div");
    DivWarning.className = "warning_notification";
    document.body.appendChild(DivWarning);
    /*************************************************/
    // add active class to transition
    setTimeout(() => {
      DivWarning.classList.add("active");
    }, 10);
    /*************************************************/
    // stop click on btn some seconds
    setTimeout(() => {
      successBtn.disabled = false; // Re-enable the button after 5 seconds
    }, 2000);
    /*************************************************/
    // remove element form page
    setTimeout(() => {
      DivWarning.remove();
    }, 2300);
  });
}