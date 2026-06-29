import { useRef, useState } from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.jpg";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.jpg";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Portfolio Project",
    title: "Future Interns Portfolio Task",
    description:
      "A responsive portfolio showcase built to highlight real skills, project work, and career goals.",
    details: {
      introduction:
        "A polished portfolio project built to share completed work, career goals, and technical strengths with future employers.",
      problemStatement:
        "The main challenge was creating a modern portfolio that looks professional, loads quickly, and supports a strong personal brand.",
      features: [
        "Responsive layout",
        "Project showcase cards",
        "Dark mode support",
        "Fast page performance",
      ],
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      challenges: [
        "Balancing design and performance",
        "Creating reusable card components",
        "Ensuring readability across devices",
      ],
      solution:
        "I built the portfolio using React components, Tailwind utilities, and structured the content for fast loading and easy navigation.",
      learning: [
        "Better component architecture",
        "Responsive design best practices",
        "How to build a portfolio that tells a story.",
      ],
      futureImprovements: [
        "Add a CMS for blog content.",
        "Add a case study modal for each project.",
      ],
    },
  },
  {
    id: 2,
    image: card2,
    category: "Web Application",
    title: "Responsive Landing Page",
    description:
      "Designed a modern landing page with mobile-first responsiveness and polished visuals.",
    details: {
      introduction:
        "A landing page built to convert visitors through clear messaging, strong visuals, and thoughtful layout.",
      problemStatement:
        "The goal was to create a design that looks great on mobile, desktop and maintains consistent branding.",
      features: [
        "Mobile-first design",
        "Clear call-to-action",
        "Modern typography",
        "Smooth responsive layout",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      challenges: [
        "Maintaining balance between visuals and speed",
        "Spacing content for multiple screen sizes",
      ],
      solution:
        "I used consistent spacing and responsive utilities to ensure the page adapts cleanly across devices.",
      learning: [
        "How to prioritize content hierarchy",
        "Responsive typography techniques",
      ],
      futureImprovements: [
        "Add animation to the hero section.",
        "Introduce form validation for lead capture.",
      ],
    },
  },
  {
    id: 3,
    image: card3,
    category: "React Project",
    title: "Portfolio Website",
    description:
      "Built a dynamic React portfolio site that highlights skills, projects, and contact details.",
    details: {
      introduction:
        "A React portfolio website designed to showcase work, explain skills, and make it easy for recruiters to connect.",
      problemStatement:
        "I needed a solution that is easy to maintain, reusable, and scalable as my project list grows.",
      features: [
        "React components",
        "Modular sections",
        "Reusable project cards",
        "Smooth navigation",
      ],
      technologies: ["React", "React Router", "Tailwind CSS", "Vite"],
      challenges: [
        "Choosing the right component structure",
        "Avoiding duplicate layout code",
      ],
      solution:
        "I organized the portfolio into reusable components, kept styles consistent, and used state only where needed.",
      learning: [
        "Reusable component design",
        "How to balance visual polish with maintainability",
      ],
      futureImprovements: [
        "Add a dedicated blog content system.",
        "Add a case study view for each project.",
      ],
    },
  },
  {
    id: 4,
    image: card4,
    category: "UI Design",
    title: "Dashboard Interface",
    description:
      "Created a clean dashboard design with user-friendly navigation and clear metrics.",
    details: {
      introduction:
        "A UI-focused dashboard built to help users understand metrics and navigate data quickly.",
      problemStatement:
        "The interface needed to display multiple data sections without overwhelming the user.",
      features: [
        "Metric cards",
        "Sidebar navigation",
        "Responsive grid layout",
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      challenges: [
        "Hierarchy of information",
        "Maintaining clarity at different breakpoints",
      ],
      solution:
        "I simplified the dashboard layout and used spacing, icons, and cards to guide the user's eye.",
      learning: [
        "Data presentation best practices",
        "Designing for usability and clarity",
      ],
      futureImprovements: [
        "Add interactive charts.",
        "Support data filtering and sorting.",
      ],
    },
  },
  {
    id: 5,
    image: card5,
    category: "Blog Layout",
    title: "Content Showcase",
    description:
      "Developed an engaging blog-style section for sharing ideas, updates, and project stories.",
    details: {
      introduction:
        "A content showcase layout that presents blog posts with a clean, readable design.",
      problemStatement:
        "The objective was to encourage readers to explore articles and stay engaged with the content.",
      features: [
        "Featured article card",
        "Reading time badges",
        "Clean typographic layout",
      ],
      technologies: ["React", "Tailwind CSS", "Swiper"],
      challenges: [
        "Balancing visual interest with readability",
        "Keeping the layout simple on mobile",
      ],
      solution:
        "I designed the blog cards with clear headings, summaries, and easy-to-click actions.",
      learning: [
        "How to improve blog usability",
        "Effective use of content cards",
      ],
      futureImprovements: [
        "Add markdown support for posts.",
        "Add a comments section.",
      ],
    },
  },
  {
    id: 6,
    image: card6,
    category: "Responsive Design",
    title: "Multi-Device Experience",
    description:
      "Optimized layouts and interactions for both desktop and mobile users.",
    details: {
      introduction:
        "A project focused on delivering consistent user experience across devices and screen sizes.",
      problemStatement:
        "The challenge was making sure every element adapts without breaking the layout.",
      features: [
        "Flexible grid layout",
        "Adaptive spacing",
        "Mobile-friendly navigation",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      challenges: [
        "Mobile menu behavior",
        "Spacing between content sections",
      ],
      solution:
        "I used responsive utilities and flexible spacing to ensure the interface works on all screen sizes.",
      learning: [
        "How to test designs across devices",
        "How to prioritize mobile-first layouts",
      ],
      futureImprovements: [
        "Add live device previews.",
        "Include accessibility improvements.",
      ],
    },
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const detailsRef = useRef(null);

  const onSelectProject = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of projects and Future Interns tasks that demonstrate my
            ability to build responsive, modern web interfaces and polished
            digital experiences.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} onCaseStudy={() => onSelectProject(data)} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#portfolio"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          View More Projects
        </a>
      </div>

      {selectedProject && (
        <section
          ref={detailsRef}
          className="mt-16 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-2xl"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-picto-primary">
                Case Study
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                {selectedProject.title}
              </h2>
              <p className="mt-4 text-sm text-gray-500">
                {selectedProject.description}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="inline-flex h-11 items-center rounded-full border border-gray-300 bg-white px-5 text-sm font-medium text-slate-900 transition hover:bg-gray-50"
            >
              Close
            </button>
          </div>

          <div className="mt-10 grid gap-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Introduction
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {selectedProject.details.introduction}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Problem Statement
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {selectedProject.details.problemStatement}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Features
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selectedProject.details.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Technologies Used
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selectedProject.details.technologies.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Challenges
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selectedProject.details.challenges.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Solution
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {selectedProject.details.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                What I Learned
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selectedProject.details.learning.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Future Improvements
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {selectedProject.details.futureImprovements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;
