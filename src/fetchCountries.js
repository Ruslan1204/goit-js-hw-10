const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name = 'Ukraine') {
  return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(err => console.error(err));
}

// fetchCountries()
// .then(data => data)

export { fetchCountries };
