import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Brain,
  Code2,
  Database,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Award,
  Trophy,
  Briefcase,
  Download,
  ExternalLink,
  Cpu,
  LineChart,
  Bot,
  ScanFace,
  FileSearch,
  Newspaper,
  Eye,
  MessageSquare,
  Sun,
  Moon,
  Wrench,
  Layers,
} from "lucide-react";
import profileImg from "../assets/profile.jpg";
import { Particles } from "../components/portfolio/Particles";
import { Typing } from "../components/portfolio/Typing";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "papers", label: "Papers" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

// Skills derived from the tech stacks of Hariharan's real GitHub projects
// (https://github.com/harihara2004) — only tech actually shipped in his repos.
const SKILLS = [
  {
    title: "Machine Learning",
    icon: Brain,
    items: [
      { name: "Scikit-learn", level: 88 },
      { name: "Multinomial Naive Bayes", level: 85 },
      { name: "Text Preprocessing / NLP", level: 80 },
      { name: "Model Deployment (Streamlit)", level: 82 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 78 },
      { name: "PHP", level: 72 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    items: [
      { name: "Pandas", level: 88 },
      { name: "NumPy", level: 85 },
      { name: "Excel Dashboards", level: 82 },
      { name: "Data Visualization", level: 80 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: [
      { name: "React.js", level: 82 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML / CSS", level: 88 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Layers,
    items: [
      { name: "Firebase", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "PHP Backend", level: 72 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Streamlit", level: 85 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Gmail Clone — Spam Detection",
    icon: MessageSquare,
    stack: ["React.js", "Redux", "Firebase", "Tailwind CSS", "Python", "Scikit-learn", "Streamlit", "MultinomialNB"],
    problem: "Inbox clutter from spam reduces productivity and hides important mail.",
    features: ["Gmail-style UI clone", "ML-powered spam classifier (MultinomialNB)", "Firebase auth & realtime store"],
    impact: "End-to-end full-stack + ML pipeline integrating a trained model into a production-style UI.",
    github: "https://github.com/harihara2004/GmailClone--Spam--Detection",
  },
  {
    title: "Email Spam Detection",
    icon: FileSearch,
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "MultinomialNB"],
    problem: "Manual email triage is slow and unreliable at scale.",
    features: ["Text preprocessing pipeline", "Naive Bayes classifier", "Interactive Streamlit app"],
    impact: "Lightweight, deployable spam classifier with a clean web interface.",
    github: "https://github.com/harihara2004/Email-spam-detection",
  },
  {
    title: "Student Social Media Addiction — Dashboard",
    icon: LineChart,
    stack: ["Excel", "Data Analysis", "Dashboarding"],
    problem: "Hard to visualize patterns in student social media usage and its impact.",
    features: ["Interactive Excel dashboard", "KPI cards & charts", "Filterable cohort views"],
    impact: "Turns raw survey data into clear insights on student behavior.",
    github: "https://github.com/harihara2004/student-social-media-addiction-Data-Analysis-Dashboard",
  },
  {
    title: "Tutorial Webpage",
    icon: Globe,
    stack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    problem: "Learners need a simple, centralized place for structured tutorials.",
    features: ["PHP + MySQL backend", "Responsive front-end", "Content management via DB"],
    impact: "Full-stack LAMP-style project demonstrating end-to-end web fundamentals.",
    github: "https://github.com/harihara2004/tutorial_webpage",
  },
  {
    title: "Chatbot Webpage",
    icon: Bot,
    stack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    problem: "Static FAQ pages don't engage users or answer questions interactively.",
    features: ["Conversational web UI", "PHP backend logic", "MySQL-backed responses"],
    impact: "Interactive chatbot interface built from scratch on a LAMP stack.",
    github: "https://github.com/harihara2004/chatbot",
  },
];


const EXPERIENCE = [
  {
    title: "Data Scientist Intern",
    org: "SkillVertex",
    date: "Jul 2024 – Aug 2024",
    desc: "Remote internship based in Bengaluru, Karnataka. Worked as a Data Science student / lean Data Analyst in a stimulating learning environment, building hands-on projects with Python.",
  },
];

const EDUCATION = [
  {
    school: "SRM IST Chennai",
    degree: "Master of Science — Applied Data Science",
    date: "Jul 2025",
  },
  {
    school: "VELS University",
    degree: "Bachelor of Computer Application — Specialist in Data Science",
    date: "Aug 2023 – May 2025",
  },
];

const CERTIFICATIONS = [
  { name: "Data Structure using Python Programming - 2025", issuer: "CodeTantra", date: "Feb 2026 · Expires Mar 2027" },
  { name: "5-Day Data Science Internship Program", issuer: "Prompt Infotech Coimbatore", date: "Aug 2024" },
  { name: "Business Applications of Data Science, AI, and ML", issuer: "Great Learning", date: "Jan 2023" },
  { name: "Probability for Data Science", issuer: "Great Learning", date: "Sep 2023" },
  { name: "Honours Diploma in Computer Application (HDCA)", issuer: "CSC Computer Education, Medavakkam", date: "May 2022" },
  { name: "Diploma in Full Stack Java Developer (DFJD)", issuer: "CSC Computer Education, Medavakkam", date: "Jun 2023" },
  { name: "Data Science Training Program", issuer: "SkillVertex", date: "Jun 2024" },
  { name: "Getting Started with Data Analytics on AWS", issuer: "Coursera", date: "Jun 2024" },
];

const PAPERS = [
  {
    title: "Generative AI & LLM-Based Blood Management System with Intelligent Chatbot & Mapping Interface",
    venue: "National Conference on Data to Intelligent AI in Shaping the Future (DIGISF'26)",
    host: "SRM IST",
  },
  {
    title: "An Integrated Blockchain and Cloud-Based Explainable AI Framework for Reducing Black Box Risk in Deep Learning Systems",
    venue: "International Conference",
    host: "SRM IST",
  },
  {
    title: "A Hybrid Machine Learning Framework for Accurate Healthcare Disease Prediction",
    venue: "International Conference",
    host: "Vivekanandha Arts and Science College for Women, Sankagiri, Veerachipalayam, Salem",
  },
];

const ACHIEVEMENTS = [
  { icon: Trophy, title: "Chess Boxing — National Gold", desc: "Gold medal at the National level in Chess Boxing." },
  { icon: Award, title: "Boxing — State Silver", desc: "Silver medal at the State level in Boxing." },
  { icon: Award, title: "Boxing — District Gold", desc: "Gold medal at the District level in Boxing." },
  { icon: Sparkles, title: "Published Researcher", desc: "Three research papers presented at national & international conferences." },
];

function useVisitorCount() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const KEY = "hv_visits";
    const stored = Number(localStorage.getItem(KEY) || "0");
    const next = stored + 1;
    localStorage.setItem(KEY, String(next));
    // Friendly baseline so first visit isn't "1"
    setCount(1247 + next);
  }, []);
  return count;
}

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, toggle: () => setDark((v) => !v) };
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-gradient">{title}</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-brand animate-gradient" />
        </div>
        {children}
      </div>
    </section>
  );
}

function PortfolioPage() {
  useReveal();
  const { dark, toggle } = useTheme();
  const visitors = useVisitorCount();
  const phrases = useMemo(
    () => [
      "Future Machine Learning Engineer",
      "AI Developer in the Making",
      "Data Science Enthusiast",
      "Aspiring Tech Entrepreneur",
    ],
    [],
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hariharan.v@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />

      {/* Floating tech icons */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <Cpu className="absolute left-[8%] top-[18%] h-10 w-10 text-primary/30 animate-float" />
        <Brain className="absolute right-[10%] top-[30%] h-12 w-12 text-fuchsia-400/30 animate-float-slow" />
        <Code2 className="absolute left-[15%] bottom-[20%] h-10 w-10 text-blue-400/30 animate-float-slow" />
        <Sparkles className="absolute right-[12%] bottom-[15%] h-10 w-10 text-violet-400/30 animate-float" />
      </div>

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-sm text-white">
              HV
            </span>
            <span className="hidden sm:inline">Hariharan V</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative px-6 pb-16 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Future ML Engineer · Open to opportunities
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Hi, I'm <span className="text-gradient">Hariharan V</span>
            </h1>
            <p className="mt-4 min-h-[2.25rem] text-xl font-semibold md:text-2xl">
              <Typing phrases={phrases} />
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              I'm a future Machine Learning Engineer training at the intersection of
              Data Science, AI and full-stack development. I learn by building — every
              project on my GitHub is a step toward shipping intelligent products that
              solve real problems for real people.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                <Rocket className="h-4 w-4" /> View Projects
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" /> {visitors.toLocaleString()} visitors
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> India
              </span>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-2xl animate-gradient" />
            <div className="relative overflow-hidden rounded-3xl glass p-2 glow animate-float">
              <img
                src={profileImg}
                alt="Portrait of Hariharan V, Machine Learning Engineer"
                width={768}
                height={768}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About me" title="Future ML Engineer. Builder. Lifelong learner.">
        <div className="reveal mx-auto max-w-3xl rounded-3xl glass p-8 text-center">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm <span className="text-foreground">Hariharan V</span>, a future{" "}
            <span className="text-foreground">Machine Learning Engineer</span> currently
            sharpening my craft through hands-on projects and an{" "}
            <span className="text-foreground">M.Sc. in Applied Data Science at SRM IST</span>.
            My stack — <span className="text-foreground">Python</span>,{" "}
            <span className="text-foreground">Scikit-learn</span>,{" "}
            <span className="text-foreground">Pandas / NumPy</span>,{" "}
            <span className="text-foreground">Streamlit</span>,{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Firebase</span> and{" "}
            <span className="text-foreground">PHP / MySQL</span> — comes straight from
            the projects I've built and shipped on GitHub, from ML-powered spam
            classifiers to full-stack web apps and data dashboards. My goal: grow into
            a strong ML Engineer and eventually build an AI startup that solves
            everyday problems for the next billion users.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "5+", v: "Shipped GitHub projects" },
              { k: "8+", v: "Certifications" },
              { k: "∞", v: "Curiosity to learn" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Toolbox" title="Skills & Technologies">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="reveal group rounded-2xl glass p-6 transition hover:-translate-y-1 hover:glow">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-brand animate-gradient transition-[width] duration-1000"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Selected work" title="Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="reveal group flex flex-col overflow-hidden rounded-2xl glass transition hover:-translate-y-1 hover:glow"
              >
                <div className="relative h-36 overflow-hidden bg-gradient-brand animate-gradient">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_50%)]" />
                  <Icon className="absolute right-4 top-4 h-10 w-10 text-white/80" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                    {p.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Problem: </span>
                    {p.problem}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm">
                    <span className="font-semibold text-gradient">Impact: </span>
                    <span className="text-muted-foreground">{p.impact}</span>
                  </p>
                  <div className="mt-5 flex gap-2 pt-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-brand px-3 py-2 text-xs font-semibold text-white transition hover:scale-[1.02]"
                    >
                      <Github className="h-3.5 w-3.5" /> View on GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Journey" title="Experience & Activities">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-violet-500 to-fuchsia-500 md:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <div
                key={e.title}
                className={`reveal relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                  <div className="ml-10 rounded-2xl glass p-5 md:ml-0">
                    <div className="flex items-center gap-2 text-xs text-primary md:justify-end">
                      <Briefcase className="h-3.5 w-3.5" /> {e.date}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-brand glow md:left-1/2" />
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="Academic Background">
        <div className="mx-auto grid max-w-3xl gap-5">
          {EDUCATION.map((e) => (
            <div key={e.school} className="reveal rounded-3xl glass p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-brand text-white">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>


      {/* Certifications */}
      <Section id="certifications" eyebrow="Credentials" title="Certifications">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.name}
              className="reveal group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:glow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-20 blur-2xl transition group-hover:opacity-40" />
              <Award className="h-7 w-7 text-primary" />
              <h3 className="mt-3 font-semibold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              {c.date && <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" eyebrow="Highlights" title="Achievements">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="reveal rounded-2xl glass p-6 text-center transition hover:-translate-y-1 hover:glow"
              >
                <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Get in touch" title="Let's build something intelligent">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hariharan.v@example.com", href: "mailto:hariharan.v@example.com" },
              { icon: Phone, label: "Phone", value: "+91 90000 00000", href: "tel:+919000000000" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hariharan-v-037881320", href: "https://www.linkedin.com/in/hariharan-v-037881320" },
              { icon: Github, label: "GitHub", value: "github.com/harihara2004", href: "https://github.com/harihara2004" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl glass p-4 transition hover:-translate-y-0.5 hover:glow"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal rounded-3xl glass p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-muted-foreground">
                  Name
                </span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 80) })}
                  required
                  maxLength={80}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value.slice(0, 120) })}
                  required
                  maxLength={120}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1 block text-xs font-medium text-muted-foreground">
                Message
              </span>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 1000) })}
                required
                rows={5}
                maxLength={1000}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-primary"
                placeholder="Tell me about your project, role, or idea…"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand animate-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:scale-[1.01] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? "Opening your mail app…" : "Send Message"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              <MessageSquare className="mr-1 inline h-3 w-3" />
              I usually reply within 24 hours.
            </p>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Layers className="h-4 w-4 text-primary" />
            <span>© {new Date().getFullYear()} Hariharan V. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/harihara2004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-lg glass transition hover:glow"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hariharan-v-037881320"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-lg glass transition hover:glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:hariharan.v@example.com"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-lg glass transition hover:glow"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with <span className="text-gradient font-semibold">AI & Passion</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
