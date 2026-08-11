'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  ExternalLink,
  FileCheck2,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  MessageSquare,
  MonitorCheck,
  PlayCircle,
  Search,
  ShieldCheck,
  Smartphone,
  TestTube2,
  UserCheck,
  Workflow,
  XCircle,
} from 'lucide-react';

import { ThemeToggle } from '@/components/ThemeToggle';
import { ContactForm } from '@/components/ContactForm';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const testingSkills = [
  'Functional Testing',
  'Regression Testing',
  'Smoke Testing',
  'Sanity Testing',
  'UI Testing',
  'Integration Testing',
  'System Testing',
  'UAT',
  'Exploratory Testing',
  'Negative Testing',
  'End-to-End Testing',
  'Business Workflow Testing',
];

const qaSkills = [
  'Test Case Design',
  'Test Scenario Design',
  'Defect Reporting',
  'Severity & Priority',
  'Defect Lifecycle',
  'Requirement Validation',
  'Regression Suites',
  'RBAC Testing',
];

const tools = [
  'Jira',
  'SQL',
  'SQL Server',
  'MySQL',
  'SSMS',
  'Git',
  'GitHub',
  'Postman',
  'Chrome DevTools',
  'Agile',
  'Scrum',
  'ClickUp',
];

const workflow = [
  {
    number: '01',
    title: 'Understand',
    text: 'Review requirements, acceptance criteria and business rules.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    text: 'Create test scenarios, test cases and positive/negative coverage.',
    icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Execute',
    text: 'Perform functional, UI, regression, smoke and workflow testing.',
    icon: PlayCircle,
  },
  {
    number: '04',
    title: 'Report',
    text: 'Document defects with clear reproduction steps, severity and evidence.',
    icon: MessageSquare,
  },
  {
    number: '05',
    title: 'Retest',
    text: 'Verify fixes and perform regression testing before closure.',
    icon: CheckCircle2,
  },
];

const projects = [
  {
    type: 'QA PROJECT',
    title: 'Sindh Job Portal',
    subtitle: 'Recruitment & Application Management Platform',
    description:
      'End-to-end manual QA across recruitment workflows including applications, scrutiny, shortlisting, interview scheduling, medical screening, job offers and appointment processes.',
    highlights: [
      'Functional & regression testing',
      'RBAC and authorization validation',
      'Business workflow testing',
      'Jira defect lifecycle management',
      'Validation and negative testing',
      'Frontend/backend data verification',
    ],
    tags: ['Manual QA', 'Jira', 'RBAC', 'Regression', 'SQL'],
    featured: true,
  },
  {
    type: 'FINAL YEAR PROJECT',
    title: 'SmartEval',
    subtitle: 'AI-Driven Course Assessment System',
    description:
      'A web-based automated paper evaluation platform integrating LLM-based workflows for question generation and answer assessment.',
    highlights: [
      'Functional workflow validation',
      'UI and usability testing',
      'Database consistency checks',
      'Assessment workflow testing',
      'AI-powered feature validation',
    ],
    tags: ['Next.js', 'MySQL', 'LLM', 'Web Testing', 'QA'],
    featured: false,
  },
];

