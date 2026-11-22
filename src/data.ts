import type { IconType } from "react-icons";
import { SiLeetcode } from "react-icons/si";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiCode,
  FiBriefcase,
  FiBook,
  FiAward,

} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { LuPuzzle } from "react-icons/lu";

// Placeholder content: replace with your own details, photo and projects.
export type Tab = "About" | "Resume" | "Project" | "Experience" | "Contact";
export const TABS: Tab[] = ["About", "Resume", "Project", "Experience", "Contact"];

export interface Profile { name: string; title: string; email: string; phone: string; location: string; avatar: string }
export const profile: Profile = {
  name: "Devansh Indoliyan", title: "Software Developer", email: "devanshindoliyan2123@gmail.com",
  phone: "+91 8279545085", location: "Uttarakhand, India", avatar: `${import.meta.env.BASE_URL}profile.jpeg`,
};

// Icons come from react-icons (https://react-icons.github.io/react-icons/).
// To change one, import another icon above and put it in the `icon` field.
export interface ContactItem { label: string; value: string; icon: IconType; href?: string }
export const contacts: ContactItem[] = [
  { label: "Email", value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, icon: FiPhone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "Location", value: profile.location, icon: FiMapPin },
];

// Replace each "#" with the real profile link (GitHub is already set).
export interface Social { label: string; href: string; icon: IconType }
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/DevanshIndoliyan-2123", icon: FaGithub },
  { label: "Insta", href: "https://www.instagram.com/dev.boot.yml?gwpx=OGpxb3N4eWtqY2J0", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devansh-indoliyan/", icon: FaLinkedinIn },
  { label: "Leetcode", href: "https://leetcode.com/u/Devansh_Indoliyan2123/", icon: SiLeetcode },
];

export interface Service { title: string; text: string; icon: IconType }
export const aboutText: string[] = [
  "I'm a Computer Science graduate with a strong foundation in Backend Development. I have hands-on experience with Java, Spring Boot, Spring Security, and JPA, and I've built RESTful APIs and backend applications.",
  "I understand the importance of secure authentication and authorization, and I've implemented login and registration flows and OAuth 2.0 in my projects. I also have a basic foundation in multithreading and a focus on writing clean, maintainable code. Alongside backend skills, I have working knowledge of frontend technologies, which helps me integrate APIs smoothly with the UI. This lets me collaborate effectively with frontend developers, designers, and other backend engineers to deliver reliable, scalable systems.",
];
export const services: Service[] = [
  { title: "Development",
    text: "Building responsive and scalable applications using modern technologies.",
    icon: FiCode },
  { title: "Competitive Programming",
    text: "Solving complex algorithmic problems and joining coding contests.", 
    icon: LuPuzzle },
  { title: "Freelancing", 
    text: "Providing professional development services to clients worldwide.", 
    icon: FiGlobe },
];

export interface Skill { label: string; value: string }
export const skills: Skill[] = [
  { label: "Languages", value: "Java, HTML, CSS, JavaScript" },
  { label: "Developer Tools", value: "Git, GitHub, Postman, VS Code" },
  { label: "Frameworks", value: "React, Redux, Tailwind CSS, Node.js, Express" },
  { label: "Database", value: "MySQL, MongoDB" },
];

export interface Job { company: string; period: string; points: string[] }
export const jobs: Job[] = [
  { company: "Company One", period: "Feb 2025 – May 2025, City", points: ["Built a responsive website with HTML, CSS and JavaScript.", "Managed 500+ products with structured layouts."] },
  { company: "Company Two", period: "May 2025 – Jul 2025, City", points: ["Worked on a full-stack feature using Node.js and MongoDB."] },
];

export interface Project { title: string; category: "Frontend" | "Full Stack"; image: string; github: string; live: string }
export const projects: Project[] = [
  { title: "Chat App", category: "Full Stack", image: "https://placehold.co/800x400/1e1e1f/ffdb70?text=Chat+App", github: "#", live: "#" },
  { title: "Restaurant Site", category: "Frontend", image: "https://placehold.co/800x400/1e1e1f/ffdb70?text=Restaurant", github: "#", live: "#" },
];

// ---------- Resume data ----------

export interface ResumeSkill {
  label: string;
  value: string;
}

export interface ResumeTimelineItem {
  title: string;
  meta?: string;
  bullets: string[];
}

export interface ResumeSkillsSection {
  id: string;
  title: string;
  icon: IconType;
  type: "skills";
  items: ResumeSkill[];
}

export interface ResumeTimelineSection {
  id: string;
  title: string;
  icon: IconType;
  type: "timeline";
  items: ResumeTimelineItem[];
}

export type ResumeSection =
  | ResumeSkillsSection
  | ResumeTimelineSection;

