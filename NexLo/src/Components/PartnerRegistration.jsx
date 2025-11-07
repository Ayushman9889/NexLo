import React, { useState } from "react";
import { Link } from "react-router-dom";

function PartnerRegistration() {
  const [sameWhatsApp, setSameWhatsApp] = useState(true);

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#90E0EF_1px,transparent_1px)] [background-size:20px_20px] text-darkBlue font-sans">
      {/* Header */}
      <header className="bg-iceBlue shadow-md">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-darkBlue">NexLo Partner Registration</h1>

          <Link to="/faqs" className="text-blue hover:text-skyBlue font-medium">
            FAQs
          </Link>
          
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Form Section */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Partner Information</h2>

            <div className="space-y-8">
              {/* Basic Details */}
              <div className="bg-iceBlue p-8 rounded-2xl shadow-md space-y-4">
                <h3 className="text-xl font-semibold mb-3">
                  Basic Details <span className="text-red-500">*</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Owner’s Full Name"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Restaurant / Shop Name"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                </div>

                {/* Location Fields */}
                <h4 className="text-lg font-semibold mt-6">
                  Business Location Details <span className="text-red-500">*</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Shop / Building No."
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Street / Locality"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Area / Landmark"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="District"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Pincode"
                    className="border border-lightBlue rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                </div>
              </div>

              {/* Owner Contact Details */}
              <div className="bg-iceBlue p-8 rounded-2xl shadow-md space-y-4">
                <h3 className="text-xl font-semibold mb-3">
                  Owner Contact Details <span className="text-red-500">*</span>
                </h3>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-lightBlue rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border border-lightBlue rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue"
                  required
                />

                {/* WhatsApp Choice */}
                <div className="mt-4">
                  <p className="text-darkBlue font-medium mb-2">Provide your WhatsApp Number:</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={sameWhatsApp}
                        onChange={() => setSameWhatsApp(true)}
                      />
                      <span>Same as above</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={!sameWhatsApp}
                        onChange={() => setSameWhatsApp(false)}
                      />
                      <span>Use different number</span>
                    </label>
                  </div>
                  {!sameWhatsApp && (
                    <input
                      type="tel"
                      placeholder="WhatsApp Number"
                      className="mt-3 border border-lightBlue rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue"
                      required
                    />
                  )}
                </div>
              </div>

              {/* Working Days */}
              <div className="bg-iceBlue p-8 rounded-2xl shadow-md space-y-4">
                <h3 className="text-xl font-semibold mb-3">Working Days</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 text-sm">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <label key={day} className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      {day}
                    </label>
                  ))}
                </div>
              </div>

              {/* Timings */}
              <div className="bg-iceBlue p-8 rounded-2xl shadow-md space-y-4">
                <h3 className="text-xl font-semibold mb-5">Opening & Closing Time</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="time"
                    className="border border-lightBlue rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                  <input
                    type="time"
                    className="border border-lightBlue rounded-xl p-3 w-full outline-none focus:ring-2 focus:ring-blue"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <div className="text-center">
            <button className="bg-darkBlue text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue transition-all">
              Proceed
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PartnerRegistration;