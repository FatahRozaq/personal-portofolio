"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "en" | "id";
type Tone = "orange" | "lime" | "paper";

type Project = { title: string; summary: string; mark: string; tone: Tone; meta: string };
type Job = { company: string; role: string; summary: string; period: string };
type Tool = { name: string; kind: string; mark: string; href: string };

type Copy = {
  nav: { home: string; projects: string; experience: string; tools: string; contact: string; label: string; skip: string };
  langLabel: string;
  name: string;
  bio: string;
  photoAlt: string;
  contactLabel: string;
  cv: string;
  cvLabel: string;
  heroTitle: [string, string];
  heroLabel: string;
  lead: string;
  stats: { value: string; label: string }[];
  features: { title: string; href: string }[];
  headings: { projects: [string, string]; experience: [string, string]; tools: [string, string]; skills: [string, string]; contact: [string, string] };
  projectList: Project[];
  jobList: Job[];
  toolList: Tool[];
  skillGroups: { title: string; items: string }[];
  form: {
    name: string;
    email: string;
    topic: string;
    message: string;
    submit: string;
    options: string[];
    placeholders: [string, string, string];
    subject: string;
  };
};

const copy: Record<Language, Copy> = {
  en: {
    nav: { home: "Home", projects: "Recent projects", experience: "Experience", tools: "Tools", contact: "Contact", label: "Site sections", skip: "Skip to content" },
    langLabel: "Choose site language",
    name: "Muhamad Fatah Rozaq",
    bio: "A software engineer building business operations, sales force automation, and business intelligence systems.",
    photoAlt: "Muhamad Fatah Rozaq in a dark suit",
    contactLabel: "Profile links",
    cv: "Download résumé",
    cvLabel: "Download résumé",
    heroTitle: ["SOFTWARE", "ENGINEER"],
    heroLabel: "Software engineer",
    lead: "I build systems that make day-to-day business operations clearer, from sales workflows and warehousing to dashboards and internal tools.",
    stats: [
      { value: "+2", label: "YEARS OF EXPERIENCE" },
      { value: "+3", label: "COMPANIES" },
      { value: "+4", label: "SKILL AREAS" },
    ],
    features: [
      { title: "BUSINESS INTELLIGENCE, SALES FORCE AUTOMATION", href: "#experience" },
      { title: "GO, NEXT.JS, LARAVEL, POSTGRESQL", href: "#tools" },
    ],
    headings: {
      projects: ["RECENT", "PROJECTS"],
      experience: ["2 YEARS OF", "EXPERIENCE"],
      tools: ["TECHNICAL", "TOOLS"],
      skills: ["ENGINEERING", "SKILLS"],
      contact: ["LET'S WORK", "TOGETHER"],
    },
    projectList: [
      {
        title: "Go AI Chatbot",
        summary: "DeepSeek and OpenAI assistant wired into internal company workflows.",
        mark: "AI",
        tone: "orange",
        meta: "Go",
      },
      {
        title: "Padel Scoring & Tournament",
        summary: "Scoring, tournament brackets, and results for an internal padel league.",
        mark: "P",
        tone: "lime",
        meta: "Next.js",
      },
      {
        title: "Business Intelligence Dashboards",
        summary: "Laravel and React dashboards with SQL reporting for sales, credit, and receivables.",
        mark: "BI",
        tone: "paper",
        meta: "Laravel",
      },
    ],
    jobList: [
      {
        company: "PT Wahana Informasi dan Teknologi",
        role: "Fullstack Developer",
        summary:
          "Building sales force automation and business intelligence systems in Go, Next.js, and PostgreSQL. The work covers sales, invoicing, credit, warehouse, incentives, approvals, and visit flows, plus single sign-on, SQL reporting, and internal Laravel tools.",
        period: "Aug 2025 – Present",
      },
      {
        company: "CV Arutala Mitra Mandiri",
        role: "Fullstack Developer",
        summary:
          "Requirements analysis, UML design, relational databases, and interactive Laravel and React dashboards, followed by user acceptance testing.",
        period: "Jun 2024 – Jun 2025",
      },
      {
        company: "PT Bara Prima Multi Teknovisi",
        role: "Odoo Developer",
        summary: "Odoo ERP modules for apparel business management, production, and performance indicators.",
        period: "Oct 2021 – Dec 2021",
      },
    ],
    toolList: [
      { name: "Go", kind: "Language", mark: "Go", href: "https://go.dev" },
      { name: "Next.js", kind: "Framework", mark: "N", href: "https://nextjs.org" },
      { name: "Laravel", kind: "Framework", mark: "L", href: "https://laravel.com" },
      { name: "PostgreSQL", kind: "Database", mark: "PG", href: "https://www.postgresql.org" },
      { name: "Docker", kind: "Containers", mark: "D", href: "https://www.docker.com" },
      { name: "Figma", kind: "Interface design", mark: "F", href: "https://www.figma.com" },
    ],
    skillGroups: [
      {
        title: "Languages & frameworks",
        items: "JavaScript, TypeScript, Go, PHP, Java, Dart, Python, SQL, Next.js, React, Laravel, Spring Boot, Flutter.",
      },
      {
        title: "Systems & architecture",
        items: "Microservices, REST API, business intelligence, sales force automation, Odoo ERP, UML.",
      },
      {
        title: "Data & infrastructure",
        items: "PostgreSQL, MySQL, MongoDB, Redis, Docker, Linux, HashiCorp Vault.",
      },
      {
        title: "Design & delivery",
        items: "Git, GitLab, GitHub, Postman, Swagger, DBeaver, dbdiagram.io, Draw.io, Figma.",
      },
    ],
    form: {
      name: "Name",
      email: "Email",
      topic: "Topic",
      message: "Message",
      submit: "Submit",
      options: ["Role opportunity", "Collaboration", "Something else"],
      placeholders: ["Your Name", "your@email.com", "Message"],
      subject: "Portfolio enquiry",
    },
  },
  id: {
    nav: { home: "Beranda", projects: "Proyek terbaru", experience: "Pengalaman", tools: "Perangkat", contact: "Kontak", label: "Bagian situs", skip: "Lewati ke konten" },
    langLabel: "Pilih bahasa situs",
    name: "Muhamad Fatah Rozaq",
    bio: "Software engineer yang membangun sistem operasional bisnis, sales force automation, dan business intelligence.",
    photoAlt: "Muhamad Fatah Rozaq mengenakan jas hitam",
    contactLabel: "Tautan profil",
    cv: "Unduh CV",
    cvLabel: "Unduh CV",
    heroTitle: ["SOFTWARE", "ENGINEER"],
    heroLabel: "Software engineer",
    lead: "Saya membangun sistem yang membuat operasional bisnis sehari-hari lebih jelas, dari alur penjualan dan gudang hingga dashboard serta aplikasi internal.",
    stats: [
      { value: "+2", label: "TAHUN PENGALAMAN" },
      { value: "+3", label: "PERUSAHAAN" },
      { value: "+4", label: "BIDANG KEAHLIAN" },
    ],
    features: [
      { title: "BUSINESS INTELLIGENCE, SALES FORCE AUTOMATION", href: "#experience" },
      { title: "GO, NEXT.JS, LARAVEL, POSTGRESQL", href: "#tools" },
    ],
    headings: {
      projects: ["PROYEK", "TERBARU"],
      experience: ["2 TAHUN", "PENGALAMAN"],
      tools: ["PERANGKAT", "TEKNIS"],
      skills: ["KEAHLIAN", "TEKNIS"],
      contact: ["MARI", "BEKERJA SAMA"],
    },
    projectList: [
      {
        title: "Chatbot AI Go",
        summary: "Asisten DeepSeek dan OpenAI yang terhubung ke alur kerja internal perusahaan.",
        mark: "AI",
        tone: "orange",
        meta: "Go",
      },
      {
        title: "Skor & Turnamen Padel",
        summary: "Pencatatan skor, bagan turnamen, dan hasil untuk liga padel internal.",
        mark: "P",
        tone: "lime",
        meta: "Next.js",
      },
      {
        title: "Dashboard Business Intelligence",
        summary: "Dashboard Laravel dan React dengan laporan SQL untuk penjualan, kredit, dan piutang.",
        mark: "BI",
        tone: "paper",
        meta: "Laravel",
      },
    ],
    jobList: [
      {
        company: "PT Wahana Informasi dan Teknologi",
        role: "Fullstack Developer",
        summary:
          "Membangun sistem sales force automation dan business intelligence dengan Go, Next.js, dan PostgreSQL. Cakupannya meliputi penjualan, faktur, kredit, gudang, insentif, persetujuan, dan kunjungan, ditambah single sign-on, laporan SQL, serta aplikasi internal berbasis Laravel.",
        period: "Agu 2025 – Sekarang",
      },
      {
        company: "CV Arutala Mitra Mandiri",
        role: "Fullstack Developer",
        summary:
          "Analisis kebutuhan, desain UML, basis data relasional, serta dashboard interaktif Laravel dan React, dilanjutkan dengan user acceptance testing.",
        period: "Jun 2024 – Jun 2025",
      },
      {
        company: "PT Bara Prima Multi Teknovisi",
        role: "Odoo Developer",
        summary: "Modul Odoo ERP untuk manajemen bisnis garmen, produksi, dan indikator kinerja.",
        period: "Okt 2021 – Des 2021",
      },
    ],
    toolList: [
      { name: "Go", kind: "Bahasa", mark: "Go", href: "https://go.dev" },
      { name: "Next.js", kind: "Framework", mark: "N", href: "https://nextjs.org" },
      { name: "Laravel", kind: "Framework", mark: "L", href: "https://laravel.com" },
      { name: "PostgreSQL", kind: "Basis data", mark: "PG", href: "https://www.postgresql.org" },
      { name: "Docker", kind: "Kontainer", mark: "D", href: "https://www.docker.com" },
      { name: "Figma", kind: "Desain antarmuka", mark: "F", href: "https://www.figma.com" },
    ],
    skillGroups: [
      {
        title: "Bahasa & framework",
        items: "JavaScript, TypeScript, Go, PHP, Java, Dart, Python, SQL, Next.js, React, Laravel, Spring Boot, Flutter.",
      },
      {
        title: "Sistem & arsitektur",
        items: "Microservices, REST API, business intelligence, sales force automation, Odoo ERP, UML.",
      },
      {
        title: "Data & infrastruktur",
        items: "PostgreSQL, MySQL, MongoDB, Redis, Docker, Linux, HashiCorp Vault.",
      },
      {
        title: "Desain & pengiriman",
        items: "Git, GitLab, GitHub, Postman, Swagger, DBeaver, dbdiagram.io, Draw.io, Figma.",
      },
    ],
    form: {
      name: "Nama",
      email: "Email",
      topic: "Topik",
      message: "Pesan",
      submit: "Kirim",
      options: ["Peluang kerja", "Kolaborasi", "Lainnya"],
      placeholders: ["Nama Anda", "email@anda.com", "Pesan"],
      subject: "Pertanyaan portofolio",
    },
  },
};

