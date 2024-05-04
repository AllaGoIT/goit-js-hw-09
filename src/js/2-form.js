const formData = {
    email: document.querySelector('.place-input'),
    message: document.querySelector('.massage-input-text'),
}
const { email, message } = formData;
//console.log(email);
//console.log(message);

formData.message.addEventListener('input', onTextareaInput);
formData.email.addEventListener('input', onTextareaInput);

function onTextareaInput(event) {
event.preventDefault();
event.target.value.toLowerCase();
 localStorage.setItem("feedback-form-state", event.target.value);
}



function fillTextareaField() {
    const messageText = localStorage.getItem(feedback - form - state);
    formData.message.value = messageText;
  //console.log(messageText);
  if (!messageText) {
    const result = `Fill please all fields`;
    console.log(result);
  }
  
}

function fillEmailField() {
    const emailText = localStorage.getItem(feedback - form - state);
    formData.email.value = emailText;
  //console.log(emailText);
  if (!emailText) {
    const result = `Fill please all fields`;
    console.log(result);
    }
     else {
       console.log(formData);
       formData.reset();
    }
  
}
















// const formData = {
//     email: "",
//     message: "",
//     feedbackFormState: "",
// }
// const inputE = document.querySelector("feedback-form");
// inputE.addEventListener("input", typeText);

// function typeText(event) {
//     event.preventDefault();
//     const value = event.target.value.toLowerCase();
//     //console.log(value);
//     const filtredItems = items.filter(item => item.textContent.toLowerCase().includes(value));
//     if (filtredItems) {
//         const savedTheme = localStorage.getItem(filtredItems); 
//         localStorageStorage.setItem(formData.feedbackFormState, savedTheme);
//     //console.log(savedTheme); 
//     }
//     else {
//         return;
//     }

//     if (!formData === value) {
//         console.log(`Fill please all fields`);
//     }
//     else {
//         console.log(formData);
//         formData.reset();
//     }

// }




