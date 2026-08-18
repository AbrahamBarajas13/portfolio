import { useEffect, useState } from 'react'
import { profile, skills, experience, projects, education } from './data.js'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Experience', 'experience'],
    ['Projects', 'projects'],
    ['Education', 'education'],
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand">AB</a>
      <nav className="nav__links">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
      <a className="nav__cta" href={profile.resumeUrl} target="_blank" rel="noreferrer">
        Résumé
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__inner">
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">
          <span className="grad-text">{profile.title}</span>
        </h2>
        <ul className="hero__focus">
          {profile.focus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">View my work</a>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <div className="hero__socials">
          <span className="hero__loc">📍 {profile.location}</span>
          <span>·</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>·</span>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="section__head">
        <span className="section__accent" aria-hidden="true" />
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="Summary">
      <p className="about__text">{profile.summary}</p>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="skills__grid">
        {skills.map((group) => (
          <div className="skills__card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline__item" key={job.company}>
            <div className="timeline__marker" />
            <div className="timeline__content">
              <div className="timeline__top">
                <h3>{job.role} <span className="timeline__company">· {job.company}</span></h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__loc">{job.location}</p>
              <ul>
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects__grid">
        {projects.map((p) => {
          const Wrapper = p.link ? 'a' : 'article'
          const wrapperProps = p.link
            ? { href: p.link, target: '_blank', rel: 'noreferrer' }
            : {}
          return (
            <Wrapper
              className={`project ${p.link ? 'project--link' : ''}`}
              key={p.name}
              {...wrapperProps}
            >
              <div className="project__head">
                <span className={`project__badge project__badge--${p.kind.toLowerCase()}`}>
                  {p.kind}
                </span>
                <span className="project__period">{p.period}</span>
              </div>
              <h3 className="project__name">
                {p.name}
                {p.link && <span className="project__arrow">↗</span>}
              </h3>
              <p className="project__summary">{p.summary}</p>
              <div className="chips chips--sm">
                {p.tools.map((t) => (
                  <span className="chip chip--outline" key={t}>{t}</span>
                ))}
              </div>
            </Wrapper>
          )
        })}
      </div>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="edu__grid">
        {education.map((e) => (
          <div className="edu__card" key={e.title}>
            <h3>{e.title}</h3>
            <p className="edu__org">{e.org}</p>
            {e.date && <span className="edu__date">{e.date}</span>}
          </div>
        ))}
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" />
      <h2 className="footer__title">Let's build something.</h2>
      <p className="footer__sub">
        Open to new opportunities and collaborations. The fastest way to reach me:
      </p>
      <a className="btn btn--primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="footer__socials">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  )
}
