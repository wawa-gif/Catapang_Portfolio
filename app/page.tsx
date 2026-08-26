'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
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
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const navOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);

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
    <main id="home" className="overflow-x-hidden bg-[#f8f8f6] text-stone-900 transition-colors duration-700 dark:bg-[#0b0b0b] dark:text-stone-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.85),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6),rgba(245,245,245,0.18),rgba(255,255,255,0.5))] dark:bg-[linear-gradient(135deg,rgba(20,20,20,0.8),rgba(10,10,10,0.2),rgba(20,20,20,0.7))]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:32px_32px] dark:[background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]" />
          <motion.div
            className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] [background-size:18px_18px] dark:opacity-[0.12] dark:[background-image:radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)]"
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0], x: [0, -5, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[-10%] top-[-20%] h-[36rem] w-[36rem] rounded-full bg-stone-900/5 blur-3xl dark:bg-white/10"
            animate={prefersReducedMotion ? undefined : { x: [0, 24, 0], y: [0, -20, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-12%] right-[-8%] h-[30rem] w-[30rem] rounded-full bg-[#1f3a5f]/8 blur-3xl dark:bg-[#4f6e9f]/10"
            animate={prefersReducedMotion ? undefined : { x: [0, -18, 0], y: [0, 16, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <motion.header
          style={{ opacity: navOpacity }}
          className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/70 px-5 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/70">
            <a href="#home" className="font-serif text-xl tracking-[0.2em] uppercase">
              N.C.
            </a>
            <nav className="flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.35em] text-stone-600 dark:text-stone-300">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-stone-950 dark:hover:text-white">
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="ml-2 rounded-full border border-black/10 p-2.5 transition hover:scale-105 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
              >
                {mounted && resolvedTheme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
            </nav>
          </div>
        </motion.header>

        <section className="section-shell-hero relative flex items-center">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col justify-center">
              <p className="mb-4 text-[0.75rem] uppercase tracking-[0.4em] text-stone-500 dark:text-stone-400">
                Creative Developer / Philippines
              </p>
              <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
                Nathan Catapang
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-3 max-w-2xl font-serif text-2xl text-stone-600 sm:text-3xl lg:text-4xl dark:text-stone-300">
                Designing calm, editorial digital experiences with precise engineering.
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.95, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                I build immersive websites that feel like curated archives—layered, thoughtful, and quietly bold.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="mt-8 flex flex-wrap gap-3 text-sm text-stone-600 dark:text-stone-400">
                <span className="rounded-full border border-black/10 px-4 py-2 dark:border-white/10">Available for select projects</span>
                <span className="rounded-full border border-black/10 px-4 py-2 dark:border-white/10">Current focus: Developing Myself</span>
              </motion.div>
            </motion.div>

            <motion.aside initial={{ opacity: 0, x: 24, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="relative flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[32px] border border-black/10 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,58,95,0.12),_transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_45%)]" />
              <div className="relative">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Current Focus</p>
                <p className="mt-4 font-serif text-3xl leading-tight">Thoughtful systems, editorial rhythm, and lasting visual clarity.</p>
              </div>
              <div className="relative mt-8 space-y-5 text-sm leading-7 text-stone-700 dark:text-stone-300">
                <div>
                  <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Location</span>
                  <span className="mt-1 block">Remote / Philippines</span>
                </div>
                <div>
                  <span className="block text-[0.7rem] uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">Experience</span>
                  <span className="mt-1 block">C, JavaScript, HTML, SQL, and more</span>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="projects" className="section-shell relative">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6 dark:border-white/10">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">Selected Work</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">Featured projects</h3>
              </div>
              <a href="#contact" className="text-sm uppercase tracking-[0.3em] text-stone-600 transition hover:text-stone-950 dark:text-stone-300 dark:hover:text-white">
                Contact →
              </a>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.01, rotateX: 3, rotateY: -3, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                  className={`group relative overflow-hidden rounded-[34px] border border-black/10 p-7 shadow-soft transition-colors duration-500 hover:shadow-2xl dark:border-white/10 ${project.accent}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] opacity-80">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="relative mt-7 font-serif text-3xl leading-tight">{project.title}</h4>
                  <p className="relative mt-3 text-sm leading-7 opacity-90">{project.summary}</p>
                  <div className="relative mt-6 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.3em] opacity-80">
                    <span className="rounded-full border border-current/20 px-3 py-1">Next.js</span>
                    <span className="rounded-full border border-current/20 px-3 py-1">Motion</span>
                    <span className="rounded-full border border-current/20 px-3 py-1">Systems</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell relative">
          <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[40px] border border-black/10 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">About</p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">An archive of crafted digital sensations.</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="space-y-5 text-lg leading-8 text-stone-700 dark:text-stone-300">
              <p>I approach each site as an editorial system with rhythm, pacing, and deliberate motion. The goal is to make interactions feel calm, memorable, and deeply intentional.</p>
              <p>From the architecture to the details, I design with a strong sense of hierarchy and a premium visual language that feels timeless rather than trendy.</p>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section-shell relative">
          <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[40px] border border-black/10 bg-[#efece4]/80 p-8 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#121212]/80 lg:grid-cols-[1fr_1fr] lg:p-12">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-stone-500">Experience</p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">Selected internships and responsibilities</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="space-y-5 text-base leading-8 text-stone-700 dark:text-stone-300">
              <div>
                <p className="font-semibold">Diliman Preparatory School — Student Intern</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Managed computer laboratory inventory and equipment.</li>
                  <li>Installed and configured Wi-Fi and Windows software.</li>
                  <li>Developed a basic application.</li>
                  <li>Assisted in managing the institution’s network.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">PhilHealth Provincial Office III-A — Student Intern</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Organized and encoded documents and requests in the system.</li>
                  <li>Assisted with laptop and equipment specifications.</li>
                  <li>Delivered and processed essential documents.</li>
                  <li>Supported various office operations.</li>
                  <li>Gained experience with SQL.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <footer id="contact" className="section-shell-compact relative">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-8 text-sm text-stone-600 dark:border-white/10 dark:text-stone-400 sm:flex-row sm:items-center sm:justify-between">
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
          </div>
        </footer>
      </div>
    </main>
  );
}
