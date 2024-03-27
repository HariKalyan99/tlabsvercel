import React from "react";
import Anchor from "./Anchor";
import { Button, Tooltip } from "antd";

const Dashboard = () => {
  return (
    <div className="container marketing mt-5" id="testimonials">
      <div className="row">
        <div className="col-lg-4">
          <Tooltip title="Logo Design">
            <div
              style={{
                height: "150px",
                width: "150px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
                opacity: "0.8",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJhd2luZyUyMHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="content writing image"
                style={{ objectFit: "cover", height: "150px", width: "150px" }}
              />
            </div>
          </Tooltip>
          <h2 className="fw-normal">Logo Design</h2>
          <p>
            A well-designed logo serves as the visual representation of your
            brand, conveying its values, personality, and identity at a glance.
          </p>
        </div>
        <div className="col-lg-4">
          <Tooltip title="Content Writing">
            <div
              style={{
                height: "150px",
                width: "150px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
                opacity: "0.8",
              }}
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/stocksy-comp-314252-1-1570650142.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "150px", width: "150px" }}
              />
            </div>
          </Tooltip>
          <h2 className="fw-normal">Content Writing</h2>
          <p>
            Compelling content is crucial for engaging your audience and driving
            action. It should resonate with your target audience, addressing
            their needs, interests, and pain points.
          </p>
          <ul></ul>
        </div>
        <div className="col-lg-4">
          <Tooltip title="Web Design">
            <div
              style={{
                height: "150px",
                width: "150px",
                border: "none",
                borderRadius: "50%",
                overflow: "hidden",
                opacity: "0.8",
              }}
            >
              <img
                src="https://www.business2community.com/wp-content/uploads/2023/10/Freelancer-Web-Designer-760x507.jpg"
                alt="content writing image"
                style={{ objectFit: "cover", height: "150px", width: "150px" }}
              />
            </div>
          </Tooltip>
          <h2 className="fw-normal">Web Design</h2>
          <p>
            A visually appealing website is essential for capturing visitors'
            attention and making a positive first impression. Utilize clean
            layouts, complementary color schemes, high-quality images, and
            visually appealing typography to create an attractive design.
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="featurette-heading fw-normal lh-1">
              Web Development
            </h2>
            <p className="lead">
              User Experience (UX): A user-friendly website is essential for
              keeping visitors engaged and converting them into customers.
              Intuitive navigation, fast load times, and responsive design are
              crucial elements of a positive user experience.
            </p>

            <p className="lead">
              Security: Protecting your website and user data from cyber threats
              is paramount. Implementing security measures such as SSL
              encryption, regular updates, helps safeguard your website and
              build trust with your audience.
            </p>
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <div style={{ height: "300px", width: "300px", overflow: "hidden"}}>
            <img
              src="https://textuar.com/wp-content/uploads/2023/07/seo-textuar.jpg"
              alt="cp"
              style={{ height: "300px", width: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="featurette-heading fw-normal lh-1">
              Clear Timeline
            </h2>
            <p className="lead">
              Establish a clear timeline for the project from the outset,
              outlining key milestones, deadlines, and deliverables. Communicate
              this timeline with the client and team members to ensure everyone
              is aligned on expectations.
            </p>

            <p className="lead">
              Frequent Communication: Maintain open and transparent
              communication with the client throughout the project, providing
              regular updates on progress, milestones achieved, and any changes
              or challenges encountered. Address any concerns or questions
              promptly to maintain client confidence and trust.
            </p>
          </div>
        </div>
        <div className="col-md-5 order-md-1  d-flex justify-content-center">
          <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
            <img
              src="https://media.licdn.com/dms/image/C4D12AQE4GJFi5O4UfA/article-cover_image-shrink_720_1280/0/1579510609621?e=2147483647&v=beta&t=IxknpdVoTzN_iJZs61YGTfbTB3xAdKJZCqvtJOyNC58"
              alt="cp"
              style={{ height: "300px", width: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div>
            <h2 className="featurette-heading fw-normal lh-1">
              High-end services with 100% expert assistance
            </h2>
            <p className="lead">
              Welcome to our exclusive suite of high-end services, where
              excellence meets innovation. We pride ourselves on offering 100%
              expert assistance coupled with a comprehensive array of modern
              tools and parameters, ensuring unparalleled quality and
              sophistication in every project
            </p>
          </div>
        </div>
        <div className="col-md-5  d-flex justify-content-center">
          <div style={{ height: "300px", width: "300px", overflow: "hidden" }}>
            <img
              src="https://textuar.com/wp-content/uploads/2023/07/content-writing-agency-mumbai.png"
              alt="cp"
              style={{ height: "300px", width: "300px", objectFit: "fill" }}
            />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
};

export default Dashboard;
