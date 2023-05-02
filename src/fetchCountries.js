import { Notify } from 'notiflix/build/notiflix-notify-aio';

function fetchCountries(name = 'Ukraine') {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  return fetch(
    `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(Notify.failure('Oops, there is no country with that name'));
      }
      return resp.json();
    })
    .catch(err => console.log(err));
}

export { fetchCountries };
