import React from 'react';
import GitHubImg from 'assets/img/github.png'
import LinkedinImg from 'assets/img/linkedin.png'
import GmailImg from 'assets/img/logotipo-do-gmail.png'
const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex mt-auto flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
           
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">Guilherme Santos</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="https://github.com/GuiJeff0"><img src ={GitHubImg} className="bi" width="24" height="24"></img></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="https://www.linkedin.com/in/guilherme-santos-8512a1176/"><img src = {LinkedinImg} className="bi" width="24" height="24"></img></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="mailto:guilhermejeffofc@gmail.com"><img src = {GmailImg}className="bi" width="24" height="24"></img></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;