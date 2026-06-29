import { useState } from "react";
import img1 from "../../assets/images/blog/web.png";
import img2 from "../../assets/images/blog/project.png";
import img3 from "../../assets/images/blog/javascript.png";
import img4 from "../../assets/images/blog/react.png";
import img5 from "../../assets/images/blog/portfolio.png";
import img6 from "../../assets/images/blog/intern.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "June 29, 2026",
    category: "Web Development Journey",
    readingTime: "6 min read",
    featured: true,
    title: "My Web Development Journey",
    summary:
      "From my first HTML page to building this portfolio with React, here is the path I followed and the lessons I learned.",
    details: [
      {
        heading: "What is this category?",
        text: "This section is about your personal story of becoming a web developer. People enjoy real experiences because they show dedication, challenges, and growth. Recruiters also like to see your learning mindset.",
      },
      {
        heading: "Why this category is important",
        list: [
          "Shows your passion for web development.",
          "Builds trust with recruiters.",
          "Inspires beginners.",
          "Demonstrates continuous learning.",
        ],
      },
      {
        heading: "Why I Started Learning Web Development",
        text: "Explain why you became interested in programming, what inspired you, your goals, and what you hope to achieve.",
      },
      {
        heading: "My First HTML Project",
        text: "Describe the first project you built, the HTML tags you learned, mistakes you made, and lessons learned. Include headings, paragraphs, images, links, lists, and forms.",
      },
      {
        heading: "Learning CSS",
        text: "Write about styling webpages with colors, fonts, flexbox, grid, and responsive design. Discuss what was difficult, how you practiced, and tips for beginners.",
      },
      {
        heading: "My JavaScript Learning Journey",
        text: "Explain variables, functions, loops, arrays, objects, DOM manipulation, and events. Mention the projects that helped you practice JavaScript.",
      },
      {
        heading: "Learning React",
        text: "Write about why React, components, props, state, hooks, and routing. Explain how React changed the way you build websites.",
      },
      {
        heading: "Lessons I Learned",
        list: [
          "Consistency is more important than talent.",
          "Build projects instead of only watching tutorials.",
          "Learn by making mistakes.",
          "Read documentation.",
          "Practice every day.",
        ],
      },
    ],
  },
  {
    id: 2,
    image: img2,
    date: "June 29, 2026",
    category: "Project Case Study",
    readingTime: "7 min read",
    title: "Building My Portfolio with React",
    summary:
      "A step-by-step look at the portfolio project, including tools, challenges, and the final architecture.",
    details: [
      {
        heading: "Introduction",
        text: "This project is a responsive portfolio website built using React and Tailwind CSS. It was created to showcase my work professionally and demonstrate my front-end skills.",
      },
      {
        heading: "Problem Statement",
        text: "I wanted a portfolio website that presents my projects clearly, loads quickly, and looks polished on every device.",
      },
      {
        heading: "Features",
        list: [
          "Responsive design",
          "Dark mode toggle",
          "Contact form",
          "Project showcase section",
          "Smooth animations",
        ],
      },
      {
        heading: "Technologies Used",
        list: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "Vite",
        ],
      },
      {
        heading: "Challenges",
        text: "I faced responsive layout issues, component structure decisions, and streamlining animations without slowing down the site.",
      },
      {
        heading: "How I Solved Them",
        text: "I solved layout problems with responsive utility classes, organized components by page sections, and optimized animations using lightweight CSS transitions.",
      },
      {
        heading: "What I Learned",
        list: [
          "Better React component architecture.",
          "How to build responsive pages with Tailwind.",
          "How to balance design and performance.",
        ],
      },
      {
        heading: "Future Improvements",
        list: [
          "Add authentication or CMS support.",
          "Improve project filtering and detail pages.",
          "Add more animations and accessibility enhancements.",
        ],
      },
    ],
  },
  {
    id: 3,
    image: img3,
    date: "June 29, 2026",
    category: "JavaScript Tips",
    readingTime: "5 min read",
    title: "10 JavaScript Methods Every Beginner Should Know",
    summary:
      "Essential JS methods that made my code cleaner and more efficient as I learned web development.",
    details: [
      {
        heading: "What is this category?",
        text: "This category teaches JavaScript concepts in simple language, helping beginners understand the fundamentals and write better code.",
      },
      {
        heading: "Variables and Data Types",
        text: "Explain let, const, and var, and the basic data types like number, string, boolean, array, object, null, and undefined.",
      },
      {
        heading: "Functions and Arrays",
        list: [
          "map() - transform array items.",
          "filter() - keep only matched values.",
          "reduce() - combine values into one result.",
          "forEach() - run code for every item.",
          "find() - return the first matching item.",
        ],
      },
      {
        heading: "Objects and Destructuring",
        text: "Explain object creation, destructuring, spread, and how to access nested values cleanly.",
      },
      {
        heading: "DOM Manipulation and Events",
        text: "Show querySelector, getElementById, addEventListener, and how to handle button clicks, form submissions, and mouse events.",
      },
      {
        heading: "Async JavaScript",
        text: "Introduce callbacks, promises, async/await, and fetching API data with fetch or Axios.",
      },
      {
        heading: "Common Mistakes",
        list: [
          "Forgetting return in functions.",
          "Using == instead of ===.",
          "Mutating arrays instead of returning new values.",
          "Using global variables too often.",
        ],
      },
    ],
  },
  {
    id: 4,
    image: img4,
    date: "June 29, 2026",
    category: "React Tutorials",
    readingTime: "6 min read",
    title: "React Components Explained",
    summary:
      "An approachable guide to components, props, and state that helped me build scalable React UIs.",
    details: [
      {
        heading: "What is this category?",
        text: "Teach React step by step and explain key concepts with examples, so beginners can build real interfaces.",
      },
      {
        heading: "Introduction to React",
        text: "React is a JavaScript library for building user interfaces with reusable components and a virtual DOM.",
      },
      {
        heading: "Components and JSX",
        text: "Functional components are the building blocks of React, and JSX lets you write HTML-like code inside JavaScript.",
      },
      {
        heading: "Props vs State",
        text: "Props pass data from parent to child, while state manages local component values that can change over time.",
      },
      {
        heading: "useEffect Made Easy",
        text: "useEffect handles side effects like API calls, subscriptions, and DOM updates with a dependency array.",
      },
      {
        heading: "Event Handling and Forms",
        text: "React events are handled with functions, and forms use controlled components to manage input state and validation.",
      },
      {
        heading: "Routing and Deployment",
        list: [
          "React Router for navigation.",
          "Build dynamic routes and smooth page transitions.",
          "Deploy using Vercel or Netlify.",
        ],
      },
    ],
  },
  {
    id: 5,
    image: img5,
    date: "June 29, 2026",
    category: "Portfolio Development",
    readingTime: "5 min read",
    title: "Designing My Portfolio",
    summary:
      "Why I chose the colors, fonts, and layout for a portfolio that feels modern and personal.",
    details: [
      {
        heading: "What is this category?",
        text: "Explain how you built your portfolio website, from planning and design to implementation and optimization.",
      },
      {
        heading: "Planning and Design",
        text: "Discuss goals, target audience, wireframes, color palette, typography, and spacing.",
      },
      {
        heading: "Responsive Design",
        text: "Cover mobile-first design, media queries, flexbox, and CSS grid to ensure the portfolio works on every device.",
      },
      {
        heading: "Animations and Performance",
        text: "Explain hover effects, scroll animations, image optimization, lazy loading, and code splitting.",
      },
      {
        heading: "SEO and Deployment",
        text: "Share how meta tags, Open Graph, sitemap, robots.txt, and deployment to Vercel or Netlify helped the portfolio reach viewers.",
      },
      {
        heading: "Future Updates",
        list: [
          "Add a blog admin dashboard.",
          "Integrate CMS support.",
          "Add more accessible interactions.",
        ],
      },
    ],
  },
  {
    id: 6,
    image: img6,
    date: "June 29, 2026",
    category: "Internship Journey",
    readingTime: "4 min read",
    title: "My First Internship Experience",
    summary:
      "Key takeaways from my first internship and how I stayed motivated while solving real problems.",
    details: [
      {
        heading: "What is this category?",
        text: "Document your internship experience from beginning to end, highlighting practical growth and professional development.",
      },
      {
        heading: "How I Got My Internship",
        text: "Explain your application process, resume preparation, portfolio improvements, and interview experience.",
      },
      {
        heading: "First Day Experience",
        text: "Share your introduction to the team, development environment setup, assigned tasks, and first impressions.",
      },
      {
        heading: "Daily Tasks and Technologies",
        list: [
          "Bug fixing",
          "UI implementation",
          "Feature development",
          "API integration",
          "Git and collaboration",
        ],
      },
      {
        heading: "Challenges I Faced",
        text: "Discuss understanding existing codebases, meeting deadlines, debugging issues, and working with teammates.",
      },
      {
        heading: "What I Learned",
        list: [
          "Writing cleaner code.",
          "Working with APIs.",
          "Version control with Git.",
          "Communication and teamwork.",
        ],
      },
      {
        heading: "Final Reflection",
        text: "Summarize major accomplishments, skills gained, favorite project, and how the internship prepared you for future roles.",
      },
    ],
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Discover portfolio stories, learning notes, project case studies, and
          practical React and JavaScript tips crafted for aspiring developers.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} onReadMore={() => setSelectedBlog(data)} />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedBlog && (
        <section className="mt-16 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-2xl data-[theme=dark]:border-slate-700 data-[theme=dark]:bg-slate-950">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-picto-primary">
                {selectedBlog.category}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 data-[theme=dark]:text-white">
                {selectedBlog.title}
              </h2>
              <p className="mt-4 text-sm text-gray-500 data-[theme=dark]:text-gray-300">
                {selectedBlog.summary}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedBlog(null)}
              className="inline-flex h-11 items-center rounded-full border border-gray-300 bg-white px-5 text-sm font-medium text-slate-900 transition hover:bg-gray-50 data-[theme=dark]:border-slate-700 data-[theme=dark]:bg-slate-900 data-[theme=dark]:text-white data-[theme=dark]:hover:bg-slate-800"
            >
              Close
            </button>
          </div>

          <div className="mt-10 grid gap-10">
            {selectedBlog.details.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-slate-900 data-[theme=dark]:text-white">
                  {section.heading}
                </h3>
                {section.text && (
                  <p className="mt-3 text-sm leading-7 text-slate-600 data-[theme=dark]:text-gray-300">
                    {section.text}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 data-[theme=dark]:text-gray-300">
                    {section.list.map((item, listIndex) => (
                      <li key={listIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Blog;
