import React from "react";

import Logo from "../assets/Logo";

function Login() {
  return (
    <div className="h-screen  flex flex-col space-y-10 justify-center items-center">
      <div className=" flex sm:w-96 justify-start space-x-1 align-items-center">
        <Logo width={50} height={50} />
        <h1 className="text-3xl font-medium text-stroke">secure-short</h1>
      </div>

      <div className="bg-white mx-4 sm:w-96 shadow-xl rounded p-5">
        <h1 className="text-3xl font-medium text-stroke mb-1">Login</h1>
        <p className="text-sm text-stroke">
          Sign In to Manage Your Secure-Short URLs
        </p>
        <form className="space-y-5 mt-5 ">
          <input
            type="text"
            className="w-full h-12 bg-white input input-bordered border-gray-500"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full h-12 bg-white input input-bordered border border-gray-500"
            placeholder="Password"
          />

          <div className="">
            <a
              href="#!"
              className="font-medium text-stroke hover:text-gray-500 rounded-full p-2"
            >
              Forgot Password?
            </a>
          </div>

          <button className="text-center w-full bg-sunny-yellow rounded-full text-stroke py-3 font-medium hover:bg-yellow-400">
            S'identifier
          </button>
        </form>
      </div>

      <p>
        Don't have an account?{" "}
        <a href="#!" className="text-stroke font-medium hover:text-gray-500">
          Sign Up
        </a>{" "}
      </p>
    </div>
  );
}

export default Login;
