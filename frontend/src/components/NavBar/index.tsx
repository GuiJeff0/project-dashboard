import React from 'react';
import ImgLogo from 'assets/img/painel-de-controle.png'

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <img src={ImgLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" ></img>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;