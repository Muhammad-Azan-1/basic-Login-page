"use strict";
let wrapper = document.querySelector('.wrapper');
let registerLink = document.querySelector('.register-link');
let loginLink = document.querySelector('.login-link');
let loginButton = document.querySelector('.btn-login');
let closeIcon = document.querySelector('.close-icon');
console.log(closeIcon);
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
loginButton.addEventListener('click', () => {
    wrapper.classList.add('login-button-active');
});
closeIcon.addEventListener('click', () => {
    console.log('close icon clicked');
    wrapper.classList.remove('login-button-active');
});