const experience = [
  {
    role: 'Software Quality Assurance Engineer',
    company: 'Sukkur IBA University — Sindh Job Portal',
    period: 'Nov 2025 — Present',
    description:
      'Perform manual software testing across a complex recruitment platform, validating business rules, user workflows, role-based access and application behavior.',
    bullets: [
      'Design and execute functional, regression, smoke, UI and end-to-end test cases.',
      'Report, track and verify defects using Jira with clear reproduction steps and expected/actual results.',
      'Validate complex recruitment workflows including scrutiny, shortlisting, interview scheduling and job offers.',
      'Test role-based permissions and authorization behavior across different portal accounts.',
      'Collaborate with developers and product stakeholders during Agile ceremonies and defect resolution.',
    ],
  },
  {
    role: 'Data Engineering Intern',
    company: 'NETSOL Technologies, Lahore',
    period: 'Jun 2024 — Jul 2024',
    description:
      'Worked with enterprise data workflows and developed practical experience in SQL, SSIS, SSMS and data migration.',
    bullets: [
      'Worked with SSIS packages and SQL Server databases.',
      'Performed SQL-based data validation and consistency checks.',
      'Supported ETL and data migration activities.',
      'Developed a stronger understanding of backend data validation and database workflows.',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-[-200px] top-[700px] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-[-200px] top-[1500px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-600 text-sm font-bold text-white shadow-lg shadow-accent-500/20">
              QA
            </div>
            <div>
              <p className="font-mono text-sm font-bold">Muhammad Ahmed</p>
              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:block">
                Software Quality Assurance
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            <a href="#about" className="transition hover:text-accent-600">
              About
            </a>
            <a href="#experience" className="transition hover:text-accent-600">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-accent-600">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-accent-600">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-accent-600">
              Contact
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pass-200 bg-pass-50 px-3 py-1.5 text-xs font-semibold text-pass-700 dark:border-pass-800 dark:bg-pass-900/20 dark:text-pass-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-pass-500" />
                Available for QA / SQA Opportunities
              </div>

              <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">
                Software Quality Assurance Engineer
              </p>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                I find the problems
                <span className="block text-accent-600 dark:text-accent-400">
                  before users do.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Manual QA engineer focused on functional testing, regression
                testing, business workflow validation, defect management,
                Jira, SQL and Agile/Scrum collaboration. I turn requirements
                into test coverage and defects into actionable fixes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-accent-600/20 transition hover:-translate-y-0.5 hover:bg-accent-700"
                >
                  View QA Projects
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold transition hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900"
                >
                  Let's Connect
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                {['Manual Testing', 'Jira', 'SQL', 'Agile / Scrum', 'API Testing'].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-pass-500" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Hero QA dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-accent-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="ml-2 font-mono text-xs text-slate-500">
                      qa-dashboard / test-run
                    </span>
                  </div>
                  <span className="rounded-full bg-pass-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-pass-700 dark:bg-pass-900/20 dark:text-pass-300">
                    Running
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-5">
                    <p className="text-xs font-medium text-slate-500">
                      Regression Suite
                    </p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-3xl font-bold">124</p>
                      <p className="text-xs text-pass-600">82% passed</p>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '82%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full rounded-full bg-pass-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ['102', 'Passed', 'text-pass-600'],
                      ['14', 'Failed', 'text-red-500'],
                      ['8', 'Blocked', 'text-pending-600'],
                    ].map(([value, label, color]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
                      >
                        <p className={`text-xl font-bold ${color}`}>{value}</p>
                        <p className="mt-1 text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                    {[
                      ['TC-104', 'Login validation', 'PASS'],
                      ['TC-117', 'Role authorization', 'PASS'],
                      ['TC-132', 'Interview workflow', 'FAIL'],
                      ['TC-141', 'Notification check', 'PASS'],
                    ].map(([id, title, status]) => (
                      <div
                        key={id}
                        className="flex items-center justify-between border-b border-slate-100 px-4 py-3 last:border-0 dark:border-slate-800"
                      >
                        <div className="flex items-center gap-3">
                          {status === 'PASS' ? (
                            <CheckCircle2 className="h-4 w-4 text-pass-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <div>
                            <p className="font-mono text-[10px] text-slate-400">
                              {id}
                            </p>
                            <p className="text-xs font-medium">{title}</p>
                          </div>
                        </div>
                        <span
                          className={`text-[9px] font-bold ${
                            status === 'PASS'
                              ? 'text-pass-600'
                              : 'text-red-500'
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-5 py-8 sm:grid-cols-4 dark:divide-slate-800 lg:px-8">
            {[
              ['Manual', 'QA Focus'],
              ['Jira', 'Defect Tracking'],
              ['SQL', 'Data Validation'],
              ['Agile', 'Team Collaboration'],
            ].map(([value, label]) => (
              <div key={label} className="px-4 text-center">
                <p className="text-xl font-bold text-accent-600 dark:text-accent-400">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About / expertise */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                01 / About
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Quality is not a final step.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I approach QA as a combination of structured testing,
                critical thinking and product understanding. My focus is not
                simply finding bugs—it is understanding how a feature should
                behave, identifying where it can fail and communicating those
                findings clearly to the team.
              </p>
              <p>
                My experience includes testing complex web-based workflows,
                designing test cases, validating role-based access, reporting
                defects in Jira and using SQL to verify data. My background in
                data engineering also gives me a practical understanding of
                databases and backend data validation.
              </p>

              <div className="grid gap-3 pt-3 sm:grid-cols-2">
                {[
                  ['Requirement Analysis', 'Understand business rules before testing.'],
                  ['Risk-Based Testing', 'Prioritize critical workflows and failure points.'],
                  ['Defect Investigation', 'Provide reproducible, actionable bug reports.'],
                  ['Release Confidence', 'Retest fixes and run focused regression suites.'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* What I test */}
        <section className="bg-slate-100/70 py-24 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                02 / QA Expertise
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                What I test
              </h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                From individual form fields to complete business workflows,
                I test software from both the user and system perspective.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: MonitorCheck,
                  title: 'Functional Testing',
                  text: 'Validate features against requirements and expected business behavior.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Security & RBAC',
                  text: 'Verify authentication, authorization and role-specific access.',
                },
                {
                  icon: Workflow,
                  title: 'Business Workflows',
                  text: 'Test complete processes across multiple modules and user roles.',
                },
                {
                  icon: Database,
                  title: 'Data Validation',
                  text: 'Use SQL and database checks to verify data consistency.',
                },
                {
                  icon: Smartphone,
                  title: 'UI & Responsive',
                  text: 'Validate layouts, forms, navigation and responsive behavior.',
                },
                {
                  icon: TestTube2,
                  title: 'Regression Testing',
                  text: 'Ensure fixes and enhancements do not break existing functionality.',
                },
                {
                  icon: UserCheck,
                  title: 'UAT Support',
                  text: 'Validate features against real-world user expectations.',
                },
                {
                  icon: Search,
                  title: 'Exploratory Testing',
                  text: 'Investigate unexpected behavior beyond predefined scenarios.',
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/5 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-900/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              03 / Testing Process
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              From requirement to release
            </h2>
          </div>

          <div className="relative grid gap-4 md:grid-cols-5">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent-600">
                      {item.number}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <h3 className="mt-6 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                  {index < workflow.length - 1 && (
                    <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1 text-slate-400 md:block dark:border-slate-800 dark:bg-slate-950" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="bg-slate-950 py-24 text-white dark:bg-black"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                  04 / Selected Work
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                  Projects that show how I test.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Selected work demonstrating manual QA, business workflow
                testing, defect investigation, database validation and
                AI-powered product testing.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group overflow-hidden rounded-3xl border p-7 transition hover:-translate-y-1 ${
                    project.featured
                      ? 'border-accent-500/40 bg-accent-500/10'
                      : 'border-slate-800 bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-accent-300">
                      {project.type}
                    </span>
                    <ExternalLink className="h-5 w-5 text-slate-500 transition group-hover:text-accent-400" />
                  </div>

                  <h3 className="mt-7 text-3xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pass-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
        >
          <div className="mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
              05 / Experience
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Technical experience
            </h2>
          </div>

          <div className="relative ml-3 border-l border-slate-200 pl-8 dark:border-slate-800">
            {experience.map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pb-14 last:pb-0"
              >
                <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-50 bg-accent-600 dark:border-slate-950">
                  <CircleDot className="h-2 w-2 text-white" />
                </span>

                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="mt-1 font-mono text-sm text-accent-600 dark:text-accent-400">
                      {item.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <ul className="mt-5 max-w-3xl space-y-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-pass-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="bg-slate-100/70 py-24 dark:bg-slate-900/40"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                06 / Skills & Tools
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                My QA toolkit
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <SkillPanel
                icon={<TestTube2 className="h-5 w-5" />}
                title="Testing"
                items={testingSkills}
              />

              <SkillPanel
                icon={<ShieldCheck className="h-5 w-5" />}
                title="QA Practices"
                items={qaSkills}
              />

              <SkillPanel
                icon={<Code2 className="h-5 w-5" />}
                title="Tools & Technology"
                items={tools}
              />
            </div>
          </div>
        </section>

        {/* Education / value */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={<Layers3 />}
              title="Business + Technical"
              text="I combine QA thinking with practical knowledge of SQL, databases, web applications and data workflows."
            />
            <InfoCard
              icon={<GitBranch />}
              title="Agile Collaboration"
              text="Comfortable working with developers and stakeholders through sprint planning, standups, reviews and defect resolution."
            />
            <InfoCard
              icon={<MonitorCheck />}
              title="Quality Mindset"
              text="Focused on reproducibility, edge cases, user impact and making defects actionable for development teams."
            />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                  07 / Contact
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                  Let's build better software.
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-slate-600 dark:text-slate-300">
                  I'm open to Software QA, SQA Engineer and Manual Testing
                  opportunities. If you're looking for someone who can
                  understand requirements, test deeply and communicate defects
                  clearly, let's talk.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:themuhammedahmed@gmail.com"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-accent-400 dark:border-slate-800"
                  >
                    <Mail className="h-5 w-5 text-accent-600" />
                    <span className="text-sm">
                      themuhammedahmed@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:+923337116550"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-accent-400 dark:border-slate-800"
                  >
                    <MessageSquare className="h-5 w-5 text-accent-600" />
                    <span className="text-sm">+92 333 7116550</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/ahmed-thedev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-accent-400 dark:border-slate-800"
                  >
                    <GitBranch className="h-5 w-5 text-accent-600" />
                    <span className="text-sm">
                      linkedin.com/in/ahmed-thedev
                    </span>
                  </a>

                  <div className="flex items-center gap-3 px-1 pt-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4" />
                    Pakistan
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Send a message</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Tell me about the role, project or opportunity.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© 2026 Muhammad Ahmed. Software Quality Assurance Engineer.</p>
          <p className="font-mono">Quality • Testing • Reliability</p>
        </div>
      </footer>
    </div>
  );
}

function SkillPanel({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-900/20">
          {icon}
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-900/20">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {text}
      </p>
    </div>
  );
}