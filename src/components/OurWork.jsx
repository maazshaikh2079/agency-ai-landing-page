import Title from "./Title.jsx";
import {
  work_mobile_app,
  work_dashboard_management,
  work_fitness_app,
} from "../assets/assets.js";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      image: work_fitness_app,
    },
  ];

  return (
    <>
      <div
        id="our-work"
        className="border flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
      >
        <Title
          title="Our latest work"
          description="From strategy to execution, we craft digital solutions that move your business forward"
        />

        <div className="border grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {workData.map((work, index) => (
            <div
              key={index}
              className="border hover:scale-102 duration-500 tranisition-all cursor-pointer"
            >
              <img
                src={work.image}
                alt=""
                className="border w-full rounded-xl"
              />
              <h3 className="border mt-3 mb-2 text-lg font-semibold">
                {work.title}
              </h3>
              <p className="border text-sm opacity-60 w-5/6">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurWork;
