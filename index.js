const clickFct = () => {
    const firstNameInput = document.querySelector('.inputDiv.firstName input');
    const firstNameError = document.querySelector('.errorText.firstName');
    const firstNameImg = document.querySelector('.inputDiv.firstName img');

    if(firstNameInput.value.length === 0) {
      firstNameInput.style.borderColor = "hsl(0, 100%, 74%)";
      firstNameError.style.display = "block";
      firstNameImg.style.opacity = "100%";
    }
    else {
      firstNameInput.style.borderColor = "hsl(246, 25%, 77%)";
      firstNameError.style.display = "none";
      firstNameImg.style.opacity = "0%";
    }

    const lastNameInput = document.querySelector('.inputDiv.lastName input');
    const lastNameError = document.querySelector('.errorText.lastName');
    const lastNameImg = document.querySelector('.inputDiv.lastName img');

    if(lastNameInput.value.length === 0) {
      lastNameInput.style.borderColor = "hsl(0, 100%, 74%)";
      lastNameError.style.display = "block";
      lastNameImg.style.opacity = "100%";
    }
    else {
      lastNameInput.style.borderColor = "hsl(246, 25%, 77%)";
      lastNameError.style.display = "none";
      lastNameImg.style.opacity = "0%";
    }

    const emailInput = document.querySelector('.inputDiv.email input');
    const emailError = document.querySelector('.errorText.email');
    const emailImg = document.querySelector('.inputDiv.email img');
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(emailInput.value).toLowerCase())) {
      emailInput.style.borderColor = "hsl(0, 100%, 74%)";
      emailError.style.display = "block";
      emailImg.style.opacity = "100%";
    }
    else {
      emailInput.style.borderColor = "hsl(246, 25%, 77%)";
      emailError.style.display = "none";
      emailImg.style.opacity = "0%";
    }

    const passwordInput = document.querySelector('.inputDiv.password input');
    const passwordError = document.querySelector('.errorText.password');
    const passwordImg = document.querySelector('.inputDiv.password img');

    if(passwordInput.value.length === 0) {
      passwordInput.style.borderColor = "hsl(0, 100%, 74%)";
      passwordError.style.display = "block";
      passwordImg.style.opacity = "100%";
    }
    else {
      passwordInput.style.borderColor = "hsl(246, 25%, 77%)";
      passwordError.style.display = "none";
      passwordImg.style.opacity = "0%";
    }
  }