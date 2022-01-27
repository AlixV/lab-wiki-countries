import React from 'react';
import { Link, Outlet } from "react-router-dom";
// import CountryDetails from "./CountryDetails"


const CountriesList = ({countries}) => {
  return (
      <>
    <div>
        <ul>
            {countries.map((country) => {
                return(
                    <li key={country.name.common}>
                    <Link to={country.alpha3Code}>{country.name.common}</Link>
                    </li>
                 )
            })}
        </ul>
    </div>
    <div>
        <Outlet/>
    </div>
    </>
  )
};

export default CountriesList;


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
