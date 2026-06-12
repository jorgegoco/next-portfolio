import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import littleShopImg from "@/public/littleShop.png"
import ticketImg from "@/public/ticket.png"
import sellitImg from "@/public/sellit.png"
import adeParseImg from "@/public/projects/ade-parse.jpg"
import adePipelineImg from "@/public/projects/ade-pipeline.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Electronics & Automation Engineering",
    location: "Universidad de Vigo",
    description:
      "Studied Industrial Electronics and Automation Engineering — the technical foundation I later carried into operations and, today, into AI and automation work.",
    icon: React.createElement(LuGraduationCap),
    date: "1998 - 2002",
  },
  {
    title: "Production Manager — MAI",
    location: "Ourense, Spain",
    description:
      "Ran operations and a 20+ person team. Applied Six Sigma to optimize workflows and quality — the process discipline I now bring to automation work.",
    icon: React.createElement(CgWorkAlt),
    date: "2002 - 2017",
  },
  {
    title: "Technical Mentor — Microverse",
    location: "Remote",
    description:
      "Mentor junior developers through code reviews and architecture guidance, focused on code quality and shipping complete full-stack projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "AI & Automation Developer — Freelance",
    location: "Remote",
    description:
      "Design, build, and deploy production AI systems: multi-agent workflows, RAG pipelines, MCP integrations, and document-extraction automation using Claude, OpenAI, LangChain, and FastAPI — shipped as containerized services on VPS infrastructure. 30+ certifications in ML, Deep Learning, NLP, and Computer Vision from Stanford, MIT, and DeepLearning.AI.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Developer — The Ticket Merchant",
    location: "Remote",
    description:
      "Built an internal web application (Next.js, Node.js, SQL Server) with an API/microservices architecture. Ran code reviews and solved complex integration problems with a multidisciplinary team.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const

export const projectsData = [
  {
    title: "ADE Parse — Document Parser & Extractor",
    description:
      "Vision-first parsing of any PDF or image into structured markdown, plus schema-based field extraction with visual grounding (handles handwriting, stamps, broken tables).",
    tags: ["Python", "FastAPI", "Claude", "LandingAI ADE", "React"],
    imageUrl: adeParseImg,
    link: "https://github.com/jorgegoco/demo-ade-parse-front",
    codeUrl: "https://github.com/jorgegoco/demo-ade-parse-front",
    videoUrl: "/projects/ade-parse.mp4",
  },
  {
    title: "ADE Pipeline — Loan Application Processor",
    description:
      "End-to-end intake for lending/KYC — batch-classify financial docs (IDs, W-2s, pay stubs, bank/investment statements), extract type-specific fields, and cross-validate across all of them.",
    tags: ["Python", "FastAPI", "Claude", "LandingAI ADE", "React"],
    imageUrl: adePipelineImg,
    link: "https://github.com/jorgegoco/demo-ade-pipeline-front",
    codeUrl: "https://github.com/jorgegoco/demo-ade-pipeline-front",
    videoUrl: "/projects/ade-pipeline.mp4",
  },
  {
    title: "ADE RAG — Document Q&A",
    description:
      "Retrieval-augmented Q&A over a corpus of uploaded documents — answers grounded in source chunks with page citations.",
    tags: ["Python", "FastAPI", "Claude", "LandingAI ADE", "ChromaDB", "OpenAI Embeddings"],
    imageUrl: ticketImg,
    link: "https://github.com/jorgegoco/miagentuca-demos",
    codeUrl: "https://github.com/jorgegoco/miagentuca-demos",
  },
  {
    title: "ADE Chat — Multi-Doc Chat",
    description:
      "Conversational interface over multiple documents simultaneously — cross-file reasoning with full citation support.",
    tags: ["Python", "FastAPI", "Claude", "LandingAI ADE", "ChromaDB"],
    imageUrl: sellitImg,
    link: "https://github.com/jorgegoco/miagentuca-demos",
    codeUrl: "https://github.com/jorgegoco/miagentuca-demos",
  },
  {
    title: "Research Agent (Multi-Agent System)",
    description:
      "A team of cooperating AI agents — planner → researcher → writer → editor — that autonomously produces full academic reports from arXiv and live web search, with real-time progress tracking.",
    tags: ["Python", "FastAPI", "LangChain", "PostgreSQL"],
    imageUrl: ticketImg,
    link: "https://github.com/jorgegoco/research-agentic-ai",
  },
  {
    title: "MCP Chatbot Client",
    description:
      "A production Model Context Protocol client that connects to unlimited MCP servers at once and discovers their tools dynamically — solving the M×N integration problem with a clean M+N pattern.",
    tags: ["Python", "MCP", "Claude API"],
    imageUrl: sellitImg,
    link: "https://github.com/jorgegoco/mcp-chatbot-client",
  },
  {
    title: "Job Offers Generator",
    description:
      "A web app that reads a job posting and generates a tailored CV and cover letter with Claude — automatic language detection and PDF export built in.",
    tags: ["Python", "FastAPI", "Claude", "WeasyPrint"],
    imageUrl: littleShopImg,
    link: "https://github.com/jorgegoco/job_offers",
  },
  {
    title: "UI Gen — Components from Natural Language",
    description:
      "Describe a UI in plain language and get a working React component back, with live preview, hot reload, and user accounts.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "Vercel AI SDK"],
    imageUrl: ticketImg,
    link: "https://github.com/jorgegoco/uigen",
  },
  {
    title: "Audio Diary (Privacy-First)",
    description:
      "A voice journaling app that transcribes speech locally with Whisper — no audio ever leaves the device.",
    tags: ["Next.js 15", "FastAPI", "Whisper"],
    imageUrl: sellitImg,
    link: "https://github.com/jorgegoco/audio-diary-app",
  },
  {
    title: "Cooking Copilot — Voice Agent (in progress)",
    description:
      "A voice-driven cooking assistant — talk to the agent while you cook and it drives the on-screen recipe (advancing steps, highlighting ingredients, starting timers) while the UI feeds context back to the agent. A hands-on exploration of real-time, bidirectional voice agents.",
    tags: ["React 19", "TypeScript", "Vite", "Vocal Bridge SDK", "In progress"],
    imageUrl: littleShopImg,
    link: "https://github.com/jorgegoco/cooking_copilot",
  },
] as const

export const skillsData = [
  // AI / LLMs & Agents
  "Anthropic Claude API",
  "OpenAI API",
  "Prompt Engineering",
  "AI Agent Development",
  "LangChain",
  "RAG",
  "Vector Databases",
  "Model Context Protocol (MCP)",
  "Claude tool-use / agentic loops",
  "LandingAI ADE (document extraction)",
  "ChromaDB",
  "Voice agents (real-time)",
  "Hugging Face",
  "Ollama (local inference)",
  "OCR & Vision-Language Models",
  // Backend & Integration
  "Python",
  "FastAPI",
  "Node.js",
  "Express",
  "REST API design",
  "Microservices",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "SQL Server",
  // Frontend & Full-Stack
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Ruby on Rails",
  "Tailwind CSS",
  "Redux",
  // DevOps & Deployment
  "Docker",
  "VPS deployment (Contabo / Easypanel)",
  "AWS (S3, Lambda)",
  "Fly.io",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  // Foundations
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Git",
  "TDD (pytest, Jest)",
  "Agile/Scrum",
] as const
