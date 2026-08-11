'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MetricCard } from '@/components/MetricCard';
import { DefectLifecycle } from '@/components/DefectLifecycle';
import { ContactForm } from '@/components/ContactForm';
import {
  BarChart3,
  Check,
  Code2,
  Database,
  Mail,
  Phone,
  GitBranch,
  Trophy,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-600 dark:bg-accent-500 flex items-center justify-center text-white font-bold text-sm">
              ✓
            </div>
            <span className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-100">
              qa.engineer
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20 space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-3">
              Muhammad Ahmed
            </h1>
            <p className="text-xl text-accent-600 dark:text-accent-400 font-mono">
              Software Quality Assurance Engineer
            </p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            I break things on purpose. Detail-oriented QA engineer specializing in manual testing,
            defect lifecycle management, and Agile team collaboration. I validate business workflows,
            catch critical bugs before they reach production, and help teams ship with confidence.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors"
            >
              Let's Talk
            </a>
            <a
              href="tel:+923337116550"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              +92 333 7116550
            </a>
            <a
              href="https://linkedin.com/in/ahmed-thedev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.section>

        {/* Metrics */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              value="6+"
              label="Testing Types"
              icon={<Check className="w-5 h-5" />}
              delay={0}
            />
            <MetricCard
              value="2"
              label="QA Internships"
              icon={<Trophy className="w-5 h-5" />}
              delay={0.1}
            />
            <MetricCard
              value="100%"
              label="Defect Accuracy"
              icon={<BarChart3 className="w-5 h-5" />}
              delay={0.2}
            />
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Experience</h2>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    SQA Engineer Intern
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 text-sm font-mono">
                    Sukkur IBA University — Sindh Job Portal
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  Nov 2025 — Present
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>
                    End-to-end manual testing (Functional, Regression, Smoke, UI, Integration, UAT)
                    across recruitment modules
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>Designed and executed test cases validating business workflows</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>Reported, tracked, and verified critical defects in Jira</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>Participated in Agile ceremonies and sprint planning</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    Data Engineering Intern
                  </h3>
                  <p className="text-accent-600 dark:text-accent-400 text-sm font-mono">
                    NETSOL Technologies, Lahore
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  Jun 2024 — Jul 2024
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Validated ETL pipelines and enterprise data workflows using SSIS, SSMS, and SQL
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-pass-600 flex-shrink-0 mt-0.5" />
                  <span>Performed SQL-based data verification and identified inconsistencies</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Defect Lifecycle */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            Defect Lifecycle in Action
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Real examples of defects I've tracked from discovery through deployment. Click to see the journey.
          </p>
          <DefectLifecycle />
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-mono px-2 py-1 rounded bg-pending-50 dark:bg-pending-900/20 text-pending-700 dark:text-pending-300">
                QA PROJECT
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-3 mb-1">
                Sindh Job Portal (SJP)
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                Sukkur IBA University · 2025 — Present
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                End-to-end manual testing across recruitment modules — identifying critical business
                logic and RBAC defects using Jira while collaborating with developers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-mono px-2 py-1 rounded bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300">
                FINAL YEAR PROJECT
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-3 mb-1">
                SmartEval
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                AI-Driven Course Assessment System · 2024 — 2025
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Functional and usability testing of an AI-powered system — validating grading accuracy
                and database consistency across the SDLC.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-mono font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-3">
                Testing Types
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Functional',
                  'Regression',
                  'Smoke',
                  'Sanity',
                  'UI',
                  'Integration',
                  'UAT',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-pass-50 dark:bg-pass-900/20 text-pass-700 dark:text-pass-300 border border-pass-200 dark:border-pass-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-mono font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-3">
                Project Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Agile',
                  'Scrum',
                  'Sprint Planning',
                  'Standups',
                  'Backlog Refinement',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                <h3 className="text-sm font-mono font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Databases
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['SQL Server', 'MySQL', 'SSMS', 'SQL Queries'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                <h3 className="text-sm font-mono font-bold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Jira', 'ClickUp', 'Git', 'DevTools', 'Excel'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Let's Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Open to SQA / manual testing roles. Reach out via the form or contact me directly.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:themuhammedahmed@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100"
                >
                  <Mail className="w-5 h-5 text-accent-600" />
                  <span className="text-sm font-mono">themuhammedahmed@gmail.com</span>
                </a>
                <a
                  href="tel:+923337116550"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100"
                >
                  <Phone className="w-5 h-5 text-accent-600" />
                  <span className="text-sm font-mono">+92 333 7116550</span>
                </a>
                <a
                  href="https://linkedin.com/in/ahmed-thedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100"
                >
                  <GitBranch className="w-5 h-5 text-accent-600" />
                  <span className="text-sm font-mono">linkedin.com/in/ahmed-thedev</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400"
        >
          <p className="font-mono">© 2025 Muhammad Ahmed. All tests passing.</p>
        </motion.footer>
      </main>
    </div>
  );
}
