import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import researchAgentImg from "@/public/projects/research-agent.png"
import mcpChatbotImg from "@/public/projects/mcp-chatbot-client.png"
import cookingCopilotImg from "@/public/projects/cooking-copilot.png"
import adeParseImg from "@/public/projects/ade-parse.jpg"
import adePipelineImg from "@/public/projects/ade-pipeline.jpg"
import adeRagImg from "@/public/projects/ade-rag.jpg"
import adeChatImg from "@/public/projects/ade-chat.jpg"

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
      "Ran operations and a 20+ person team. Defined what correct looked like for a process, measured when it drifted, and traced failures to root cause — the process discipline I now bring to automation work.",
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
      "Design, build and deploy AI systems: multi-agent workflows, RAG pipelines, MCP integrations, and document-extraction automation using Claude, OpenAI, and FastAPI — shipped as containerized services on VPS infrastructure. 30+ certificates in AI, machine learning and mathematics from Stanford, MIT and DeepLearning.AI.",
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
    tags: ["JavaScript", "Vite", "LandingAI ADE"],
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
    imageUrl: adeRagImg,
    link: "https://github.com/jorgegoco/demo-ade-rag-front",
    codeUrl: "https://github.com/jorgegoco/demo-ade-rag-front",
    videoUrl: "/projects/ade-rag.mp4",
  },
  {
    title: "ADE Chat — Multi-Doc Chat",
    description:
      "Conversational interface over multiple documents simultaneously — cross-file reasoning with full citation support.",
    tags: ["Python", "FastAPI", "Claude", "LandingAI ADE", "ChromaDB"],
    imageUrl: adeChatImg,
    link: "https://github.com/jorgegoco/demo-ade-chat-front",
    codeUrl: "https://github.com/jorgegoco/demo-ade-chat-front",
    videoUrl: "/projects/ade-chat.mp4",
  },
  {
    title: "Research Agent (Multi-Agent System)",
    description:
      "A team of cooperating AI agents — planner → researcher → writer → editor — that autonomously produces full academic reports from arXiv and live web search, with real-time progress tracking.",
    tags: ["Python", "FastAPI", "aisuite", "PostgreSQL"],
    imageUrl: researchAgentImg,
    link: "https://github.com/jorgegoco/research-agentic-ai",
    codeUrl: "https://github.com/jorgegoco/research-agentic-ai",
    videoUrl: "/projects/research-agent.mp4",
  },
  {
    title: "MCP Chatbot Client",
    description:
      "A Model Context Protocol client (~250 lines) that connects to any number of MCP servers declared in config and discovers their tools dynamically — solving the M×N integration problem with a clean M+N pattern.",
    tags: ["Python", "MCP", "Claude API"],
    imageUrl: mcpChatbotImg,
    link: "https://github.com/jorgegoco/mcp-chatbot-client",
    codeUrl: "https://github.com/jorgegoco/mcp-chatbot-client",
    videoUrl: "/projects/mcp-chatbot-client.mp4",
  },
  {
    title: "Cooking Copilot — Voice Agent",
    description:
      "A voice-driven cooking assistant — talk to the agent while you cook and it drives the on-screen recipe (advancing steps, highlighting ingredients, starting timers) while the UI feeds context back to the agent. Built on the Vocal Bridge SDK — I built the application layer and the bidirectional client actions, not the speech pipeline.",
    tags: ["React 19", "TypeScript", "Vite", "Vocal Bridge SDK"],
    imageUrl: cookingCopilotImg,
    link: "https://github.com/jorgegoco/cooking_copilot",
    codeUrl: "https://github.com/jorgegoco/cooking_copilot",
    videoUrl: "/projects/cooking-copilot.mp4",
  },
] as const

export const skillsData = [
  // AI & Agents
  "Anthropic Claude API",
  "OpenAI API",
  "AI Agent Development",
  "Agent orchestration & tool-calling loops",
  "Model Context Protocol (client & server)",
  "RAG",
  "Vector Databases (ChromaDB)",
  "Document AI (LandingAI ADE)",
  "Voice agent UI (Vocal Bridge SDK)",
  "Ollama (local inference)",
  "Prompt Engineering",
  // Backend & Deployment
  "Python",
  "FastAPI",
  "REST API design",
  "Async background jobs",
  "Docker",
  "VPS deployment (Contabo / Easypanel)",
  "AWS S3 (application level)",
  "Linux",
  // Reliability
  "Timeouts, retries & exponential backoff",
  "LLM output validation",
  "Structured error handling",
  // Data
  "PostgreSQL",
  // Frontend
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
] as const
