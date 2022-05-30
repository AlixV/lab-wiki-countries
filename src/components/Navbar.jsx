import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {' '}
          WIKI COUNTRIES NAVBAR{' '}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import {Link} from "react-router-dom";
// //  <NavLink to="/countrieslist"> <h2> LAB WIKI COUNTRIES </h2></NavLink>  différences between link and navlink ?

// const Navbar = () => {
//   return (

//   <nav>
//     <div>
//       <Link to="/">
//       WIKI COUNTRIES
//       </Link>
//     </div>

//   </nav>

//   )
// };

// export default Navbar;
