var formSubmit = document.querySelector(".form__submit");
var formSuccess = document.querySelector(".form-success");
var formFail = document.querySelector(".form-fail");
var successClose = document.querySelector(".form-success__close");
var failClose = document.querySelector(".form-fail__ok");
var headerMenu = document.querySelector(".header-menu");
var navToggle = document.querySelector(".header-menu__toggle");
var headerStripe = document.querySelector(".header-stripe");
headerMenu.classList.remove("header-menu--nojs");
headerStripe.classList.remove("header-stripe--nojs");
if (headerMenu.classList.contains("header-menu--nojs")) {
  headerStripe.classList.add("header-stripe--bg");
}
else {
  headerStripe.classList.remove("header-stripe--bg");
}
navToggle.addEventListener("click", function () {
  if (headerMenu.classList.contains("header-menu--closed")) {
    headerMenu.classList.remove("header-menu--closed");
    headerMenu.classList.add("header-menu--opened");
    headerStripe.classList.add("header-stripe--bg");
  }
  else {
    headerMenu.classList.remove("header-menu--opened");
    headerMenu.classList.add("header-menu--closed");
    headerStripe.classList.remove("header-stripe--bg");
  }
});
formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  formSuccess.classList.add("form-success--show");
});
successClose.addEventListener("click", function (event) {
  formSuccess.classList.remove("form-success--show");
});
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (formSuccess.classList.contains("form-success--show")) {
      formSuccess.classList.remove("form-success--show");
    }
  }
});
