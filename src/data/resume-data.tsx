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
      company: "Freelancing",
      link: "#",
      badges: ["DevOps", "Node.js", "AI Integration"],
      title: "Backend Developer & DevOps",
      // logo: ,
      start: "Jan 2024",
      end: "Present",
      description: [
        "Provided independent software development and DevOps services to a diverse range of clients, focusing on backend systems, cloud infrastructure, and process automation.",
      ],
      bulletPoints: [
        "Managed end-to-end project lifecycle for various clients, from requirements gathering and solution design to deployment and post-launch support.",
        "Collaborated with clients as a key resource for maintaining and scaling diverse platforms, including an on-demand food delivery system with a large codebase and numerous entities.",
        "Leveraged Node.js and its ecosystem to develop robust RESTful APIs and backend services tailored to specific client needs and business logic.",
        "Developed custom software solutions and automation scripts, including the integration of AI-powered APIs (e.g., for text processing, data enrichment, or intelligent routing) to meet unique client requirements.",
        "Integrated solutions such as AWS CloudFront, Redis cache, and monitoring services (Sentry, CloudWatch) into client platforms to significantly enhance performance, scalability, and reliability.",
        "Dockerized diverse services and managed/maintained over 20 servers across various cloud platforms (AWS, DigitalOcean) for multiple client projects, ensuring high availability.",
        "Built a high-volume PDF generation service using Puppeteer and AWS Lambda for clients, enabling the creation of large, data-driven PDFs from various aggregated sources.",
        "Provided technical consulting on cloud architecture, security best practices (including assisting with security audits and compliance requirements), and performance optimization strategies.",
        "Actively maintained comprehensive project documentation, architectural diagrams, and wikis for client engagements to ensure clarity, smooth handovers, and knowledge transfer.",
        "Utilized the Cloudflare platform extensively (DNS, CDN, WAF, Workers, KV, Pages, etc.) to implement serverless solutions, enhance application security, and improve global content delivery for various client projects.",
      ],
    },
    {
      company: "Rbian Infotech",
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
    "AI/ML API Integration", // Added skill
  ],
  projects: [
    {
      title: "Kommit - CLI Tool",
      techStack: ["Golang", "Git", "CLI", "Cloudflare AI"],
      description:
        "A command-line interface tool to help enforce conventional commit messages or streamline the git commit process.",
      link: {
        label: "GitHub",
        href: "https://github.com/coldter/kommit",
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
  ],
  resumeDownloadUrl: "https://kuldeep.tech/pdfs/resume.pdf",
} as const;
