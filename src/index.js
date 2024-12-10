import './styles/style.css';

const form = document.querySelector('#form');
const cardHolderName = document.querySelector('#cardholder-name');
const cardNumber = document.querySelector('#card-number');
const expMonth = document.querySelector('#expiry-month');
const expYear = document.querySelector('#expiry-year');
const cvcNo = document.querySelector('#cvc');
const cardNumberError = document.querySelector('#card-number-error');
const expMonthError = document.querySelector('#exp-month-error');
const expYearError = document.querySelector('#exp-year-error');
const cvcError = document.querySelector('#cvc-error');
const cardName = document.querySelector('#card-name');
const expInfo = document.querySelector('#exp-info');
const cvcInfo = document.querySelector('#cvc-info');

cardNumber.addEventListener('input', (e) => {
  const input = e.target;
  let inputValue = input.value.replace(/\s/g, '');
  const formattedValue = inputValue.replace(/(.{4})/g, '$1 ');
  input.value = formattedValue.trim();
});

cardHolderName.addEventListener('input', (e) => {
  const value = e.target.value;
  cardName.textContent = value;
});

cvcNo.addEventListener('input', (e) => {
  const value = e.target.value;
  cvcInfo.textContent = value;
});

const validateForm = (e) => {
  e.preventDefault();

  const isNumber = /^[\d\s]+$/;

  if (cardNumber.value === '') {
    cardNumberError.textContent = "Can't be blank";
    cardNumberError.classList.add('pt-8', 'text-red-600', 'text-xs');
  } else {
    if (!isNumber.test(cardNumber.value)) {
      cardNumberError.textContent = 'Wrong format, numbers only!';
      cardNumberError.classList.add('pt-2', 'text-red-600', 'text-xs');
    } else {
      cardNumberError.textContent = '';
    }
  }

  if (expMonth.value === '') {
    expMonthError.textContent = "Can't be blank";
    expMonthError.classList.add('pt-2', 'text-red-600', 'text-xxs');
  } else {
    expMonthError.textContent = '';
  }

  if (expYear.value === '') {
    expYearError.textContent = "Can't be blank";
    expYearError.classList.add('pt-2', 'text-red-600', 'text-xxs');
  } else {
    expYearError.textContent = '';
  }

  if (cvcNo.value === '') {
    cvcError.textContent = "Can't be blank";
    cvcError.classList.add('pt-2', 'text-red-600', 'text-xs');
  } else {
    cvcError.textContent = '';
  }
};

const updateCardExpiry = () => {
  const month = expMonth.value.padStart(2, '0');
  const year = expYear.value.padStart(2, '0');
  expInfo.textContent = `${month || 'MM'}/${year || 'YY'}`;
};

form.addEventListener('submit', validateForm);
expMonth.addEventListener('input', updateCardExpiry);
expYear.addEventListener('input', updateCardExpiry);
