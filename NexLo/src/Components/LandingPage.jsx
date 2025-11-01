import React from "react";
import { MapPin, LocateFixed } from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(#90E0EF_1px,transparent_1px)] [background-size:20px_20px] text-darkBlue font-sans">
      {/* Navbar */}
      <header className="bg-iceBlue shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
          <h1 className="text-3xl font-bold text-darkBlue">NexLo</h1>
          <nav className="flex items-center gap-8">
            <Link
              to="/partner"
              className="hover:text-skyBlue font-medium transition-all"
            >
              Partner with us
            </Link>

            <Link
              to="/signin"
              className="bg-darkBlue text-white px-5 py-2 rounded-xl hover:bg-blue transition-all font-semibold"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-10 pb-10 text-center">
        <h2 className="text-5xl font-extrabold leading-snug mb-10">
          Discover Local Businesses. <br />
          Connect, Explore, and Grow with{" "}
          <span className="text-blue">NexLo</span>!
        </h2>

        {/* Location Input */}
        <div className="max-w-3xl mx-auto flex items-center bg-white rounded-2xl shadow-lg border border-lightBlue p-3 hover:shadow-xl transition-all">
          <MapPin className="text-blue w-6 h-6 ml-4" />
          <input
            type="text"
            placeholder="Enter your location"
            className="flex-1 text-darkBlue bg-transparent outline-none text-lg px-4 placeholder-lightBlue"
          />
          <button className="flex items-center gap-2 bg-blue text-white px-5 py-2.5 rounded-xl hover:bg-skyBlue transition-all mr-3 font-medium">
            <LocateFixed className="w-5 h-5" />
            Detect
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-10 flex justify-center gap-8 flex-wrap">
          <FeatureCard
            title="Discover Nearby Businesses"
            subtitle="Find trusted shops and services in your area."
            img="https://cdn-icons-png.flaticon.com/512/535/535239.png"
          />
          <FeatureCard
            title="Connect with Local Owners"
            subtitle="Get contact details and visit directly—no middlemen."
            img="https://cdn-icons-png.flaticon.com/512/1256/1256650.png"
          />
          <FeatureCard
            title="Support Local Growth"
            subtitle="Empower small businesses and your neighborhood economy."
            img="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
          />
        </div>
      </section>

      {/* How NexLo Works */}
      <section className="bg-iceBlue py-16 text-center">
        <h2 className="text-4xl font-bold mb-10">How NexLo Works</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          <Step
            number="1"
            title="Search Your Area"
            desc="Enter your location to discover nearby verified businesses."
          />
          <Step
            number="2"
            title="Explore Options"
            desc="Browse through shops, services, and professionals in your neighborhood."
          />
          <Step
            number="3"
            title="Connect Directly"
            desc="Reach out to business owners with contact details — no commissions, no middlemen."
          />
        </div>
      </section>

      {/* Why Choose NexLo */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose NexLo?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <ReasonCard
            title="100% Local"
            desc="We promote genuine local businesses in your area — not big chains."
          />
          <ReasonCard
            title="Direct Connection"
            desc="Talk directly with owners. No hidden fees or platform commissions."
          />
          <ReasonCard
            title="Community Driven"
            desc="Help your local economy grow by supporting small businesses near you."
          />
        </div>
      </section>
    </div>
  );
}

/* Feature Card */
function FeatureCard({ title, subtitle, img }) {
  return (
    <div className="relative bg-iceBlue text-darkBlue rounded-3xl p-8 w-80 h-80 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col justify-between">
      <div className="flex justify-center">
        <div className="bg-white border border-lightBlue rounded-full w-20 h-20 flex items-center justify-center shadow-sm">
          <img src={img} alt={title} className="w-10 h-10" />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-blue text-base leading-relaxed">{subtitle}</p>
      </div>
      <div className="mx-auto mt-4 w-16 h-1 bg-blue rounded-full"></div>
    </div>
  );
}

/* Step Component */
function Step({ number, title, desc }) {
  return (
    <div className="bg-white border border-lightBlue rounded-2xl shadow-md p-6 w-72 hover:shadow-lg transition-all">
      <div className="text-blue text-3xl font-bold mb-3">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-darkBlue text-base">{desc}</p>
    </div>
  );
}

/* ReasonCard Component */
function ReasonCard({ title, desc }) {
  return (
    <div className="bg-iceBlue p-8 rounded-3xl shadow-md hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold mb-3 text-darkBlue">{title}</h3>
      <p className="text-blue text-base">{desc}</p>
    </div>
  );
}

export default LandingPage;