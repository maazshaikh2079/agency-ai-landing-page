import { useContext } from "react";

import { ThemeContext } from "../context/theme-context.js";
import {
  facebook_icon,
  instagram_icon,
  linkedin_icon,
  logo,
  logo_dark,
  twitter_icon,
} from "../assets/assets.js";

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="border bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top  */}
      <div className="border flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="border space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme.mode === "dark" ? logo_dark : logo}
            alt=""
            className="border w-32 sm:w-44"
          />

          <p className="border max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="border flex gap-8">
            <li className="border">
              <a href="#hero" className="border hover:text-primary">
                Home
              </a>
            </li>
            <li className="border">
              <a href="#service" className="border hover:text-primary">
                Service
              </a>
            </li>
            <li className="border">
              <a href="#our-work" className="border hover:text-primary">
                Out Work
              </a>
            </li>
            <li className="border">
              <a href="#contact-us" className="border hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="border text-gray-600 dark:text-gray-400">
          <h3 className="border font-semibold">Subscribe to our newsletter</h3>
          <p className="border text-sm mt-2 mb-6 ">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="border flex gap-2 text-sm">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bottom */}
      <div className="border pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p className="border">
          Copyright 2025 © maazshaikh2079 - All Right Reserved.
        </p>
        <div className="border flex items-center justify-between gap-4">
          <img src={facebook_icon} alt="" className="border" />
          <img src={twitter_icon} alt="" className="border" />
          <img src={instagram_icon} alt="" className="border" />
          <img src={linkedin_icon} alt="" className="border" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
