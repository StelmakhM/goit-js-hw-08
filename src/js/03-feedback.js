import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_FORM_DATA = 'feedback-form-state';
const { email, message } = form.elements;
const formValues = {};
let dataFromStorage = null;

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateInputs();

function onFormInput(e) {
  formValues.email = email.value;
  formValues.message = message.value;
  localStorage.setItem(STORAGE_FORM_DATA, JSON.stringify(formValues));
}

function onFormSubmit(e) {
  e.preventDefault();
  dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_FORM_DATA));
  if (dataFromStorage) {
    console.log(dataFromStorage);
  }
  localStorage.removeItem(STORAGE_FORM_DATA);
  e.currentTarget.reset();
}

function populateInputs() {
  dataFromStorage = JSON.parse(localStorage.getItem(STORAGE_FORM_DATA));

  if (dataFromStorage) {
    email.value = dataFromStorage.email;
    message.value = dataFromStorage.message;
  }
}
