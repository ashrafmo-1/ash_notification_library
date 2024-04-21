// Get button element to control on click event
const successBtn = document.querySelector(".sucsess") as HTMLButtonElement;
const errorBtn = document.querySelector(".error") as HTMLButtonElement;
const warningBTN = document.querySelector(".warning") as HTMLButtonElement;

const success_alert_Ash = () => {
  if (successBtn) {
    successBtn.addEventListener("click", () => {
      // create element successfully
      const DivSuccess = document.createElement("div");
      DivSuccess.className = "success_notification";
      /*************************************************/
      // btn content
      const divIconStatus = document.createElement("div");
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.position = "relative";
      const content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/check.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivSuccess.appendChild(divIconStatus);
      /*************************************************/
      const title = document.createElement("span");
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
      setTimeout(() => {
        DivSuccess.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(() => {
        successBtn.disabled = true;
      }, 0);
      setTimeout(() => {
        successBtn.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(() => {
        DivSuccess.remove();
      }, 3500);
    });
  }
}
const warning_alert_Ash = () =>{
  if (warningBTN) {
    warningBTN.addEventListener("click", () => {
      // create element warning
      const DivWarning = document.createElement("div");
      DivWarning.className = "warning_notification";
      // btn content
      const divIconStatus = document.createElement("div");
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.position = "relative";
      const content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/warning.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivWarning.appendChild(divIconStatus);
      /*************************************************/
      const title = document.createElement("span");
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
      setTimeout(() => {
        DivWarning.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(() => {
        warningBTN.disabled = true;
      }, 0);
      setTimeout(() => {
        warningBTN.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(() => {
        DivWarning.remove();
      }, 2300);
    });
  }
  
}
const error_alert_Ash = () =>{
  if (errorBtn) {
    errorBtn.addEventListener("click", () => {
      // create element error
      const DivError = document.createElement("div");
      DivError.className = "error_notification";
      // btn content
      const divIconStatus = document.createElement("div");
      divIconStatus.style.width = "50px";
      divIconStatus.style.height = "100%";
      divIconStatus.style.backgroundColor = "#EEE";
      divIconStatus.style.position = "relative";
      const content_iconLeft = document.createElement("img");
      content_iconLeft.src = "../../assets/error.png";
      content_iconLeft.style.position = "absolute";
      content_iconLeft.style.width = "100%";
      content_iconLeft.style.height = "100%";
      content_iconLeft.style.padding = "10px";
      divIconStatus.appendChild(content_iconLeft);
      DivError.appendChild(divIconStatus);
      /*************************************************/
      const title = document.createElement("span");
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
      setTimeout(() => {
        DivError.classList.add("active");
      }, 10);
      /*************************************************/
      // stop click on btn some seconds
      setTimeout(() => {
        errorBtn.disabled = true;
      }, 0);
      setTimeout(() => {
        errorBtn.disabled = false;
      }, 3500);
      /*************************************************/
      // remove element form page
      setTimeout(() => {
        DivError.remove();
      }, 2500);
    });
  }
}

success_alert_Ash();
warning_alert_Ash();
error_alert_Ash();