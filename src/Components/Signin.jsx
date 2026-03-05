import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

export default function Signin() {
  return (
    <div className=" min-h-screen py-10 px-5 max-w-md mx-auto ">
      <div className="mb-6 text-center">
        <h1 className="text-white text-3xl  mb-2.5 ">SignIn</h1>
        <p className="text-white  text-xl ">
          Welcome back! Please enter your details.
        </p>
      </div>
      <form action="">
        <div className="mb-4 animate-slideIn" >
          <div>
            <label for="email" className="text-white mb-1.5 block ">
              Email
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#9E9090] p-2 rounded w-full outline-none mb-2.5 "
            />
          </div>
          <div>
            <label for="email" className="text-white mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                className="bg-[#9E9090] p-2 rounded w-full outline-none mb-2.5"
              />
              <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10 text-white"><FaEyeSlash /></div>
            </div>
          </div>

          <div>
            <div className="flex h-5 items-center justify-end mt-4 text-white ">
              <a href="">Forget Password?</a>
            </div>
          </div>
        </div>
        <button className="bg-[#E48045] text-white py-2 px-4 rounded w-full  mt-4 hover:bg-[#E64] animate-scaleout origin-center">
          Sign Up
        </button>
      </form>
      <div className="relative my-10">
        <span className="w-full h-1 bg-[#626262] block"></span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#212121] px-3 text-[#626262] block">
          Or With
        </span>
      </div>

      <div className="border-white flex gap-7 justify-center items-center ">
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center p-2 text-white">
          <FaApple size={24} />
        </div>
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center p-2 text-red-500">
          <FcGoogle size={24} />
        </div>
        <div className="border w-10 h-10 border-white rounded-full flex justify-center items-center p-2 text-blue-500">
          <FaFacebook size={24} />
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-white">
          Already have an account?{" "}
          <Link to="/signup" className="text-orange-500 underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
