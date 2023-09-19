import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import littleShopImg from "@/public/littleShop.png";
import ticketImg from "@/public/ticket.png";
import sellitImg from "@/public/sellit.png";

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
] as const;

export const experiencesData = [
  {
    title: "Data Science",
    location: "Santander, Spain",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Santander, Spain",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Santander, Spain",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "litle Shop",
    description:
      "Web App that allows users to handle little shops with few resources. This little project provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
    tags: ["Vite", "React", "TypeScript"],
    imageUrl: littleShopImg,
  },
  {
    title: "Ticket Admin",
    description:
      "Web App that helps a company to manage tickets among their employees. It is built with a MERN stack, which stands for MongoDB, Express, React, and Node.js. (You can play around with the app with my admin user: username: jorge password: test)",
    tags: ["MongoDB", "Express", "React", "Node"],
    imageUrl: ticketImg,
  },
  {
    title: "Sell It",
    description:
      "Web App that allows users to sell or buy almost anything online. You can watch, add, or manage products, and browse categories created by admins.",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS S3"],
    imageUrl: sellitImg,
  },
] as const;

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
  "Prisma",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;