function Icon({ name }: { name: "home" | "projects" | "experience" | "tools" | "contact" | "mail" | "linkedin" | "download" }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "home":
      return <svg {...common}><path d="M4 10.5 12 4l8 6.5V20H4z" /><path d="M9.5 20v-5.5h5V20" /></svg>;
    case "projects":
      return <svg {...common}><path d="M3 7.5h6.2l2 2.2H21V19H3z" /></svg>;
    case "experience":
      return <svg {...common}><rect x="3" y="7.5" width="18" height="11.5" rx="1.6" /><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5" /><path d="M3 12.5h18" /></svg>;
    case "tools":
      return <svg {...common}><path d="M14.5 6.2a3.6 3.6 0 0 0 4.6 4.6l-9 9-3-3 9-9a3.6 3.6 0 0 0-1.6-1.6" /></svg>;
    case "contact":
      return <svg {...common}><rect x="3" y="5.5" width="18" height="13" rx="1.6" /><path d="m3.6 6.8 8.4 6.2 8.4-6.2" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m3.6 6.8 8.4 6.2 8.4-6.2" /></svg>;
    case "linkedin":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="3.4" /><path d="M7.6 10.4V17" /><circle cx="7.6" cy="7.6" r=".9" fill="currentColor" stroke="none" /><path d="M11.6 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" /><path d="M11.6 17v-6.6" /></svg>;
    case "download":
      return <svg {...common}><path d="M12 4v10" /><path d="m8 10.5 4 4 4-4" /><path d="M4.5 19.5h15" /></svg>;
    default:
      return null;
  }
}

