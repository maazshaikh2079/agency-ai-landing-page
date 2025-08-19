import React from "react";
import Title from "./Title.jsx";
import { arrow_icon, email_icon, person_icon } from "../assets/assets.js";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="border flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        action="#"
        className="border grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl"
      >
        <div className="border">
          <p className="border mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={person_icon} alt="" className="border" />
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              className="border w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="border">
          <p className="border mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={email_icon} alt="" className="border" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="border sm:col-span-2">
          <p className="border mb-2 text-sm font-medium">Message</p>
          <textarea
            id="message"
            name="message"
            row={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        <button
          type="submit"
          className="border w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit <img src={arrow_icon} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
