const Overview = () => {
  const features = [
    "Professional homepage introducing who I am",
    "Projects section showcasing my work and Future Interns tasks",
    "About/resume section highlighting skills and background",
    "Contact section with a clear way to reach me",
    "Responsive layout built for desktop and mobile",
  ];

  const techStack = [
    "React.js with modern UI patterns",
    "HTML, CSS, and JavaScript for structure and interaction",
    "Tailwind CSS and Vite for fast development",
    "Optional backend-ready architecture for future contact forms",
  ];

  return (
    <div className="content mt-16 md:mt-20 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2" id="overview">
      <div className="rounded-3xl p-8 md:p-14 bg-white shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.05)]">
        <p className="section-title">Portfolio Objective</p>
        <p className="font-normal text-[18px] max-sm:text-[14px] pt-4 text-gray-500 max-w-4xl">
          This website is designed as a clean, responsive digital resume and proof of work. It highlights my skills, completed projects, background, goals, and provides a clear way for people to contact me.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <p className="text-xl font-semibold mb-4">What this portfolio includes</p>
            <ul className="list-disc list-inside text-gray-500 space-y-3">
              {features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">Tech stack</p>
            <ul className="list-disc list-inside text-gray-500 space-y-3">
              {techStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