export const resumeSections: ResumeSection[] = [
  {
    id: "skills",
    title: "Technical Skills",
    icon: FiCode,
    type: "skills",
    items: [
      { label: "Languages", value: "Java, HTML, CSS, JavaScript" },
      {
        label: "Developer Tools",
        value: "Git, GitHub, Postman, REST APIs, Render, IntelliJ IDEA, VS Code",
      },
      {
        label: "Technologies/Frameworks",
        value: "React JS, Spring Boot, Spring Data, Hibernate/JPa, Spring Security",
      },
      { label: "Database", value: "MySQL, PostgreSql" },
      { label: "CS Fundamentals", value: "OOP's, DBMS, Operating System. Computer Network" },
    ],
  },

  {
    id: "experience",
    title: "Experience",
    icon: FiBriefcase,
    type: "timeline",
    items: [
      {
        title: "Cognifyz Technologies",
        meta: "Aug 2025 – Sep 2025, Pune, Maharashtra",
        bullets: [
          "Developed a responsive product showcase website from scratch using HTML5, CSS3, and JavaScript.",
          "Gained hands-on experience in real-world UI/UX implementation and responsive design principles.",
          "Implemented and managed 500+ products on the platform with structured layouts, categories, and interactive features.",
        ],
      },
       
    ],
  },

  {
    id: "projects",
    title: "Projects",
    icon: FiCode,
    type: "timeline",
    items: [
      {
        title: "",
        bullets: [
          "Built and deployed a real-time collaborative code editor using Node.js, Express.js, and WebSockets, enabling multiple users to edit simultaneously.",
          "Integrated JDoodle API for code execution and Monaco Editor for enhanced code editing experience.",
          "Implemented JWT authentication, session-based collaboration rooms, and dark/light theme support.",
        ],
      },
      {
        title: "Chatty",
        bullets: [
          "Developed and deployed a full-stack chat application using React.js, Node.js, and MongoDB with real-time messaging using Socket.io.",
          "Implemented JWT-based authentication with cookie management and utilized Cloudinary for image uploads.",
          "Implemented real-time messaging with WebSockets for seamless one-to-one and group conversations.",
          "Enhanced user experience with 32 customizable themes using daisyUI.",
          "Designed and optimized MongoDB database schemas for efficient storage and retrieval of chat history.",
        ],
      },
      {
        title: "Burger Beasts",
        bullets: [
          "Developed a dynamic homepage for Burger Beast using React.js, creating an engaging and responsive user interface that adapts seamlessly across devices.",
          "Implemented React Router to enable smooth navigation and enhance user experience.",
          "Added interactive UI components with React Bootstrap.",
        ],
      },
      {
        title: "Spotify Clone",
        bullets: [
          "Developed a full-stack Spotify clone using React.js, Node.js, and MongoDB.",
          "Integrated Spotify API for music playback and authentication.",
          "Implemented user authentication and authorization using JWT.",
          "Utilized Cloudinary for image uploads and storage.",
        ],
      },
      {
        title: "Virtual Garden",
        bullets: [
          "Developed a responsive and interactive virtual garden using React.js and CSS3.",
          "Integrated real-time data updates and user interactions.",
          "Implemented backend functionality using Node.js and MongoDB.",
        ],
      },
    ],
  },

  {
    id: "education",
    title: "Education",
    icon: FiBook,
    type: "timeline",
    items: [
      {
        title: "Tula's Institute of Dehradun",
        meta: "Sep. 2022 – Aug 2026",
        bullets: [
          "Bachelor of Technology in Information Technology",
          "CGPA - 7.02",
          "Location: Dehradun, Uttarakhand",
        ],
      },
      {
        title: "Holy Ganges Public School",
        meta: "April 2021 – May 2022",
        bullets: [
          "12th class",
          "Percentage - 70.5",
          "Location: Haridwar, Uttarakhand",
        ],
      },
      {
        title: "Holy Ganges Public School",
        meta: "April 2019 – April 2020",
        bullets: [
          "10th class",
          "Percentage - 75%",
          "Location: Haridwar, Uttarakhand",
        ],
      },
    ],
  },

  {
    id: "leadership",
    title: "Leadership / Extracurricular / Achievement",
    icon: FiAward,
    type: "timeline",
    items: [
      {
        title: "Hack for Future 2.0",
        meta: "3rd Place – Hack for Future 2.0 (National-Level Hackathon)",
        bullets: [
          "Secured 3rd position among 79 teams in a 30-hour national-level hackathon at Tula's Institute, Dehradun. ",
          "CG monitoring device to improve accessibility to cardiac health monitoring through innovation and teamwork.",
        ],
      },
      {
        title: "Non-Tech Committee Head In  VIBGYOR",
        meta: "2023 college fest",
        bullets: [
          "Led and managed 25 teams during the college fest.",
        ],
      },
      {
        title: "LeetCode Achievements",
        bullets: [
          "Earned 100 Days Badge on LeetCode.",
          "Solved 300+ problems on LeetCode.",
        ],
      },
    ],
  },
];
