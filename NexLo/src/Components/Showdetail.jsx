import React from "react";
import "./showdetail.css"; 

function PartnerPage() {
  return (
    <div className="partner-bg">
      {/* Header Section */}
      <div className="partner-main">
        {/* Left Side - Illustration */}
        <div className="partner-image">
          <img
            src="https://cdn.dribbble.com/users/1787323/screenshots/16260991/media/3abf4bb11d7a1399b372a8a67932c175.png"
            alt="Local Business Partner Illustration"
            className="w-4/5 h-auto object-contain"
          />
        </div>

        {/* Right Side - Get Started */}
        <div className="partner-card">
          <h2 className="partner-heading">Get Started</h2>
          <p className="partner-text">Get your business online-ready to continue</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Business ID / Mobile number"
              className="partner-input"
            />
            <button type="submit" className="partner-btn">
              Continue
            </button>
          </form>

          <p className="partner-agreement">
            By logging in, I agree to NexLo’s{" "}
            <a href="#" className="underline hover:text-skyBlue">
              terms & conditions
            </a>
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="partner-steps">
        <h3 className="text-2xl font-bold text-center mb-6">
          Get your business delivery-ready in{" "}
          <span className="text-blue">24 hrs!</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <StepCard
            number="1"
            title="Install the NexLo Owner App"
            desc="Download our app to begin your business registration."
          />
          <StepCard
            number="2"
            title="Login/Register"
            desc="Use your mobile number or business ID to sign in."
          />
          <StepCard
            number="3"
            title="Enter Business Details"
            desc="Provide your shop info, location, and services."
          />
        </div>
      </div>

      {/* Documents Handy Section */}
      <div className="partner-docs">
        <div className="partner-docs-corner"></div>
        <h4 className="partner-docs-title">
          For an easy form filling process,
        </h4>
        <p className="partner-docs-subtitle">
          You can keep these documents handy:
        </p>
        <ul className="partner-docs-list">
          <li>
            FSSAI License copy{" "}
            <a href="#" className="partner-docs-link">
              Apply Here
            </a>
          </li>
          <li>Your business service list or menu</li>
          <li>Bank details</li>
          <li>
            GSTIN{" "}
            <a href="#" className="partner-docs-link">
              Apply Here
            </a>
          </li>
          <li>PAN card copy</li>
        </ul>
      </div>
    </div>
  );
}
function StepCard({ number, title, desc }) {
  return (
    <div className="partner-step-card">
      <div className="partner-step-number">Step {number}</div>
      <h4 className="partner-step-title">{title}</h4>
      <p className="partner-step-desc">{desc}</p>
    </div>
  );
}

export default PartnerPage;
