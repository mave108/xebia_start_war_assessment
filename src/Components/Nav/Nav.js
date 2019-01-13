import React from 'react';
import Logo from '../../assests/images/logo.png';

const Nav = (props) =>{
  
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand"><img src={Logo} alt="logo" width="80"/></a>
           <ul className="navbar-nav mr-auto float-right">
              <li className="nav-item">
                 <a className="nav-link" href="#">Welcome {props.userName}</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#" onClick={props.logout}>Logout</a>
              </li>
           </ul>
        </nav>
    );
}

export default Nav;