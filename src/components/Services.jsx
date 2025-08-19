import React from "react";

import {
  ads_icon,
  marketing_icon,
  content_icon,
  social_icon,
  bgImage2,
} from "../assets/assets";

import Title from "../components/Title.jsx";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: ads_icon,
    },
    {
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: content_icon,
    },
    {
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="border border-red-500 relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={bgImage2}
        alt=""
        className="border absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help?"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="border flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
