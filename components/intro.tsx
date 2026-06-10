"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/pic.jpg"
              alt="Jorge"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-3 mt-4 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-white/60"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI Agent &amp; Automation Developer
      </motion.p>

      <motion.h1
        className="mb-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        I build&nbsp;
        <span className="font-bold">production AI systems</span> that do real
        work —&nbsp;
        <span className="underline">agents</span>,&nbsp;
        <span className="underline">RAG pipelines</span>, and&nbsp;
        <span className="italic">document automation</span>.
      </motion.h1>

      <motion.p
        className="mb-10 px-4 text-base !leading-[1.6] text-gray-700 sm:text-lg dark:text-white/70"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Python · FastAPI · Next.js · Claude &amp; OpenAI · LangChain · MCP. I
        take AI from prototype to a deployed, containerized service people
        actually use — backed by&nbsp;
        <span className="font-bold">15 years</span> of running real-world
        industrial operations, so I understand the process before I automate it.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        <Link
          href="#projects"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Projects")
            setTimeOfLastClick(Date.now())
          }}
        >
          See my projects&nbsp;
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="#contact"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Hire / contact me&nbsp;
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV&nbsp;
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  )
}
