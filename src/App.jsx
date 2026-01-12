import "./App.css";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { useState } from "react";

export const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-212.5 h-137.5 bg-white rounded-[30px] shadow-2xl m-5 overflow-hidden">
      <div
        className={`absolute w-1/2 h-full flex items-center text-center text-[#333] bg-white z-1 p-10 login transition-transform 
        duration-1200 ease-in-out
        ${
          active
            ? "translate-x-1/2 opacity-0"
            : "translate-x-full z-2 opacity-100"
        }`}
      >
        <form className="w-full">
          <h1 className="text-[36px] font-semibold -my-2.5">Login</h1>
          <div className="relative my-7.5">
            <input
              className="w-full placeholder:text-[#888] placeholder:font-normal py-3.25 pr-12.5 pl-5 bg-gray-100 rounded-lg border-none 
              outline-none text-[16px] text-[#333] font-medium"
              type="text"
              required
              placeholder="Username"
            ></input>
            <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#888]" />
          </div>
          <div className="relative my-7.5">
            <input
              className="w-full placeholder:text-[#888] placeholder:font-normal py-3.25 pr-12.5 pl-5 bg-gray-100 rounded-lg border-none 
              outline-none text-[16px] text-[#333] font-medium"
              type="password"
              required
              placeholder="Password"
            ></input>
            <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#888]" />
          </div>
          <div className="my-4">
            <a
              className="text-[14.5px] text-[#333] transition-all duration-200 hover:underline hover:text-[#7494ec]"
              href="#"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#7494ec] hover:bg-blue-400 transition-all duration-200 rounded-lg border-none cursor-pointer
            text-[16px] text-white font-semibold shadow-2xl"
          >
            Login
          </button>
          <p className="text-[14.5px] my-3.75">
            or login with social platforms
          </p>
          <div>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 transition-all 
              duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaGoogle />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 transition-all 
              duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 transition-all 
              duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaGithub />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 transition-all
              duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
        </form>
      </div>

      <div
        className={`absolute w-1/2 h-full flex items-center text-center text-[#333] p-10 z-1 register transition-transform 
        duration-1200 ease-in-out
        ${
          active
            ? "translate-x-0 z-2 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <form className="w-full">
          <h1 className="text-[36px] font-semibold -my-2.5">Registration</h1>
          <div className="relative my-7.5">
            <input
              className="w-full placeholder:text-[#888] placeholder:font-normal py-3.25 pr-12.5 pl-5 bg-gray-100 rounded-lg 
              border-none outline-none text-[16px] text-[#333] font-medium"
              type="text"
              required
              placeholder="Username"
            ></input>
            <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#888]" />
          </div>
          <div className="relative my-7.5">
            <input
              className="w-full placeholder:text-[#888] placeholder:font-normal py-3.25 pr-12.5 pl-5 bg-gray-100 rounded-lg 
              border-none outline-none text-[16px] text-[#333] font-medium"
              type="email"
              required
              placeholder="Email"
            ></input>
            <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#888]" />
          </div>
          <div className="relative my-7.5">
            <input
              className="w-full placeholder:text-[#888] placeholder:font-normal py-3.25 pr-12.5 pl-5 bg-gray-100 rounded-lg
              border-none outline-none text-[16px] text-[#333] font-medium"
              type="password"
              required
              placeholder="Password"
            ></input>
            <FaLock className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] text-[#888]" />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-[#7494ec] hover:bg-blue-400 transition-all duration-200 rounded-lg border-none
            cursor-pointer text-[16px] text-white font-semibold shadow-2xl"
          >
            Register
          </button>
          <p className="text-[14.5px] my-3.75">
            or register with social platforms
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100
              transition-all duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaGoogle />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 
              transition-all duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 
              transition-all duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaGithub />
            </a>
            <a
              className="inline-flex p-2.5 border-2 solid border-[#ccc] hover:text-[#7494ec] hover:bg-gray-100 
              transition-all duration-200 rounded-lg text-2xl text-[#333] mx-2"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
        </form>
      </div>

      <div
        className={`absolute w-full h-full transition-transform before:left-[-250%] ease-in-out duration-1000 before:content-['']
        before:absolute before:h-full before:w-[300%] before:bg-[#7494ec] before:rounded-[150px] before:z-2 before:transition-transform 
        before:duration-1200
        ${active ? "before:translate-x-full" : "before:translate-x-0"}`}
      >
        <div
          className={`absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-2 toggle-left transition-transform
          duration-1400 ease-in-out
        ${active ? "-translate-x-full" : "translate-x-0"}`}
        >
          <h1 className="text-4xl pb-6 font-semibold">Hello, Welcome!</h1>
          <p className="mb-5">Don't have an account?</p>
          <button
            onClick={() => setActive(true)}
            className="w-40 h-11.5 bg-transparent border-2 solid text-[16px] hover:bg-white hover:text-[#7494ec] transition-all
            duration-300 cursor-pointer  text-white font-semibold border-white rounded-lg"
          >
            Register
          </button>
        </div>
        <div
          className={`absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-2 toggle-right transition-transform
          duration-1400 ease-in-out
        ${active ? "translate-x-full" : "translate-x-200"}`}
        >
          <h1 className="text-4xl pb-6 font-semibold">Welcome Back!</h1>
          <p className="mb-5">Already have an account?</p>
          <button
            onClick={() => setActive(false)}
            className="w-40 h-11.5 bg-transparent border-2 solid text-[16px] hover:bg-white hover:text-[#7494ec] transition-all
            duration-300 cursor-pointer text-white font-semibold border-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
