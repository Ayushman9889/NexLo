import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"; 

function SignIn() {
  return (
    <div className="signin-bg flex flex-col md:flex-row text-darkBlue font-sans">
      {/* Left Side - Illustration */}
      <div className="md:w-1/2 flex items-center justify-center bg-white">
        <img
          src="https://cdn.dribbble.com/users/1787323/screenshots/16260991/media/3abf4bb11d7a1399b372a8a67932c175.png"
          alt="Local business illustration"
          className="w-4/5 h-auto object-contain"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 signin-card">
        <div className="w-full max-w-md">
          <h1 className="signin-heading">
            Welcome Back to <span className="text-blue">NexLo</span>
          </h1>
          <p className="text-center text-blue mb-8">
            Connecting you with trusted local businesses.
          </p>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-darkBlue mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="signin-input"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-darkBlue mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="signin-input"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-blue">
              <Link to="#" className="hover:text-darkBlue">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="signin-btn">
              Sign In
            </button>

            <p className="text-center text-sm text-darkBlue mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="signin-link">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
