const form = document.getElementById("email-form");
const button = document.getElementById("button-form");
const message = document.getElementById("error-message");
const icon = document.getElementById("icon-error");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputEmail = form.childNodes[1].childNodes[1];
  const validate = validateEmail(inputEmail.value)
  const objClass = {show: "text--show", hide: "text--hide"} 
  if (validate) {
    inputEmail.classList.remove("input__email--error")
    const correctObj = {add: objClass.hide, remove: objClass.show}
    addRemoveClass(message, correctObj)
    addRemoveClass(icon, correctObj)
  } else {
    inputEmail.classList.add("input__email--error");
    const errorObj = {add: objClass.show, remove: objClass.hide}
    addRemoveClass(message, errorObj)
    addRemoveClass(icon, errorObj)
  }
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

const addRemoveClass = (element, {add, remove}) => {
  element.classList.remove(remove)
  element.classList.add(add)
}
