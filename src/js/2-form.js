
let formData = {
  email: "",
  message: ""
};

const dataEl = document.querySelector('.feedback-form');

dataEl.addEventListener("input", onInput);
dataEl.addEventListener("submit", onSubmit);

fillFields();

function onInput(event) {
  //event.preventDefault(); 
  const inputValue = event.target.value.trim();

  if (event.target === dataEl.elements.email) {
    formData.email = inputValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
  else {
    formData.message = inputValue;
  }
}

function onSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    //localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
    console.log(formData);
    dataEl.reset();
    formData.email = "";
    formData.message = "";
  }
  else {
    alert(`Fill please all fields`);
  }
  //dataEl.reset();
  //localStorage.removeItem("feedback-form-state");
  //formData.email = "";
  //formData.message = "";
}

function fillFields() {
  const dataText = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (dataText !== null) {
    formData = dataText;
  }
  console.log(formData);
  dataEl.elements.email.value = formData.email;
  dataEl.elements.message.value = formData.message;
}





  






















