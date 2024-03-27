import React from 'react'
import hero1 from '../assets/1.png'
import hero2 from '../assets/2.png'
import hero3 from '../assets/3.png'


const Slideshow = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide pt-5 mt-1" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={hero2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={hero3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slideshow;