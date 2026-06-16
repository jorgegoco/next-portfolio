'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5)
  
  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <p className='-mt-6 mb-10 max-w-[42rem] mx-auto px-4 text-center text-gray-700 dark:text-white/70'>
        A document-intelligence suite (parse, extract, RAG, multi-doc chat), a
        multi-agent research system, MCP infrastructure, and a real-time voice
        agent — all built and deployed.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}