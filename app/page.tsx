'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const projects = [
  {
    title: 'Archive Atlas',
    category: 'Digital Systems',
    year: '2025',
    summary: 'A tactile interface for preserving and exploring cultural archives through layered storytelling.',
    accent: 'bg-[#1f3a5f] text-white',
  },
  {
    title: 'Studio Notes',
    category: 'Editorial Platform',
    year: '2024',
    summary: 'A reading experience that turns long-form content into immersive, magazine-like journeys.',
    accent: 'bg-[#7b2c2c] text-white',
  },
  {
    title: 'Northline',
    category: 'Brand Experience',
    year: '2023',
    summary: 'A minimal yet expressive product launch site with calm motion and strong editorial rhythm.',
    accent: 'bg-[#4b5f3a] text-white',
  },
];

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => setMounted(true), []);

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
    []
  );

  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_45%)] px-4 py-4 text-stone-900 transition-colors duration-700 dark:bg-[#0b0b0b] dark:text-stone-100 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col rounded-[36px] border border-black/10 bg-[#f8f8f6]/80 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/80 sm:p-6 lg:p-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),rgba(245,245,245,0.15),rgba(255,255,255,0.5))] dark:bg-[linear-gradient(135deg,rgba(20,20,20,0.8),rgba(10,10,10,0.2),rgba(20,20,20,0.7))]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:32px_32px] dark:[background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]" />
          <motion.div
            className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:18px_18px] dark:opacity-[0.12] dark:[background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)]"
            animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_30%)]" />
        </div>

        <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 dark:border-white/10">
          <a href="#home" className="font-serif text-2xl tracking-[0.2em] uppercase">
            N.C.
          </a>
          <nav className="flex flex-wrap items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-stone-600 dark:text-stone-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-stone-950 dark:hover:text-white">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 rounded-full border border-black/10 p-2.5 transition hover:scale-105 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              {mounted && theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </nav>
        </header>

        <section className="relative z-10 grid flex-1 gap-8 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
          <motion.div style={{ y }} className="flex flex-col justify-between">
            <div className="max-w-3xl">
              <p className="mb-6 text-[0.75rem] uppercase tracking-[0.4em] text-stone-500 dark:text-stone-400">
                Creative Developer / New York
              </p>
              <h1 className="font-serif text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
                Nathan Catapang
              </h1>
              <h2 className="mt-4 font-serif text-2xl text-stone-600 sm:text-3xl lg:text-4xl dark:text-stone-300">
                Designing calm, editorial digital experiences with precise engineering.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                I build immersive websites that feel like curated archives—layered, thoughtful, and quietly bold.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3 text-sm text-stone-600 dark:text-stone-400">
              <span className="rounded-full border border-black/10 px-4 py-2 dark:border-white/10">Available for select projects</span>
              <span className="rounded-full border border-black/10 px-4 py-2 dark:border-white/10">Current focus: immersive storytelling</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-between rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/10"
          >
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Current Focus</p>
              <p className="mt-4 font-serif text-3xl leading-tight">Thoughtful systems, editorial rhythm, and lasting visual clarity.</p>
            </div>
            <div className="mt-10 space-y-5 text-sm leading-7 text-stone-700 dark:text-stone-300">
              <div>
                <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Location</span>
                <span className="mt-1 block">Remote / New York, US</span>
              </div>
              <div>
                <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Experience</span>
                <span className="mt-1 block">8+ years crafting premium digital products</span>
              </div>
            </div>
          </motion.aside>
        </section>

        <section id="projects" className="relative z-10 mt-6 space-y-5">
          <div className="flex items-end justify-between gap-4 border-t border-black/10 pt-8 dark:border-white/10">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">Selected Work</p>
              <h3 className="mt-2 font-serif text-3xl sm:text-4xl">Featured projects</h3>
            </div>
            <a href="#contact" className="text-sm uppercase tracking-[0.3em] text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white">
              Contact →
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group rounded-[30px] border border-black/10 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 ${project.accent}`}
              >
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] opacity-80">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h4 className="mt-8 font-serif text-3xl leading-tight">{project.title}</h4>
                <p className="mt-4 text-sm leading-7 opacity-90">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] opacity-80">
                  <span className="rounded-full border border-current/20 px-3 py-1">Next.js</span>
                  <span className="rounded-full border border-current/20 px-3 py-1">Motion</span>
                  <span className="rounded-full border border-current/20 px-3 py-1">Systems</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="relative z-10 mt-10 grid gap-8 rounded-[30px] border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/10 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">About</p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">An archive of crafted digital sensations.</h3>
          </div>
          <div className="space-y-5 text-lg leading-8 text-stone-700 dark:text-stone-300">
            <p>I approach each site as an editorial system with rhythm, pacing, and deliberate motion. The goal is to make interactions feel calm, memorable, and deeply intentional.</p>
            <p>From the architecture to the details, I design with a strong sense of hierarchy and a premium visual language that feels timeless rather than trendy.</p>
          </div>
        </section>

        <section id="experience" className="relative z-10 mt-10 grid gap-6 rounded-[30px] border border-black/10 bg-[#f1efe8]/80 p-6 shadow-soft dark:border-white/10 dark:bg-[#131313]/80 lg:grid-cols-[1fr_1fr] lg:p-8">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">Experience</p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">Selected clients and capabilities</h3>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700 dark:text-stone-300">
            <p>Design systems, front-end engineering, animation direction, and high-end storytelling for ambitious brands and digital products.</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 px-3 py-2 text-sm dark:border-white/10">React</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-sm dark:border-white/10">Next.js</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-sm dark:border-white/10">Framer Motion</span>
              <span className="rounded-full border border-black/10 px-3 py-2 text-sm dark:border-white/10">Tailwind</span>
            </div>
          </div>
        </section>

        <footer id="contact" className="relative z-10 mt-10 flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-stone-600 dark:border-white/10 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl text-stone-900 dark:text-stone-100">Let’s build something lasting.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:nathan@example.com" className="transition hover:text-stone-950 dark:hover:text-white">
              nathan@example.com
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-stone-950 dark:hover:text-white">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
