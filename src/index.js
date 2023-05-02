import { fetchCountries } from './fetchCountries';
import './css/styles.css';
var debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  div: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  let name = evt.target.value;
  const trim = name.trim();

  if (!name) {
    refs.list.innerHTML = '';
    refs.div.innerHTML = '';
  }

  if (!trim) {
    return;
  } else {
    fetchCountries(trim).then(function (data = []) {
      creatMarkup(data);
    });
  }
}

function creatMarkup(arr) {
  const markup = arr
    .map(
      item =>
        `<li> 
        <img src="${item.flags.svg}" alt="" width="50" >
        <h2>${item.name.official}<h2>
        </li>`
    )
    .join('');
  if (arr.length <= 1) {
    creatDiv(arr);
  } else {
    refs.div.innerHTML = '';
  }

  if (arr.length >= 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
  refs.list.innerHTML = markup;
}

function creatDiv(arr) {
  const div = arr
    .map(function (item) {
      const value = Object.values(item.languages);
      return `<h3>Capital:${item.capital}</h3>
        <h3>Population:${item.population}</h3>
        <h3>Languages:${value}</h3>`;
    })
    .join(' ');

  refs.div.innerHTML = div;
}
