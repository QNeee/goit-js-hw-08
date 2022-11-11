import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const STORAGE_FEEDBACK = 'feedback-msg';
const STORAGE_EMAIL = 'email-msg';
const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea")
};
function onFormSubmit(e) {
    console.log({ email: refs.input.value, textarea: refs.textarea.value });
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_FEEDBACK);
    localStorage.removeItem(STORAGE_EMAIL);
}
function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_FEEDBACK, message);
}
function onEmailInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_EMAIL, message);
}
function onSavedStorage() {
    const savedFeedback = localStorage.getItem(STORAGE_FEEDBACK);
    const savedEmail = localStorage.getItem(STORAGE_EMAIL);
    if (savedEmail) {
        refs.input.value = savedEmail;
    }
    if (savedFeedback) {
        refs.textarea.value = savedFeedback;
    }
}

refs.form.addEventListener("submit", onFormSubmit);
refs.input.addEventListener("input", throttle(onEmailInput, 500));
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
onSavedStorage();
