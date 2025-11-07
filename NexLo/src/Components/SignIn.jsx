import React from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.png";

function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#EAF7FB] font-sans">
      {/* Outer Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl max-w-6xl w-full">
        
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 bg-[#F4FBFF] flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={login}
              alt="Local Business Partner Illustration"
              className="w-[95%] md:w-[115%] h-auto object-cover md:object-contain"
              style={{
                transform: "scale(1.1)",
                marginLeft: "-2%",
              }}
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 bg-white flex flex-col justify-center items-center px-8 md:px-14 py-12">
          <div className="w-full max-w-sm">
            <h1 className="text-4xl font-bold mb-4 text-[#03045E] leading-tight">
              Welcome Back to{" "}
              <span className="text-[#0077B6]">NexLo</span>
            </h1>
            <p className="text-[#0077B6] mb-8 text-[15px]">
              Connecting you with trusted local businesses.
            </p>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#03045E] mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-[#BEE3F8] rounded-xl focus:ring-2 focus:ring-[#00B4D8] outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-[#03045E] mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-[#BEE3F8] rounded-xl focus:ring-2 focus:ring-[#00B4D8] outline-none transition-all"
                  required
                />
              </div>

              <div className="flex justify-end text-sm mb-2">
                <Link
                  to="#"
                  className="text-[#0077B6] hover:text-[#009FE3]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0077B6] text-white py-3 rounded-xl font-semibold hover:bg-[#009FE3] transition-all"
              >
                Sign In
              </button>

              <p className="text-center text-sm text-[#03045E] mt-4">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#0077B6] hover:text-[#009FE3] font-semibold"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
