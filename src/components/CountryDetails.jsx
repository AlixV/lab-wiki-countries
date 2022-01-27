import React from 'react';
import { useParams} from "react-router-dom";

const CountryDetails = (props) => {
    
	const params = useParams();

    const oneCountry = props.countries.find(
        (ctry) =>ctry.country.alpha3Code === params.alpha3Code)

  return (
  <div>
    <h1>{oneCountry.name.common}</h1>
    <p>{oneCountry.capital}</p>
    <p>{oneCountry.area}</p>

  </div>);
};

export default CountryDetails;

// This is the component that we will render via the 
// react-router-dom's Route, and 
// -> It should receive the country code (alpha3Code) via the URL.
// This is the id of the country (example: /ESP for Spain, 
// /FRA for France).

// App should have a state variable countries holding the data coming 
// from the src/countries.json file. The data from the state variable 
// countries should then be passed to the CountriesList component as a prop.

// Once done creating the components, the structure of elements that your 
// App.js will render should look somewhat like this:


// <div className="App">
//   <Navbar />

//   <div className="container">
//     <div className="row">
//       <CountriesList countries={countries} />
//       {/* React-Router Route rendering the CountryDetails should go here */}
//     </div>
//   </div>
// </div>



