import { useEffect, useState } from "react";
import './App.css'
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountriesList from "./components/CountriesList";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const fetchCountries = async () => {
    try {

      setLoading(true);
      setError(null);

      let url = "";

      if (search.length >= 2) {
        url = `https://restcountries.com/v3.1/name/${search}`;
      }
      else if (region !== "all") {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }
      else {
        url = `https://restcountries.com/v3.1/all`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await response.json();

      setCountries(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchCountries();

  }, [search, region]);

  return (
    <div>

      <h1>Countries Explorer</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <RegionFilter region={region} setRegion={setRegion} />

      {loading && <Loading />}

      {error && <ErrorMessage error={error} retry={fetchCountries} />}

      {!loading && !error && <CountriesList countries={countries} />}

    </div>
  );
}

export default App;

