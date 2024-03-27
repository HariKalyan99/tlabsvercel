import React from 'react'
import logo from '../assets/Ao sd.png'

const Header = () => {
  return (
    <div>
        <header>
            
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} alt="logo" height={40}/></a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" aria-current="page" href="#about">AboutUs</a>
          </li>
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          
          <li className="nav-item px-5">
            <a className="nav-link" href="#custom-cards">Features</a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item px-5">
            <a className="nav-link" href="#testimonials">WhyChooseUs!</a>
          </li>
        </ul>
        

      </div>
    </div>
  </nav>
  
</header>

    </div>
  )
}

export default Header