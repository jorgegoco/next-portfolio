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
        After spending most of my life in the traditional industry, I decided to pursue my
        passion for programming. I enrolled in at&nbsp;<span className="font-medium">Microverse</span>: a remote school for&nbsp;
        <span className="font-medium">full-stack web development</span>.&nbsp;
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is&nbsp;
        <span className="font-medium">
          React, Next.js, Node.js, and Ruby on Rails
        </span>
        , and I am also familiar with TypeScript and Python. I am always looking to
        learn new technologies. I am currently looking for a&nbsp;
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, reading books, and conversing with my beloved ones. I also enjoy&nbsp;
        <span className="font-medium">learning new things</span>. I am currently
        learning about&nbsp;
        <span className="font-medium">history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}