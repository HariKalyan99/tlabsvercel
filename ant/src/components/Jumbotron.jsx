import React from "react";
import Anchor from "./Anchor";

const Jumbotron = () => {
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3" id="about">
      <div className="container-fluid py-5">
        <h4 className="fw-bold">Define us!</h4>
        <h2 className="display-5 fw-bold">
          Welcome to Tronz Labs - A Top Web Development Company in India
        </h2>
        <p className="col-md-8 fs-4">
          Welcome to Tronz Labs, where creativity meets functionality to craft
          stunning digital experiences. We are a dynamic team of passionate
          professionals dedicated to transforming your digital presence into
          something extraordinary. With our expertise in website design and
          development, we empower businesses to thrive in the digital realm
        </p>
        <Anchor btn={"Know us more.."}>
          <h2>Our mission</h2>
          <p>
            At Tronz Labs, our mission is simple yet profound: to revolutionize
            the online landscape, one website at a time. We strive to understand
            the unique essence of each client's brand and translate it into
            captivating digital experiences that resonate with their audience.
            Our aim is to exceed expectations, delivering exceptional results
            that drive growth and success.
          </p>

          <h2>Our Services</h2>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Website Design:</span> From
              sleek and modern designs to bold and vibrant layouts, we create
              visually captivating websites that leave a lasting impression.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Website Development:</span>
              Our skilled developers bring designs to life, building functional
              and user-friendly websites optimized for performance and
              responsiveness.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>E-commerce Solutions:</span>
              Whether you're launching a new online store or looking to revamp
              an existing one, we provide comprehensive e-commerce solutions to
              drive sales and maximize ROI.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>SEO Optimization:</span>We
              help businesses improve their online visibility and drive organic
              traffic through strategic SEO optimization tailored to their
              unique goals.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Maintenance and Support:
              </span>
              Our commitment doesn't end with the launch of your website. We
              offer ongoing maintenance and support to ensure your website
              remains secure, up-to-date, and optimized for success.
            </li>
          </ul>
        </Anchor>
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-12 col-xl-6 mt-md-1">
          <div
            className="p-5 text-bg-dark rounded-3"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/originals/58/26/22/582622377739ce42b29d020e35335541.gif')",
              height: "500px",
              border: "3px solid red",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="col-md-12 col-xl-6 mt-md-1">
          <div className="h-100 p-3 bg-body-tertiary border rounded-3">
            <p>
              Whether you're a bootstrapped startup or an established enterprise
              looking to maximize your ROI, Tronz Labs is here to help. Let's
              collaborate and create affordable excellence that elevates your
              online presence and drives your business forward. Get in touch
              with us today, and let's build something amazing together, without
              breaking the bank.
            </p>
            <h2>Budget-Friendly Maintenance:</h2>
            <p>
              Our commitment doesn't end with the launch of your website. We
              offer budget-friendly maintenance and support packages to ensure
              your website remains secure, up-to-date, and optimized for
              success.
            </p>

            <h2>Streamlined Processes: </h2>
            <p>
              Our efficient workflows and streamlined processes allow us to
              deliver exceptional results in a timely manner, minimizing costs
              without sacrificing excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
