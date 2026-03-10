function CountryCard({ country }) {
    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.name.common} width="100" />

            <h3>{country.name.common}</h3>

            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0]}</p>
        </div>
    );
}

export default CountryCard;


