export type SocialLink = {
  name: "GitHub" | "LinkedIn" | "X" | "Peerlist";
  href: string;
  key: "github" | "linkedin" | "x" | "peerlist";
};

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/JeetuPalhub", key: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeetu-pal-683ba72a0/",
    key: "linkedin",
  },
  { name: "X", href: "https://x.com/Jeetupal31", key: "x" },
  { name: "Peerlist", href: "https://peerlist.io/jeetupal31", key: "peerlist" },
];

export const techStack = [
  {
    name: "TypeScript",
    detail: "Type-safe architectures for large codebases",
  },
  { name: "React", detail: "Composable UI systems with strong DX" },
  { name: "Next.js", detail: "High-performance SSR and routing at scale" },
  { name: "Tailwind CSS", detail: "Fast, maintainable design systems" },
  { name: "PostgreSQL", detail: "Relational data modeling and optimization" },
  { name: "Redis", detail: "Caching, queues, and low-latency access" },
  { name: "WebSockets", detail: "Real-time features and event-driven flows" },
  { name: "Turborepo", detail: "Scalable monorepo developer workflows" },
  { name: "Node.js", detail: "API and backend service implementation" },
];

export const projects: Project[] = [
  {
    name: "LeetLab",
    description:
      "DSA practice platform with structured problem solving and progression-focused learning paths.",
    image: "/projects/leetlab.svg",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/JeetuPalhub/leetlab",
  },
  {
    name: "SecondBrain",
    description:
      "A personal knowledge management and note-taking system for capturing ideas, connections, and insights.",
    image: "/projects/secondbrain.svg",
    tech: ["React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/JeetuPalhub/secondBrain",
    liveUrl: "https://brainly-neon.vercel.app/",
  },
];

export const journeyPoints = [
  "DSA with Java",
  "Backend architecture exploration",
  "Real-time systems using WebSockets",
  "Exploring GenAI, RAG, embeddings",
];

export const contactEmail = "jeetupal31@gmail.com";
