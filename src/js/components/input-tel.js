import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/js/utils';

let inputTwo = document.querySelector(".input__tel-countryTwo");
let inputThree = document.querySelector(".input__tel-countryThree");
let inputFour = document.querySelector(".input__tel-countryFour");

if (inputTwo) {
  intlTelInput(inputTwo, {
    // any initialisation options go here
    initialCountry: "us",
    separateDialCode: true,
    formatOnDisplay: true,
  });

  $(document).ready(function ($) {
    // IMask(inputTwo, { mask:  mask1})
    let mask1 = $(".input__tel-countryTwo").attr('placeholder').replace(/[0-9]/g, 0);

    $('.input__tel-countryTwo').mask(mask1)

    $(".input__tel-countryTwo").on("countrychange", (e, countryData) => {
      $(".input__tel-countryTwo").val('');
      var mask1 = $(".input__tel-countryTwo").attr('placeholder').replace(/[0-9]/g, 0);
      $('.input__tel-countryTwo').mask(mask1);
    });

  });
}

if (inputThree) {
  intlTelInput(inputThree, {
    // any initialisation options go here
    initialCountry: "us",
    separateDialCode: true,
  });

  $(document).ready(function ($) {
    // IMask(inputTwo, { mask:  mask1})
    let mask2 = $(".input__tel-countryThree").attr('placeholder').replace(/[0-9]/g, 0);

    $('.input__tel-countryThree').mask(mask2)

    $(".input__tel-countryThree").on("countrychange", (e, countryData) => {
      $(".input__tel-countryThree").val('');
      var mask2 = $(".input__tel-countryThree").attr('placeholder').replace(/[0-9]/g, 0);
      $('.input__tel-countryThree').mask(mask2);
    });

  });

}

if (inputFour) {
  intlTelInput(inputFour, {
    // any initialisation options go here
    initialCountry: "us",
    separateDialCode: true,
  });

  $(document).ready(function ($) {
    // IMask(inputTwo, { mask:  mask1})
    let mask3 = $(".input__tel-countryFour").attr('placeholder').replace(/[0-9]/g, 0);

    $('.input__tel-countryFour').mask(mask3)

    $(".input__tel-countryFour").on("countrychange", (e, countryData) => {
      $(".input__tel-countryFour").val('');
      var mask3 = $(".input__tel-countryFour").attr('placeholder').replace(/[0-9]/g, 0);
      $('.input__tel-countryFour').mask(mask3);
    });

  });
}




