let wrapper = document.querySelector('.wrapper') as HTMLDivElement;

let registerLink = document.querySelector('.register-link') as HTMLAnchorElement;

let loginLink = document.querySelector('.login-link') as HTMLAnchorElement;

let loginButton = document.querySelector('.btn-login') as HTMLButtonElement;

let closeIcon = document.querySelector('.close-icon') as HTMLSpanElement;
console.log(closeIcon);

registerLink.addEventListener('click', () =>{
    
   wrapper.classList.add('active');
  
})



loginLink.addEventListener('click', () =>{
    
    wrapper.classList.remove('active');
   
 })


 loginButton.addEventListener('click', () => {

    wrapper.classList.add('login-button-active');
 })


 closeIcon.addEventListener('click', () => {
        console.log('close icon clicked')
    wrapper.classList.remove('login-button-active');
 })