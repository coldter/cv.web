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
				"Leveraged Node.js and its ecosystem to develop robust RESTful APIs and backend services tailored to specific client needs and business logic.",
				"Developed custom software solutions and automation scripts, including the integration of AI-powered APIs (e.g., for text processing, data enrichment, or intelligent routing) to meet unique client requirements.",
				"Integrated solutions such as AWS CloudFront, Redis cache, and monitoring services (Sentry, CloudWatch) into client platforms to significantly enhance performance, scalability, and reliability.",
				"Dockerized diverse services and managed/maintained over 20 servers across various cloud platforms (AWS, DigitalOcean) for multiple client projects, ensuring high availability.",
				"Built a high-volume PDF generation service using Puppeteer and AWS Lambda for clients, enabling the creation of large, data-driven PDFs from various aggregated sources.",
				"Provided technical consulting on cloud architecture, security best practices (including assisting with security audits and compliance requirements), and performance optimization strategies.",
				"Utilized the Cloudflare platform extensively (DNS, CDN, WAF, Workers, KV, Pages, etc.) to implement serverless solutions, enhance application security, and improve global content delivery for various client projects.",
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
				"Collaborated with clients as a key resource for maintaining and scaling a high-traffic, on-demand food delivery platform.",
				"Helped companies to conduct various security audits and compliance.",
				"Developed a real-time attendance system utilizing high-speed face recognition to track personnel and generate automated analytics on presence, punctuality, and historical trends.",
				"Engineered an end-to-end computer vision pipeline to automatically recognize and extract digital meter readings from images, leveraging a custom-trained OCR model to automate data collection.",
				"Developed various Proof-of-Concepts (POCs) for integrating emerging AI technologies into the existing product ecosystem, emphasizing fast iteration and delivery.",
			],
		},
		{
			company: "Rbian Infotech",
			link: "https://rbian.in/",
			badges: ["Node"],
			title: "Backed Developer",
			// logo: ,
			start: "Jan 2022",
			end: "Dec 2023",
			description: [
				"Due to the service nature of the company, I had the opportunity to work on a diverse range of projects, sometimes with teams.",
			],
			bulletPoints: [
				"Engineered scalable backend solutions for high-trafﬁc cloud environments using Node.js, TypeScript, MongoDB, and PostgreSQL.",
				"Provisioned and managed core AWS infrastructure, including EC2, Load Balancers, VPC, RDS, and S3.",
				"Developed a Git-based documentation system to streamline collaboration and reduce new engineer onboarding time.",
				"Migrated a legacy ES5 codebase to TypeScript and implemented Jest tests, improving code maintainability and development speed.",
				"Implemented and troubleshooted CI/CD pipelines with integrated code review systems to automate deployments.",
				"Standardized development environments across the team using Docker and devcontainers, enforcing code quality with ESLint and Prettier.",
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
			title: "Tide Info",
			techStack: ["TypeScript", "Bun", "Monorepo", "serverless", "sqlite", "stormglass API/Openweather API"],
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
