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
    "I'm a passionate software developer focused on creating innovative solutions by embedding intelligence into applications. My deep interest in cloud-native technologies drives me to build scalable, efficient systems that power AI features. I prioritize information security, ensuring the applications I develop are robust, secure, and user-friendly. By leveraging the latest AI tools and continuously adapting to new challenges, I deliver solutions that blend technical excellence with a seamless user experience.",
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
  aiPractice: {
    pitch:
      "I'm at my best in codebases I've never seen, especially the ones that have been aging for a while. I use AI agents every day to get through the slow, mechanical work; the architecture, the design calls, and the code that ships stay with me.",
    highlights: [
      {
        title: "Reading unfamiliar code",
        body: "Mapping an unfamiliar system takes me days instead of weeks: the endpoints, the shared state, what calls what. Code nobody on the team fully understood becomes something they can reason about again.",
      },
      {
        title: "Modernizing aging stacks",
        body: "I've done backend framework upgrades, runtime moves, and cross-stack ports. I roll them out strangler-fig style, with characterization tests covering the old behavior, so there's never a big-bang cutover.",
      },
      {
        title: "Shipping features",
        body: "I join projects mid-quarter and ship the next feature or two as vertical slices, without breaking what already works. I hand back code the team can maintain, usually ahead of the estimate.",
      },
      {
        title: "Reviewing the diff",
        body: "Nothing ships without a read-through, mine included. Green tests aren't proof the change is correct or ready to ship; I sign off on that myself. I want to leave behind a codebase the team can keep working on after I'm gone.",
      },
    ],
  },
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
        "Independent software development and DevOps work for clients: backend systems, cloud infrastructure, and process automation.",
      ],
      bulletPoints: [
        "Delivered AI-assisted legacy modernization across client codebases: backend framework upgrades, runtime moves, and cross-stack ports. AI coding agents handled codebase comprehension, test backfill, and repetitive translation; architecture, design calls, and final review stayed with me.",
        "Built RESTful APIs and backend services in Node.js, shaped around each client's business logic.",
        "Developed custom software and automation scripts for client projects, including AI API integrations for text processing, data enrichment, and intelligent routing.",
        "Integrated AWS CloudFront, Redis, and monitoring tools (Sentry, CloudWatch) into client platforms to improve performance, scalability, and reliability.",
        "Dockerized services and managed 20+ servers across AWS and DigitalOcean for multiple clients, keeping availability high.",
        "Built a high-volume PDF generation service on Puppeteer and AWS Lambda, producing large documents from aggregated data.",
        "Used Cloudflare across client projects (DNS, CDN, WAF, Workers, KV, Pages) for serverless services, application security, and global content delivery.",
      ],
    },
    {
      company: "Ayris Global",
      link: "https://ayrisglobal.com/",
      badges: ["Part-time", "Fintech", "Payments"],
      title: "Backend Engineer",
      // logo: ,
      start: "Sep 2025",
      end: "Jun 2026",
      description: [
        "Backend work on payment infrastructure: Assure PAT (payment acceptance testing) and Ayris Pay (virtual cards and a mobile wallet built around spending controls).",
      ],
      bulletPoints: [
        "Built virtual card provisioning for Assure PAT: test cards issue in under 30 seconds, support 1,000+ reuses, and return to inventory automatically when a test finishes.",
        "Integrated AWS KMS in a zero-knowledge design so testers never see raw PAN or CVV data, with encryption across card lifecycle events and sensitive data flows.",
        "Built real-time APDU command capture and transaction logging for Assure PAT, giving the team structured traces to debug with and faster issue resolution.",
        "Implemented audit logging across all card events, provisioning actions, and transactions, putting every action on the record for compliance, traceability, and certification.",
        "Built an early version of the pre-transaction rule engine for Ayris Pay: merchant category restrictions, geographic boundaries, and usage limits are checked before requests reach the payment network.",
        "Designed the shared card access backend for Ayris Pay, letting cardholders give family or team members spending access without exposing their primary card credentials.",
        "Implemented data residency and localization controls so transaction processing met regional regulatory requirements in each target market.",
      ],
    },
    {
      company: "Ananta Security Lab",
      link: "https://anantasecuritylab.com/",
      badges: ["Backend", "AI Integration"],
      title: "Backend Developer",
      // logo: ,
      start: "Jan 2024",
      end: "Feb 2025",
      description: [],
      bulletPoints: [
        "Worked with clients to maintain and scale a high-traffic on-demand food delivery platform.",
        "Assisted clients with security audits and compliance work.",
        "Built a real-time attendance system around high-speed face recognition, tracking personnel and producing analytics on presence, punctuality, and historical trends.",
        "Developed a computer vision pipeline that extracts digital meter readings from images with a custom-trained OCR model, automating data collection.",
        "Prototyped integrations for new AI technologies in existing products, with fast iteration from idea to proof of concept.",
      ],
    },
    {
      company: "Rbian Infotech",
      link: "https://rbian.in/",
      badges: ["Node"],
      title: "Backend Developer",
      // logo: ,
      start: "Jan 2022",
      end: "Dec 2023",
      description: [
        "Client services company, so I worked on a variety of projects, sometimes with teams.",
      ],
      bulletPoints: [
        "Built scalable backend services for high-traffic cloud environments with Node.js, TypeScript, MongoDB, and PostgreSQL.",
        "Provisioned and managed core AWS infrastructure: EC2, load balancers, VPC, RDS, and S3.",
        "Introduced a Git-based documentation system to make collaboration easier and cut onboarding time for new engineers.",
        "Migrated a legacy ES5 codebase to TypeScript and added Jest tests, making the code easier to maintain and faster to work in.",
        "Set up and troubleshot CI/CD pipelines with code review built in, automating deployments.",
        "Standardized the team's dev environments with Docker and devcontainers, and set up linters and shared rules for code quality.",
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
    "Google Cloud Platform",
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
      title: "Slopnote RAG",
      techStack: ["AI SDK", "PG Vector", "Cloudflare Workers", "AI Gateway"],
      description:
        "Retrieval-augmented chat backend, built on Cloudflare Workers, Hono, and Postgres (pgvector).",
      link: {
        label: "slopnotes.kuldeep.tech",
        href: "https://github.com/coldter/slopnote-rag",
      },
    },
    {
      title: "Vync",
      techStack: [
        "React Native",
        "Expo",
        "Android TV",
        "Convex",
        "TanStack Start",
        "Cloudflare R2",
        "Turborepo",
        "Bun",
      ],
      description:
        "A managed media publishing system that pairs a phone controller with multiple Android TV displays for frame-accurate synchronized playback of images, videos, and slideshows.",
      link: {
        label: "kuldeep.tech",
        href: "https://kuldeep.tech/work/vync/",
      },
    },
    {
      title: "Tide Info",
      techStack: [
        "TypeScript",
        "Bun",
        "Monorepo",
        "serverless",
        "sqlite",
        "stormglass API/Openweather API",
      ],
      description:
        "A comprehensive tide tracking application providing real-time tide predictions, weather conditions, and smart alerts for coastal locations worldwide.",
      link: {
        label: "GitHub",
        href: "https://github.com/coldter/tide-info",
      },
    },
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
      title: "Commit Canvas",
      techStack: ["Golang", "CLI", "Bubble Tea", "Git Plumbing"],
      description:
        "A CLI that renders custom pixel-art messages onto your GitHub contribution graph by orchestrating strategically backdated commits across the 53×7 calendar grid.",
      link: {
        label: "kuldeep.tech",
        href: "https://kuldeep.tech/work/commit-canvas/",
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
  resumeDownloadUrl: "https://cv.kuldeep.tech/resume.pdf",
} as const;
