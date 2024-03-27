import React from 'react'
import Anchor from './Anchor'
import logo from '../assets/Ao sd.png'
const Footer = () => {
  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo" height={40}/></a>
  <div className="col-md-4 d-flex align-items-center">
      
    

    <ul style={{listStyle: "none"}}>
    <li><span className="mb-3 mb-md-0 text-body-secondary"> 2022, tronz labs© </span></li>
        <li><a href="mailto:makeartanhear8@gmail.com?cc=harikalyan91tron@gmail.com" style={{ color: "black"}}>Mail to tronzlabs</a></li>
        <li><Anchor btn={"Refunds and cancellations"}>
        <p>Our refund policy has been designed in such a way which makes easy for our clients to understand. Tronz labs will deliver a refund under the circumstances which has been planned in our refund policy. Please read the below refund policies carefully:
    
        <ul>
        <li><span className='fw-bold'>Web Development & Design Policy:</span>
        We provide demo website to our client's so that they can check our quality of work and hence becomes comfortable before working with us. Before making a payment for our services feel free to contact us if you have any query.</li>

        <li><span className='fw-bold'>Eligibility for refund:</span>
        At Tronz labs, every project is important to us and we handle each project very carefully with professionalism. We always try to deliver the desired project to our client's at a given time. However, if a client is not satisfied or changed his/her plan regarding the project and wants a refund then he/she would check their eligibility for our refund policy listed below:</li>

        <li><span className='fw-bold'>Advance Payment Policy:</span>
        When you are comfortable with taking our service, you have to make 30% payment in advance for hiring us for any kind of services which we provide. If our client wants to cancel the project within 2 days of advance payment done to us then this 30% payment is fully refundable. Please note that after 2 days of advance payment if you cancel the project then this advance money will not be refundable.</li>

        <li><span className='fw-bold'>Delivery Time & Payment:</span>
        • Full Refund: In case where the project has not been started or has not been delivered according to the deal.
        • Partial Refund: In case where the project work has already been started and client in between wants to cancel the project then the total advance money which is 25% will not be refundable.
        • No Refund: When full payment is received after successful delivery of the project and then if a client wants to cancel the project then the whole money will be non-refundable.</li>

        <li><span className='fw-bold'>Change in policy:</span>
        Tronz labs can change this policy from time to time without any prior notice at any time. We request you to review this policy periodically. If any changes occur in our policy then our existing, as well as new client's, will be agreed with our new policy.</li>
        </ul>
</p>
    </Anchor></li>
    
    </ul>
    
    </div>
  </footer>
</div>
  )
}

export default Footer