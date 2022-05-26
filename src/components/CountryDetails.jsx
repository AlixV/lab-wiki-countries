import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const params = useParams();

  const theCountry = countries.find(
    (ctry) => ctry.alpha3Code === params.alpha3Code
    // mon erreur  (ctry) => ctry.country.alpha3Code === params.alpha3Code
    // (country) => country.alpha3Code === params.id Armelle
  );
  console.log(theCountry);

  // const bordersCountry = theCountry.borders.map((borderAlphaCode) => {
  //   const nameBorder = countries.find(
  //     (country) => country.alpha3Code === borderAlphaCode
  //   );
  //   return nameBorder.name.common;
  // });
  // console.log('---> typeof bordersCountry : ' + typeof bordersCountry);
  // console.log(bordersCountry);

  // EN COURS
  return (
    <div class="col-7">
      <h1>{theCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{theCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {theCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {theCountry.borders.length === 0 ? (
                  <p> This country has no bordering countries</p>
                ) : (
                  theCountry.borders.map((borderAlpha3Code) => {
                    const nameBorder = countries.find(
                      (country) => country.alpha3Code === borderAlpha3Code
                    );
                    return (
                      <li
                        style={{ listStyleType: 'none' }}
                        key={nameBorder.name.common}
                      >
                        <Link to={'/' + borderAlpha3Code}>
                          {nameBorder.name.common}
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>

              {/* 
              <ul>
                {bordersCountry.length === 0 ? (
                  <p> This countries has no bordering countries</p>
                ) : (
                  {bordersCountry.map((border)=>{
                  return(
                    <li>
                {border}

                <Link to={theCountry.alpha3Code}>{theCountry.border}</Link> 
                 </li>

                  )
            })} 
                )}
              </ul> 
              */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;

// si border, pour chaque border link to alpha3Code et comon name
// le code border doit être converti en nom pays

/* <div>
<h1>{theCountry.name.common}</h1>
<p>{theCountry.capital}</p>
<p>{theCountry.area}</p>

</div> */

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
