'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About")

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I&apos;m an engineer who builds AI that ships.</span>{" "}
        I spent the first part of my career in industrial engineering and
        production management — running operations, defining what correct looked
        like for a process, measuring when it drifted, and cutting waste. That
        taught me something most developers never learn the hard way:&nbsp;
        <span className="italic">
          automation only matters when it solves a real bottleneck in how a
          business actually runs
        </span>
        .
      </p>

      <p className="mb-3">
        I now build that automation directly. My focus is&nbsp;
        <span className="font-medium">AI agents and workflow systems</span> —
        designing them, prompting them well, wiring them to APIs and databases,
        containerizing them with Docker, and deploying them so they run reliably.
        I work day-to-day with&nbsp;
        <span className="font-medium">Claude and OpenAI</span>, RAG and vector
        databases, both sides of the&nbsp;
        <span className="font-medium">Model Context Protocol</span>, and document
        extraction on&nbsp;
        <span className="font-medium">LandingAI&apos;s ADE</span>. I write&nbsp;
        <span className="font-medium">my own agent orchestration</span> rather
        than leaning on a framework, and I set my own timeouts, retries and
        validation rather than relying on library defaults. On the frontend
        and full-stack side I work in&nbsp;
        <span className="font-medium">Next.js, React, Node.js, and Ruby on Rails</span>.
      </p>

      <p>
        What I bring that&apos;s harder to find: I combine current, hands-on
        agentic-AI work with a deep, practical understanding of business
        processes — and <span className="underline">I deliver</span>. I&apos;d
        rather show you a deployed system than a slide. I&apos;m available for
        contract projects and open to the right full-time role.
      </p>
    </motion.section>
  )
}