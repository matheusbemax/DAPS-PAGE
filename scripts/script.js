$(document).ready(function () {
  "use strict";

  $(".form-steps .step-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".form-steps").next().addClass("active");
    $(this).parents(".form-steps").removeClass("active");
  });

  $("#btn-submit").on("click", function (e) {
    e.preventDefault();
  });

  /*--------------------------------------------
  Donation
  --------------------------------------------*/

  $(".amount-preset span").on("click", function () {
    $(".amount-preset span").removeClass("activeValue");
    $(this).addClass("activeValue");
  });

  $(".amount-preset .container-amount").on("click", function () {
    $(".amount-preset .container-amount").removeClass("activeValue");
    $(this).addClass("activeValue");
  });

  $(".custom-donation").on("click", function () {
    $(".amount-preset span").removeClass("activeValue");
  });
});
function toggleModal() {
  const modal = document.querySelector("div.modal-checkbox");
  if (modal.classList.contains("modal-closed")) {
    modal.classList.remove("modal-closed");
  } else {
    modal.classList.add("modal-closed");
  }
}
function modalBilling() {
  const inputName = document.querySelector("#inputName");
  const inputLastName = document.querySelector("#inputLastName");
  const inputAdress = document.querySelector("#inputAdress");
  const inputCity = document.querySelector("#inputCity");
  const inputState = document.querySelector("#inputState");
  const inputCountry = document.querySelector("#inputCountry");
  const inputPostalCode = document.querySelector("#inputPostalCode");

  const inputBillingName = document.querySelector("#inputBillingName");
  const inputBillingLastName = document.querySelector("#inputBillingLastName");
  const inputBillingAdress = document.querySelector("#inputBillingAdress");
  const inputBillingCity = document.querySelector("#inputBillingCity");
  const inputBillingState = document.querySelector("#inputBillingState");
  const inputBillingCountry = document.querySelector("#inputBillingCountry");
  const inputBillingPostalCode = document.querySelector(
    "#inputBillingPostalCode"
  );

  inputBillingName.value = inputName.value;
  inputBillingLastName.value = inputLastName.value;
  inputBillingAdress.value = inputAdress.value;
  inputBillingCity.value = inputCity.value;
  inputBillingState.value = inputState.value;
  inputBillingCountry.value = inputCountry.value;
  inputBillingPostalCode.value = inputPostalCode.value;
}
