import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector(".feedback-form textarea")
};
function onFormSubmit(e) {
    e.preventDefault();
    const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    e.currentTarget.reset();
    console.log(objData);
    localStorage.removeItem(STORAGE_KEY);
}
function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);
}
function onSaveToStorage() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage === null) {
        return;
    }
    refs.textarea.value = savedMessage['message'] || "";
    refs.input.value = savedMessage['email'] || "";
}

onSaveToStorage();
refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput, 500));

