/* HIDE OR SHOW PASSWORD */
function toggleVisibility() {
  var getPassword = document.getElementById("pswrd");
  if (getPassword.type === "password") {
    getPassword.type = "text";
    const eyes = document.getElementsByClassName("bi-eye-slash");

    eyes[0].className = "bi-eye";
  }
  else {
    getPassword.type = "password";
    const eyes = document.getElementsByClassName("bi-eye");

    eyes[0].className = "bi-eye-slash";
  }
}
function toggleVisibility1() {
  var getPassword = document.getElementById("pswrd1");
  if (getPassword.type === "password") {
    getPassword.type = "text";
    const eyes = document.getElementsByClassName("bi-eye-slash");

    eyes[0].className = "bi-eye";
  }
  else {
    getPassword.type = "password";
    const eyes = document.getElementsByClassName("bi-eye");

    eyes[0].className = "bi-eye-slash";
  }
}

/* ACTIVE NAVBAE */
// Get the container element
var header = document.getElementById("nav1");
var btns = header.getElementsByClassName("ntb");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

/* LOGIN & REGISTER */
const wrapper      = document.querySelector('.wrapper');
const loginLink    = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup     = document.querySelector('.btnLogin-popup');
const iconClose    = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');

});
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');

});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');

});
