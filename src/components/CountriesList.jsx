import CountryCard from "./CountryCard";

function CountriesList({ countries }) {
    return (
        <div className="countries-list">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountriesList;