import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in building responsive portfolio websites and modern
            web applications that clearly showcase skills, projects, and goals.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My work combines polished UI design with technical development using
            React, Tailwind CSS, and modern frontend tooling.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-400 space-y-2 text-xs sm:text-lg">
            <li>Interactive resume and portfolio sections</li>
            <li>Responsive design for desktop and mobile</li>
            <li>Clear contact workflow and project presentation</li>
          </ul>
        </div>
        <a
          href="https://wa.me/919791781220?text=Hi%20Abishek%2C%20I%20would%20like%20to%20talk%20about%20a%20project"
          target="_blank"
          rel="noreferrer"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
