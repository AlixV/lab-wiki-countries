import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"> WIKI COUNTRIES NAVBAR </NavLink>
      </nav>
    </div>
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
