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
const cardComplete = document.querySelector('.card-complete');
const btnContinue = document.querySelector('#btn-continue');
const ccNumber = document.querySelector('#cc-number');
let isValid = true;
let cvcValid = true;
let cardValid = true;

const getCardNumber = (e) => {
  const input = e.target;
  let inputValue = input.value.replace(/\s/g, '');
  const formattedValue = inputValue.replace(/(.{4})/g, '$1 ');
  return (input.value = formattedValue.trim());
};

cardNumber.addEventListener('input', (e) => {
  const cardNumber = getCardNumber(e);
  ccNumber.textContent = cardNumber;
});

cardNumber.addEventListener('blur', (e) => {
  const cardNumber = e.target.value.replace(/\s+/g, '');

  if (cardNumber.length !== 16) {
    cardNumberError.textContent =
      'Please enter 16 digits for your credit card!!';
    cardNumberError.classList.add('text-red-500', 'text-xxs', 'pt-2');
    cardValid = false;
  } else {
    cardNumberError.textContent = '';
    cardValid = true;
  }
});

cardHolderName.addEventListener('input', (e) => {
  const value = e.target.value;
  cardName.textContent = value;
});

cvcNo.addEventListener('input', (e) => {
  const value = e.target.value;

  if (value.length === 3) {
    cvcInfo.textContent = value;
    cvcValid = true;
  } else {
    cvcError.textContent = 'Please enter 3 digits for cvc';
    cvcError.classList.add('pt-2', 'text-red-600', 'text-xxs');
    cvcValid = false;
  }
});

const validateForm = (e) => {
  e.preventDefault();
  const isNumber = /^[\d\s]+$/;

  if (cardNumber.value === '') {
    cardNumberError.textContent = "Can't be blank";
    cardNumberError.classList.add('pt-8', 'text-red-600', 'text-xs');
    isValid = false;
  } else {
    if (!isNumber.test(cardNumber.value)) {
      cardNumberError.textContent = 'Wrong format, numbers only!';
      cardNumberError.classList.add('pt-2', 'text-red-600', 'text-xs');
      isValid = false;
    } else {
      cardNumberError.textContent = '';
    }
  }

  if (expMonth.value === '') {
    expMonthError.textContent = "Can't be blank";
    expMonthError.classList.add('pt-2', 'text-red-600', 'text-xxs');
    isValid = false;
  } else {
    expMonthError.textContent = '';
  }

  if (expYear.value === '') {
    expYearError.textContent = "Can't be blank";
    expYearError.classList.add('pt-2', 'text-red-600', 'text-xxs');
    isValid = false;
  } else {
    expYearError.textContent = '';
  }

  if (cvcNo.value === '') {
    cvcError.textContent = "Can't be blank";
    cvcError.classList.add('pt-2', 'text-red-600', 'text-xs');
    isValid = false;
  } else {
    cvcError.textContent = '';
  }

  if (!cardValid || !cvcValid) {
    isValid = false;
  } else {
    isValid = true;
  }

  console.log(isValid);

  if (isValid) {
    form.style.display = 'none';
    cardComplete.style.display = 'block';
  }
};

const updateCardExpiry = () => {
  const month = expMonth.value.slice(0, 2);
  const year = expYear.value.slice(0, 2);
  expInfo.textContent = `${month || 'MM'}/${year || 'YY'}`;
};

form.addEventListener('submit', validateForm);
expMonth.addEventListener('input', updateCardExpiry);
expYear.addEventListener('input', updateCardExpiry);
btnContinue.addEventListener('click', () => {
  form.reset();
  form.style.display = 'block';
  cardComplete.style.display = 'none';
});
