import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import littleShopImg from "@/public/littleShop.png"
import ticketImg from "@/public/ticket.png"
import sellitImg from "@/public/sellit.png"

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
    title: "Industrial Electronics and Automation Engineering",
    location: "Vigo, Spain",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a Production Manager.",
    icon: React.createElement(LuGraduationCap),
    date: "1998 - 2002",
  },
  {
    title: "Production Manager",
    location: "Ourense, Spain",
    description:
      "With nearly 15 years of experience in the wood manufacturing industry, I have held various roles, most notably as a production manager.",
    icon: React.createElement(CgWorkAlt),
    date: "2002 - 2017",
  },
  {
    title: "Microverse",
    location: "Remote",
    description:
      "I graduated after 11 months of studying. I immediately began mentoring junior web developers, providing technical support through code reviews.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Santander, Spain",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and Ruby on Rails. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const

export const projectsData = [
  {
    title: "little Shop",
    description:
      "Web App that allows users to handle little shops with few resources. This little project provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
    tags: ["Vite", "React", "TypeScript"],
    imageUrl: littleShopImg,
    link: "https://jorgegoco.github.io/littleShop/",
  },
  {
    title: "Ticket Admin",
    description:
      "Web App that helps a company to manage tickets among their employees (You can play around with the app with my admin user: username: jorge password: test)",
    tags: ["MongoDB", "Express", "React", "Node"],
    imageUrl: ticketImg,
    link: "https://ticketadmin.onrender.com/",
  },
  {
    title: "Sell It",
    description:
      "Web App that allows users to sell or buy almost anything online. You can watch, add, or manage products, and browse categories created by admins.",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS S3"],
    imageUrl: sellitImg,
    link: "https://sellit-rails.fly.dev/",
  },
] as const

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Rails",
  "Git",
  "Tailwind",
  "RSpec",
  "MongoDB",
  "Redux",
  "Jest",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "SQL Server",
] as const
