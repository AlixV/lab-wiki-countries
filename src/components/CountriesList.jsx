import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import CountryDetails from "./CountryDetails"

const CountriesList = ({ countries }) => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div>
        {countries.length > 0 ? (
          <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            {/* Modifier 'style' provenant de l'exemple */}
            <div class="list-group">
              {countries.map((country) => {
                return (
                  <div>
                    <Link
                      //   key={country.alpha3Code} non ?
                      //   to={`/${country.alpha3Code}`} fonctionne aussi
                      to={country.alpha3Code}
                      key={country.name.common}
                      className="list-group-item list-group-item-action"
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        alt={country.name.common + "'s flag"}
                      />
                      <p>{country.name.common}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>Don't worry, it's loading...</p>
        )}
      </div>
    </>
  );
};

export default CountriesList;

// <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link> MARCHE

// Mes liens ne fonctionnent pas.
// - Supression des ul et li

//<ul>
//  {countries.map((country) => {
//   return (
//    <div>
//     <li key={country.alpha3Code}>
//       <Link to={country.alpha3Code}>{country.name.common}</Link>
//    </li>
//  </div>
//  );
//  })}
//  </ul>

// Displays the list of links with the country names.
// Each link should be a react-router-dom Link which
// we will use to send the country code (alpha3Code)
// via the URL.

// return (
//     <div>
//         <Outlet />
//         <ul>
//             {pokemons.map((pokemon) => {
//                 const id = String(pokemon.id);
//                 return (
//                     <li className="pokemon" key={pokemon.id}>
//                         <img src={pokemon.picture} alt={pokemon.name} />
//                         <Link to={id}>{pokemon.name}</Link>
//                     </li>
//                 );
//             })}
//         </ul>
//     </div>
// );
