import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import data from "./countries.json";
import Error from './components/Error';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => {
        setCountries(
          res.data.sort((a, b) =>
            a.name.common.localeCompare(b.name.localeCompare)
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          {/* <CountriesList countries={countries} />
              <Routes>
                <Route
                  path="/:id"
                  element={<CountryDetails countries={countries} />}
                />
              </Routes> */}

          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />}>
              <Route
                path="/:alpha3Code"
                element={<CountryDetails countries={countries} />}
              />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// Ou pas de route pour CountryList ? hmmmm
// et  path="/:id"  :
//   <CountriesList countries={countries} />
//   <Routes >
//     <Route path="/:id" element={ <CountryDetails countries={countries} />} />
//   </Routes>

// Iteration 3 | Fetch countries data from an API
// Instead of relying on the static data from a json file,
// let's get the data from an actual API.

// In App.js, make a GET request to the URL
// https://ih-countries-api.herokuapp.com/countries. Use the data returned
// from the response as the list of the countries.
// => use either fetch or axios to make the request.

// You should use the useEffect() hook to set an effect that runs only once
// and makes a request to the API. Once you receive the response data,
// save it in a state variable. The request should happen first thing
// when the application loads.
