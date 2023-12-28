import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const RESUME_DATA = {
  name: "Kuldeep Parmar",
  initials: "KP",
  location: "Rajkot,Gujarat, India.",
  locationLink: "https://www.timeanddate.com/time/zone/india/rajkot",
  about:
    "I'm a passionate software developer fascinated by the ever-growing world of cloud-native tech, with a keen focus on information security to build beautiful and secure solutions.",
  summary: [
    "I'm an enthusiastic software developer with strong problem-solving skills and a passion for creating efficient and scalable solutions.",
    "I am constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends, ensuring that I can contribute innovative ideas and solutions to any development project.",
    "Willing to work remotely with teams to embrace new challenges and achieve success.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/77358146?v=4",
  personalWebsiteUrl: "https://kuldeep.tech",
  contact: {
    email: "hi@kuldeep.tech",
    tel: "+916355720306",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/coldter",
        icon: GitHubIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/coldter",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "Atmiya University",
      degree: "Bachelor Of Science in Information Tech",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "1lint",
      link: "#",
      // link: "https://1lint.com",
      badges: ["Node"],
      title: "Backed Developer",
      // logo: ,
      start: "2022",
      end: "2023",
      description: [
        "Got my first exposure to the industry as an intern and later graduated as a backend engineer, during which I primarily worked with Node.js and its ecosystem and later explored some DevOps sides of things.",
        "Due to the service nature of the company, I had the opportunity to work on a diverse range of projects, sometimes with teams.",
      ],
      bulletPoints: [
        "Worked on many demo projects, most of which were built from the ground up with various different tech stacks.",
        "Worked on many different scales of projects to assist in maintaining the project for various new requirements. Also helped in migrating legacy code to Node with an industry standard stack and best practices.",
        "Later, I explored some infrastructure-related things, helped standardize dev environments, and setup some production stuff.",
      ],
    },
  ],
  skills: [
    "Golang",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "Deno",
    "Git",
    "Linux",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Websockets",
    "Socket.io",
    "CI/CD",
    "GitHub Actions",
  ],
  projects: [
    {
      title: "Mostly Experimentation",
      techStack: ["Everything"],
      description:
        "For side stuff, I like to experiment backend and could-native stuffs that sparks my interest...",
      // logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/coldter?tab=stars",
      },
    },
    {
      title: "Cloudflare Pages Stack WeatherApp",
      techStack: [
        "Hono",
        "Cloudflare Pages",
        "Cloudflare Workers",
        "Cloudflare KV",
        "React",
        "TypeScript",
        "OpenWeatherMap API",
      ],
      description:
        "A small weather app built with React and cloudflare pages and hono🔥 framework with cloudflare workers.",
      // logo:
      link: {
        label: "weather app",
        href: "https://weather.p.kuldeep.tech",
      },
    },
  ],
  resumeDownloadUrl: "https://kuldeep.tech/pdfs/resume.pdf",
} as const;
