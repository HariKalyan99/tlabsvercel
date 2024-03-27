import React from 'react'

const Pricing = () => {
  return (
    <div className='container' id='pricing'>
        <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Standard Plan</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">₹ 7,999</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Annual</li>
              <li>Renewal For</li>
              <li>Hosting</li>
              <li>Rs.3000.</li>
            </ul>
            <a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com"><button type="button" className="w-100 btn btn-lg btn-outline-success">Get started by sending a mail</button></a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Premium Plan</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">₹ 13,999</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Annual</li>
              <li>Renewal For</li>
              <li>Hosting</li>
              <li>Rs.3000.</li>
            </ul>
            <a href="tel:+919148911954"><button type="button" className="w-100 btn btn-lg btn-success">Contact us</button></a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-success">
          <div className="card-header py-3 text-bg-success border-success">
            <h4 className="my-0 fw-normal">Custom</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">??</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Annual   </li>
              <li>Renewal For</li>
              <li>Hosting</li>
              <li>Rs.4000.</li>
            </ul>
            <a href="tel:+919148911954"><button type="button" className="w-100 btn btn-lg btn-success">Contact us</button></a>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6 text-center mb-4">Compare plans</h2>
<small>Only regular specifications</small>
    <div className="table-responsive">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{width: "34%"}}></th>
            <th style={{width: "34%"}}>Standard</th>
            <th style={{width: "34%"}}>Premium</th>
            <th style={{width: "34%"}}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-start">Web pages</th>
            <td>5 pages</td>
            <td>10 pages</td>
            <td>According to Requirement</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Free Domain name</th>
            <td>1 Year free</td>
            <td>1 Year free</td>
            <td>1 Year free</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" className="text-start">Free Hosting</th>
            <td>1 Year Free Hosting ( Unlimited Space )</td>
            <td>1 Year Free Hosting ( Unlimited Space )</td>
            <td>1 Year Free Hosting ( Unlimited Space )</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Dynamic Website</th>
            <td>Premium Design</td>
            <td>Premium Design</td>
            <td>Premium Design</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Admin Access</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Lifetime 24/7 Free Hosting Support</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Unlimited Images & Videos Upload</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Free SSL Certificates</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Free Email Id</th>
            <td>3</td>
            <td>5</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">SEO Friendly Website</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">100% Responsive Website</th>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Social Media Integration</th>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">WhatsApp Button Integration</th>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Call Button Integration</th>
            <td>No</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Free Technical Support For Website</th>
            <td>1 Year Free Technical Support For Website</td>
            <td>1 Year Free Technical Support For Website</td>
            <td>1 Year Free Technical Support For Website</td>
          </tr>
          <tr>
            <td>Consult your developer For more specifications</td>
          </tr>

        </tbody>
      </table>
    </div>
  </main>
    </div>
  )
}

export default Pricing