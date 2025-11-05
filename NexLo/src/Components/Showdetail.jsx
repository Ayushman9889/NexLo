import React from "react";

function Showdetail() {
  return (
    <div className="min-h-screen bg-iceBlue text-darkBlue font-sans flex flex-col items-center py-10 px-5">
      {/* Header Section */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-lg overflow-hidden mb-10">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 p-10 flex justify-center">
          <img
            src="https://cdn.dribbble.com/users/1787323/screenshots/16260991/media/3abf4bb11d7a1399b372a8a67932c175.png"
            alt="Local Business Partner Illustration"
            className="w-4/5 h-auto object-contain"
          />
        </div>

        {/* Right Side - Get Started */}
        <div className="md:w-1/2 bg-white p-10 md:p-14">
          <h2 className="text-3xl font-bold mb-4 text-darkBlue">Get Started</h2>
          <p className="text-blue mb-6">
            Get your business online-ready to continue
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Business ID / Mobile number"
              className="w-full px-4 py-3 border border-lightBlue rounded-xl outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all"
            />
            <button
              type="submit"
              className="w-full bg-blue text-white py-3 rounded-xl font-semibold hover:bg-skyBlue transition-all"
            >
              Continue
            </button>
          </form>

          <p className="text-xs text-blue mt-4">
            By logging in, I agree to NexLo’s{" "}
            <a href="#" className="underline hover:text-skyBlue">
              terms & conditions
            </a>
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-6xl w-full mb-10">
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
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8 border border-lightBlue relative">
        <div className="absolute top-0 right-0 w-12 h-12 bg-iceBlue rounded-bl-3xl"></div>
        <h4 className="text-lg font-semibold text-darkBlue mb-2">
          For an easy form filling process,
        </h4>
        <p className="text-blue mb-5">You can keep these documents handy:</p>
        <ul className="list-disc pl-6 space-y-2 text-darkBlue">
          <li>
            FSSAI License copy{" "}
            <a href="#" className="text-blue font-semibold hover:text-skyBlue">
              Apply Here
            </a>
          </li>
          <li>Your business service list or menu</li>
          <li>Bank details</li>
          <li>
            GSTIN{" "}
            <a href="#" className="text-blue font-semibold hover:text-skyBlue">
              Apply Here
            </a>
          </li>
          <li>PAN card copy</li>
        </ul>
      </div>
    </div>
  );
}

/* Step Card Component */
function StepCard({ number, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-lightBlue text-center">
      <div className="text-3xl font-bold text-blue mb-3">Step {number}</div>
      <h4 className="text-xl font-semibold mb-2 text-darkBlue">{title}</h4>
      <p className="text-blue">{desc}</p>
    </div>
  );
}

export default Showdetail;
