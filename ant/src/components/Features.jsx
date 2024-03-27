import React from 'react'

const Features = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
        
    <h2 className="pb-2 border-bottom">Maintaining a positive reputation and Client satisfaction</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}} >
        <iframe src="https://www.trulia.com/" height={400}></iframe>
        </div>

      </div>

      <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}} >
        <iframe src="https://kaminari.click/" height={400}></iframe>
        </div>
      </div>

      <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}} >
        <iframe src="https://www.recipetineats.com/" height={400}></iframe>
        </div>
      </div>
      <div className=' container mt-5' style={{width: "100rem"}}>
        <h1>Let's Create Something Extraordinary:</h1>
        <div >
        <h3 className='fw-light'>
Whether you're a startup looking to make a splash or an established enterprise seeking a digital facelift, Tronz labs is here to bring your vision to life. Let's collaborate and embark on a journey to elevate your online presence to new heights. Get in touch with us today and let's create something extraordinary together.</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features