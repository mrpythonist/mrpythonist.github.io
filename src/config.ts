export const siteConfig = {
  name: "Muhammad Aqib",
  title: "Full Stack Developer",
  description: "Portfolio website of Muhammad Aqib",
  accentColor: "#1d4ed8",
  social: {
    email: "muhammadaqib5475@gmail.com",
    linkedin: "https://linkedin.com/in/mrpythonist",
    github: "https://github.com/mrpythonist",
    upwork: "https://www.upwork.com/freelancers/~0147fe796d3aa5f35e",
  },
  aboutMe:
    "Full-Stack Developer specializing in Laravel, React, and Next.js with 3+ years of industry experience. I build secure, scalable web applications from robust backend APIs to seamless frontend experiences optimized for performance and user engagement. My expertise includes resposive wesbite design, API's development, database management and AWS deployments, ensuring end-to-end solutions tailored to your business needs.",
  skills: [
  {
    category: "Frontend",
    items: ["React", "NextJS", "ViteJS", "JavaScript", "TypeScript", "Bootstrap", "TailwindCSS", "MaterialUI"]
  },
  {
    category: "Backend", 
    items: ["Laravel", "PHP", "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "RESTful API's", "JWT"]
  },
  {
    category: "DevOps",
    items: ["AWS", "Docker", "Apache", "nginx", "CI/CD", "Infrastructure", "Proxmox", "Linux", "Bash"]
  },
  {
    category: "Tools",
    items: ["Git/Github", "npm", "VS Code", "Postman", "Jira", "Figma"]
  }
],
  projects: [
    {
      name: "Debt Solution America",
      description:
        "A landing page website for a debt consolidation company that is responsive for every device made in NextJS, NodeJS and ExpressJS.",
      link: "https://debtsolutionamerica.com/",
      skills: ["Next", "Node.js", "Figma", "AWS"],
    },
    {
      name: "Telegram Attendance Bot",
      description:
        "A telegram bot built for managers who can manage agents breaks, agents take breaks, start shifts, and queue is also implemented, managers can track agents breaks and shifts and also can manage them and see logs as well.",
      link: "#",
      skills: ["React", "Node.js", "MongoDB", "DigitalOcean"],
    },
    {
      name: "Chrome Extension LiveChat: Built Extension with JavaScript",
      description:
        "Google Chrome Extension that is built to assist LiveChat agents so that they can copy the customers data and paste in respectable columns in one click instead of copy/paste one by one.",
      link: "https://chromewebstore.google.com/detail/livechat-assist/hmlnckpdoinlgfedalponcobpclbclnb",
      skills: ["JavaScript", "Google Chrome Extension"],
    },
  ],
  experience: [
    {
      company: "TurboDebt",
      title: "Software Engineer",
      dateRange: "Mar 2023 - Present",
      bullets: [
        "Building/maintaining the Laravel/PHP system that processes leads from media partners.",
        "Ensuring stability, troubleshooting issues, and optimizing backend/frontend performance.",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Upgrading features and scalability to support company growth.",
        "Collaborated with product team to define technical requirements",
        "End-to-end development—from backend APIs to frontend dashboards.",
      ],
    },
    {
      company: "Upwork Inc.",
      title: "Full Stack Developer",
      dateRange: "Jan 2021 - Present",
      bullets: [
        "Build scalable solutions from backend (Laravel/Node.js) to frontend (React/Next.js), ensuring seamless performance",
        "Develop intuitive admin panels with Tailwind/Bootstrap for actionable insights.",
        "Create secure RESTful APIs for third-party integrations",
        "Single-handedly manage both backend logic and frontend UX, saving time/cost.",
        "Regular updates, no tech jargon, and deadline-driven results.",
      ],
    },
  ],
  education: [
    {
      school: "COMSATS University Islamabad",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2019 - 2023",
      achievements: [
        "Studied core CS concepts: algorithms, databases, and software engineering",
        "Developed strong problem-solving skills through technical coursework",
        "Gained teamwork experience in collaborative academic projects",
      ],
    },
  ],
};
