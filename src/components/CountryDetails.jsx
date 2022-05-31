import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const [theCountry, setTheCountry] = useState({});
  const [borders, setBorders] = useState([]);

  // const {countryAlpha3Code} = useParams(); <-Arthur

  // - ITERATION PRÉCÉDENTE :use countries en props -
  // const theCountry = countries.find(
  //   (ctry) => ctry.alpha3Code === params.alpha3Code
  // );

  console.log('1 params : ' + params);
  console.log('2 params.alpha3Code : ' + params.alpha3Code);

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`
      )
      .then(({ data }) => {
        // Et non : .then((res) => {
        console.log('3 data : ' + data);
        setTheCountry(data);
      })
      .catch((err) => console.log(err));
  }, [params.alpha3Code]);
  console.log('4 theCountry : ' + theCountry);

  useEffect(() => {
    // useEffect pour autre chose que requete axios
    if (!theCountry.borders) return;
    const bordersToAdd = theCountry.borders.map((borderAlpha3Code) => {
      const nameBorder = countries.find(
        (country) => country.alpha3Code === borderAlpha3Code
      );
      return nameBorder.name.common;
    });
    setBorders(bordersToAdd);
  }, [theCountry]);

  // Au choix pour .get('https://ih-countries-api.herokuapp.com/countries/' + params.alpha3Code)

  if (!theCountry.name) return <div> Loading... </div>; // IMPORTANT, sinon fonctionne pas !
  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${theCountry.alpha2Code.toLowerCase()}.png`}
        alt={theCountry.name.common + "'s flag"}
      />
      <h1>{theCountry.name.common}</h1>
      <table className="table">
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
                {borders.length === 0 ? (
                  <p> {theCountry.name.common} has no bordering countries</p>
                ) : (
                  borders.map((ctry, i) => {
                    return (
                      <li key={ctry} style={{ listStyleType: 'none' }}>
                        <Link to={`/${theCountry.borders[i]}`}>{ctry}</Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;

/* 
Méthode SANS LE 2ND USE EFFECT :
<ul>
                {theCountry.borders.length === 0 ? (
                  <p> No bordering countries</p>
                ) : (
                  theCountry.borders.map((borderAlpha3Code) => { JE LE FAISAIS POUR CHAQUE
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
            */

/*  PREMIERS ESSAIS :
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
              */

// const bordersCountry = theCountry.borders.map((borderAlphaCode) => {
//   const nameBorder = countries.find(
//     (country) => country.alpha3Code === borderAlphaCode
//   );
//   return nameBorder.name.common;
// });
// console.log('---> typeof bordersCountry : ' + typeof bordersCountry);
// console.log(bordersCountry);

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
