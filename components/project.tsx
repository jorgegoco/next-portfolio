'use client'

import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const TAG_COLORS: Record<string, string> = {
  // AI / LLM
  'Claude': 'bg-violet-600',
  'Claude API': 'bg-violet-600',
  'LandingAI ADE': 'bg-violet-600',
  'LangChain': 'bg-violet-600',
  'OpenAI API': 'bg-violet-600',
  'OpenAI Embeddings': 'bg-violet-600',
  'MCP': 'bg-violet-600',
  'Vercel AI SDK': 'bg-violet-600',
  'Vocal Bridge SDK': 'bg-violet-600',
  // Backend / Data
  'Python': 'bg-teal-700',
  'FastAPI': 'bg-teal-700',
  'PostgreSQL': 'bg-teal-700',
  'MongoDB': 'bg-teal-700',
  'ChromaDB': 'bg-teal-700',
  'Prisma': 'bg-teal-700',
  'Node.js': 'bg-teal-700',
  'Express': 'bg-teal-700',
  'Redis': 'bg-teal-700',
  'Whisper': 'bg-teal-700',
  'WeasyPrint': 'bg-teal-700',
  'Docker': 'bg-teal-700',
  'SQL Server': 'bg-teal-700',
  'Ruby on Rails': 'bg-teal-700',
  // Frontend / Framework
  'React': 'bg-sky-600',
  'React 19': 'bg-sky-600',
  'Next.js': 'bg-sky-600',
  'Next.js 15': 'bg-sky-600',
  'TypeScript': 'bg-sky-600',
  'JavaScript': 'bg-sky-600',
  'Vite': 'bg-sky-600',
  'Tailwind CSS': 'bg-sky-600',
  'Redux': 'bg-sky-600',
}

const getTagColor = (tag: string) => TAG_COLORS[tag] ?? 'bg-slate-600'

type ProjectProps = (typeof projectsData)[number] & {
  liveLinks?: readonly { label: string; href: string }[]
  videoUrl?: string
  codeUrl?: string
}

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  liveLinks,
  videoUrl,
  codeUrl,
}: ProjectProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!isPlaying) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPlaying(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isPlaying])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  const card = (
    <section className='bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] hover:bg-gray-200 hover:shadow-lg transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
      <div className='h-1 bg-gradient-to-r from-violet-500 via-sky-400 to-teal-400' />
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold'>
          {liveLinks ? (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
          {description}
        </p>
        {liveLinks && (
          <ul className='flex flex-wrap mt-3 gap-x-4 gap-y-1 text-sm'>
            {liveLinks.map((demo) => (
              <li key={demo.href}>
                <a
                  href={demo.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline text-gray-700 hover:text-gray-950 dark:text-white/70 dark:hover:text-white'
                >
                  {demo.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className={`${getTagColor(tag)} px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:opacity-90`}
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        {codeUrl && (
          <a
            href={codeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 self-start inline-flex items-center gap-1 text-[0.7rem] font-medium uppercase tracking-wider bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/70'
          >
            Code ↗
          </a>
        )}
      </div>

      {videoUrl ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title} demo`}
          className='absolute hidden sm:block top-8 -right-28 w-[28.25rem] group-even:right-[initial] group-even:-left-28 focus:outline-none group/play'
        >
          <Image
            src={imageUrl}
            alt={`${title} poster`}
            quality={95}
            className='rounded-t-lg shadow-2xl w-full transition
              group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-14 h-14 rounded-full bg-indigo-600/90 flex items-center justify-center
              text-white text-2xl transition group-hover/play:bg-indigo-700 group-hover/play:scale-110'>
              ▶
            </div>
          </div>
        </button>
      ) : (
        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-8 -right-28 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-28'
        />
      )}
    </section>
  )

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className='group mb-3 sm:mb-8 last:mb-0'
      >
        {liveLinks || codeUrl ? (
          card
        ) : (
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {card}
          </a>
        )}
      </motion.div>

      {mounted && isPlaying && videoUrl && createPortal(
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
          onClick={() => setIsPlaying(false)}
        >
          <div
            className='relative w-full max-w-4xl mx-4'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPlaying(false)}
              className='absolute -top-10 right-0 text-white/80 hover:text-white transition text-sm tracking-wide'
              aria-label='Close video'
            >
              ✕ Close
            </button>
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              preload='none'
              className='w-full rounded-xl shadow-2xl'
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
