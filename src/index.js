import './styles/style.css';

const form = document.querySelector('#form');
const cardHolderName = document.querySelector('#cardholder-name');
const cardNumber = document.querySelector('#card-number');
const expMonth = document.querySelector('#expiry-month');
const expYear = document.querySelector('#expiry-year');
const cvcNo = document.querySelector('#cvc');
const cardError = document.querySelector('#cardError');

cardNumber.addEventListener('input', (e) => {
  const input = e.target;
  let inputValue = input.value.replace(/\s/g, '');
  const formattedValue = inputValue.replace(/(.{4})/g, '$1 ');
  input.value = formattedValue;
});

const validateForm = (e) => {
  e.preventDefault();

  console.log([cardHolderName, cardNumber, expMonth, expYear, cvcNo]);
};

form.addEventListener('submit', validateForm);