function SectionTitle({ words, ghost }: { words: [string, string]; ghost?: string }) {
  const label = words.join(" ");
  return (
    <h2 className="section-title" aria-label={label}>
      <span aria-hidden="true">{words[0]}</span>{" "}
      <span aria-hidden="true" className={ghost ?? "ghost"}>{words[1]}</span>
    </h2>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `${t.form.subject}: ${String(data.get("topic") ?? "")}`;
    const body = `${String(data.get("message") ?? "")}\n\n${String(data.get("name") ?? "")} — ${String(data.get("email") ?? "")}`;
    window.location.href = `mailto:fatah.rozaq20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="page">
      <a className="skip" href="#home">{t.nav.skip}</a>

      <nav aria-label={t.nav.label} className="dock">
        <a aria-label={t.nav.home} href="#home" title={t.nav.home}><Icon name="home" /></a>
        <a aria-label={t.nav.projects} href="#projects" title={t.nav.projects}><Icon name="projects" /></a>
        <a aria-label={t.nav.experience} href="#experience" title={t.nav.experience}><Icon name="experience" /></a>
        <a aria-label={t.nav.tools} href="#tools" title={t.nav.tools}><Icon name="tools" /></a>
        <a aria-label={t.nav.contact} href="#contact" title={t.nav.contact}><Icon name="contact" /></a>
      </nav>

      <div className="layout">
        <aside className="profile-col">
          <div className="profile-card">
            <svg aria-hidden="true" className="arc arc-a" viewBox="0 0 170 132"><path d="M3 106C6 44 58 7 138 4" /></svg>
            <svg aria-hidden="true" className="arc arc-b" viewBox="0 0 160 132"><path d="M152 6C98 20 34 64 6 126" /></svg>

            <div className="avatar">
              <Image alt={t.photoAlt} className="avatar-photo" height={5184} priority sizes="240px" src="/muhamad-fatah-rozaq.jpg" width={3456} />
              <span aria-hidden="true" className="avatar-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2.5 13.7 9l6.5 1.7-6.5 1.7L12 19l-1.7-6.6L3.8 10.7 10.3 9z" /></svg>
              </span>
            </div>

            <p className="profile-name">{t.name}</p>
            <p className="profile-bio">{t.bio}</p>

            <div aria-label={t.contactLabel} className="profile-links" role="group">
              <a aria-label="Email fatah.rozaq20@gmail.com" href="mailto:fatah.rozaq20@gmail.com"><Icon name="mail" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/muhamad-fatah-rozaq" rel="noreferrer" target="_blank"><Icon name="linkedin" /></a>
              <a aria-label={t.cvLabel} href="/cv-muhamad-fatah-rozaq.pdf" rel="noreferrer" target="_blank"><Icon name="download" /></a>
            </div>

            <fieldset aria-label={t.langLabel} className="lang-switch">
              <legend className="sr-only">{t.langLabel}</legend>
              <button aria-pressed={language === "en"} className={language === "en" ? "is-active" : ""} onClick={() => setLanguage("en")} type="button">EN</button>
              <button aria-pressed={language === "id"} className={language === "id" ? "is-active" : ""} onClick={() => setLanguage("id")} type="button">ID</button>
            </fieldset>
          </div>
        </aside>

        <div className="content">
          <section className="hero" id="home">
            <h1 aria-label={t.heroLabel} className="display">
              <span aria-hidden="true">{t.heroTitle[0]}</span>{" "}
              <span aria-hidden="true" className="ghost">{t.heroTitle[1]}</span>
            </h1>
            <p className="lead">{t.lead}</p>
            <ul className="stats">
              {t.stats.map((stat) => (
                <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>
              ))}
            </ul>
            <div className="features">
              {t.features.map((feature, index) => (
                <a className={`feature feature--${index === 0 ? "orange" : "lime"}`} href={feature.href} key={feature.title}>
                  <svg aria-hidden="true" className="feature-mark" fill="none" height="26" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" width="26"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /></svg>
                  <p>{feature.title}</p>
                  <span aria-hidden="true" className="feature-arrow">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <SectionTitle words={t.headings.projects} />
            <div className="work-list">
              {t.projectList.map((project) => (
                <article className="work" key={project.title}>
                  <div aria-hidden="true" className={`work-thumb work-thumb--${project.tone}`}>{project.mark}</div>
                  <div className="work-body">
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                  <span className="work-meta">{project.meta}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="experience">
            <SectionTitle words={t.headings.experience} />
            <div className="roles">
              {t.jobList.map((job) => (
                <article className="role" key={job.company}>
                  <h3>{job.company}</h3>
                  <p className="role-role">{job.role}</p>
                  <p className="role-summary">{job.summary}</p>
                  <p className="role-period">{job.period}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="tools">
            <SectionTitle words={t.headings.tools} />
            <div className="tools">
              {t.toolList.map((tool) => (
                <a className="tool" href={tool.href} key={tool.name} rel="noreferrer" target="_blank">
                  <span aria-hidden="true" className="tool-tile">{tool.mark}</span>
                  <span className="tool-body"><strong>{tool.name}</strong><small>{tool.kind}</small></span>
                </a>
              ))}
            </div>
          </section>

          <section className="section" id="skills">
            <SectionTitle words={t.headings.skills} />
            <div className="notes">
              {t.skillGroups.map((group) => (
                <article className="note" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="contact">
            <SectionTitle words={t.headings.contact} />
            <form className="form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label className="field"><span>{t.form.name}</span><input autoComplete="name" name="name" placeholder={t.form.placeholders[0]} required type="text" /></label>
                <label className="field"><span>{t.form.email}</span><input autoComplete="email" name="email" placeholder={t.form.placeholders[1]} required type="email" /></label>
              </div>
              <label className="field"><span>{t.form.topic}</span>
                <select defaultValue="" name="topic" required>
                  <option disabled value="">{t.form.topic}…</option>
                  {t.form.options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="field"><span>{t.form.message}</span><textarea name="message" placeholder={t.form.placeholders[2]} required rows={4} /></label>
              <button type="submit">{t.form.submit}</button>
            </form>
          </section>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 Muhamad Fatah Rozaq</span>
        <span aria-hidden="true">·</span>
        <a href="mailto:fatah.rozaq20@gmail.com">fatah.rozaq20@gmail.com</a>
        <span aria-hidden="true">·</span>
        <span>Bandung, Indonesia</span>
      </footer>
    </main>
  );
}
