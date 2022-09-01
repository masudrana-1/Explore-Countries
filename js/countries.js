const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesCountainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;

        countriesCountainer.appendChild(countryDiv);
    });
}

loadCountryDetail = (cCode) => {
    // https://restcountries.com/v3.1/alpha/{code}

    const url = `https://restcountries.com/v3.1/alpha/${cCode}`
    // console.log('get country detail', cCode);

    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}

const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}

loadCountries();