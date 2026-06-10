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
        <span className='font-medium'>Currently building:</span> a
        document-intelligence suite (parsing, RAG, multi-doc chat) and
        experimenting with real-time voice agents.
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