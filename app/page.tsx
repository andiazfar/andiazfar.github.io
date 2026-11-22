"use client";

import { motion, MotionConfig } from "motion/react";
import Typewriter from "./components/typewriter";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  { title: "Personal Links", href: "#", soon: false },
  { title: "Q&A Helper", href: "#", soon: false },
  { title: "TBC", href: null, soon: true },
];

const links = [
  { label: "Email", value: "andiazfar@gmail.com", href: "mailto:andiazfar@gmail.com", ready: true },
  { label: "GitHub", value: "coming soon", href: null, ready: false },
  { label: "LinkedIn", value: "coming soon", href: null, ready: false },
];

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh overflow-hidden bg-[#08090a] text-zinc-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 40rem at 50% -20%, rgba(120,140,180,0.14), transparent 70%)",
          }}
        />

        <motion.a
          href="/card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group absolute right-6 top-6 z-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white sm:right-8 sm:top-8"
        >
          Card
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </motion.a>

        <main className="relative mx-auto flex w-full max-w-3xl flex-col gap-24 px-6 py-24 sm:gap-32 sm:py-32">
          <section className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.06, ease: EASE }}
              className="text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Andi Azfar Arif
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
              className="h-8 max-w-md overflow-hidden text-lg text-zinc-400 sm:text-xl"
            >
              <Typewriter />
            </motion.p>

            <motion.a
              href="mailto:andiazfar@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group mt-2 inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <span className="border-b border-zinc-700 pb-0.5 transition-colors group-hover:border-zinc-300">
                andiazfar@gmail.com
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </motion.a>
          </section>

          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.09 } },
            }}
            className="flex flex-col gap-6"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500"
            >
              Projects
            </motion.h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => {
                const inner = (
                  <>
                    <span className="text-base font-medium tracking-tight">
                      {project.title}
                    </span>
                    <span
                      className={
                        project.soon
                          ? "font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600"
                          : "text-zinc-600 transition-colors group-hover:text-zinc-300"
                      }
                    >
                      {project.soon ? "soon" : "\u2197"}
                    </span>
                  </>
                );

                const shell =
                  "group flex items-center justify-between rounded-xl border px-5 py-4";

                return (
                  <motion.div
                    key={project.title}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                  >
                    {project.href ? (
                      <motion.a
                        href={project.href}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className={`${shell} border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70`}
                      >
                        {inner}
                      </motion.a>
                    ) : (
                      <div
                        aria-disabled
                        className={`${shell} cursor-not-allowed border-dashed border-zinc-800/70 bg-transparent text-zinc-500`}
                      >
                        {inner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 border-t border-zinc-900 pt-8 sm:flex-row sm:items-center sm:justify-end"
          >
            <div className="flex flex-wrap items-center gap-5 text-sm">
              {links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} title={link.value} className="text-zinc-600">
                    {link.label}
                  </span>
                )
              )}
            </div>
          </motion.footer>
        </main>
      </div>
    </MotionConfig>
  );
}
