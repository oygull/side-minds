
import IMask from 'imask';

const cardMask = document.getElementById('cardInput');
if (cardMask) {
  IMask(
    cardMask,
    {
      mask: '0000-0000-0000-0000'
    });
}

const expInput = document.getElementById('expInput');
if (expInput) {
  IMask(
    expInput,
    {
      mask: '00/00'
    });
}

const cvcMask = document.getElementById('cvcInput');
if (cvcMask) {
  IMask(
    cvcMask,
    {
      mask: '000'
    });
}

const cardNumber = document.getElementById('cardNumber');
if (cardNumber) {
  IMask(
    cardNumber,
    {
      mask: '0000-0000-0000-0000'
    });
}

const exDate = document.getElementById('exDate');
if (exDate) {
  IMask(
    exDate,
    {
      mask: '00/00'
    });
}

const cvv = document.getElementById('cvv');
if (cvv) {
  IMask(
    cvv,
    {
      mask: '000'
    });
}
