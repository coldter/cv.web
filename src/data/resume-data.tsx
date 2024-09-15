import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { TelegramIcon } from "@/components/icons/TelegramIcon";

export const RESUME_DATA = {
  name: "Kuldeep Parmar",
  initials: "KP",
  location: "Rajkot,Gujarat, India.",
  locationLink: "https://www.timeanddate.com/time/zone/india/rajkot",
  about:
    "I'm a passionate software developer with strong problem-solving skills and deep interest in the ever-growing world of cloud-native tech with a keen focus on information security to build beautiful and secure solutions.",
  summary: [
    "I'm a passionate software developer with a strong focus on solving complex problems and creating innovative, high-quality solutions. My deep interest in cloud-native technologies drives me to stay at the forefront of modern software development practices, leveraging the latest tools and platforms to build scalable, efficient systems. I also prioritize information security, ensuring that the applications and systems I develop are not only functional and user-friendly but also robust and secure. By continuously learning and adapting to new challenges, I aim to deliver solutions that blend technical excellence with a seamless user experience.",
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
      badges: ["Node"],
      title: "Backed Developer",
      // logo: ,
      start: "Jan 2022",
      end: "Dec 2024",
      description: [
        "Due to the service nature of the company, I had the opportunity to work on a diverse range of projects, sometimes with teams.",
      ],
      bulletPoints: [
        "I worked as a key part of the backend development leveraging technologies like Node.js, TypeScript, MongoDB, PostgreSQL, message queues, etc. to build scalable solutions for high traffic and cloud environments.",
        "Provisioned and maintained cloud infrastructure like provisioning of Ec2, Loadbalancers, VPC, RDS, S3, etc.",
        "Developed a git based documentation system for engineers to easily collaborate and document various part of the projects and codebase, decreasing time in onboarding and knowledge transfer.",
        "Migrated legacy es5 codebase to typescript and implemented tests for critical parts using frameworks like jest, resulting in better maintainability with quicker development cycles.",
        "Worked on various POCs for new feature and for project development from the ground up with high focus deliverability and fast iteration.",
        "Help in implementing and troubleshoot CI/CD pipelines for various projects with code review systems.",
        "Utilized docker and devcontainer to standardize development environment across team member, along with linters like ESLint and prettier to maintain code quality and consistency across projects.",
      ],
    },
    {
      company: "Ananta Security Lab",
      link: "#",
      badges: ["DevOps"],
      title: "Backend Developer(Node.js)/DevOps",
      // logo: ,
      start: "Jan 2024",
      end: "Present",
      description: [""],
      bulletPoints: [
        "Joined as key resource for maintaining and scaling of company's on-demand food delivery platform with large codebase and many entities.",
        "Utilized noje.js and related ecosystem to build RESTful APIs for various services.",
        "Integrated solutions like AWS CloudFront, Redis cache and monitoring services like sentry and CloudWatch in existing platform to improve performance and reliability.",
        "Dockerized various services and managed and maintained 20 plus servers on various platforms.",
        "Built a high volume PDF generation service using puppeteer and AWS lambda to generate large PDFs with gathered data from various sources.",
        "Helped companies to conduct various security audits and compliance.",
        "Actively maintained project documentations and wikis.",
        "Utilized Cloudflare platform with DNS, CND, waf, workers, KV, pages etc. to fulfill many projects serverless requirements.",
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
    "Jest",
    "Vitest",
    "Git",
    "Linux",
    "AWS",
    "Docker",
    "MongoDB",
    "Puppeteer",
    "Playwright",
    "Cloudflare",
    "Cloudflare Workers",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "RabbitMQ",
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
