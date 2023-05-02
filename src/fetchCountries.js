import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name = 'Ukraine') {
  return fetch(
    `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(Notify.failure('Qui timide rogat docet negare'));
      }
      return resp.json();
    })
    .catch(err => err);
}

export { fetchCountries };
