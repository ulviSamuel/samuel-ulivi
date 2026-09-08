import { useEffect, useState, type JSX } from 'react';
import { capabilities, contact, languages, profile, projects, socialLinks } from './data';
import { getCopy, type SiteCopy } from './locales/content';
import type { Locale } from './types/content';

const sectionIds = ['profile', 'experience', 'education', 'skills', 'work', 'contact'];

function mailto(subject: string, body?: string): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
}

function App(): JSX.Element {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = window.localStorage.getItem('samuel-locale');
    if (stored === 'it' || stored === 'en') return stored;
    return navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [activeCapability, setActiveCapability] = useState(0);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const text = getCopy(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = locale === 'it' ? 'Samuel Ulivi | Ingegneria Informatica' : 'Samuel Ulivi | Computer Engineering';
    document.querySelector('meta[name="description"]')?.setAttribute('content', locale === 'it' ? 'Samuel Ulivi è uno studente di Ingegneria Informatica con esperienza nello sviluppo software e nelle operazioni di cybersecurity.' : 'Samuel Ulivi is a Computer Engineering student with experience across software development and cybersecurity operations.');
    window.localStorage.setItem('samuel-locale', locale);
  }, [locale]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('.scroll-section, .experience-entry, .education-entry, .project-entry').forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) element.classList.add('is-visible');
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [locale]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0.05, 0.2, 0.5] });
    sectionIds.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) revealObserver.unobserve(entry.target);
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    document.querySelectorAll('.scroll-section, .experience-entry, .education-entry, .project-entry').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentCapability = capabilities[activeCapability];
  const currentProjectCopy = (id: string): [string, string] => text.projectLabels[id];
  const requestCv = mailto(locale === 'it' ? 'Richiesta CV - Samuel Ulivi' : 'CV request - Samuel Ulivi', locale === 'it' ? 'Buongiorno Samuel,\n\nho visitato il tuo portfolio professionale e vorrei ricevere il tuo CV per la seguente opportunità:\n\nAzienda:\nPosizione:\nUlteriori informazioni:' : contact.cvRequest.body);

  const changeLocale = (next: Locale) => {
    setLocale(next);
    setMenuOpen(false);
  };

  return <div className="site-shell">
    <Header activeSection={activeSection} locale={locale} text={text} menuOpen={menuOpen} scrolled={scrolled} setMenuOpen={setMenuOpen} changeLocale={changeLocale} requestCv={requestCv} />
    <main id="main-content">
      <Hero text={text} />
      <Manifesto text={text} />
      <About text={text} />
      <Experience text={text} />
      <Education text={text} />
      <Capabilities text={text} currentCapability={currentCapability} activeCapability={activeCapability} setActiveCapability={setActiveCapability} />
      <Projects text={text} currentProjectCopy={currentProjectCopy} openProject={openProject} setOpenProject={setOpenProject} />
      <ContactSection text={text} locale={locale} requestCv={requestCv} />
    </main>
    <Footer locale={locale} text={text} changeLocale={changeLocale} />
  </div>;
}

function Header({ activeSection, locale, text, menuOpen, scrolled, setMenuOpen, changeLocale, requestCv }: { activeSection: string; locale: Locale; text: SiteCopy; menuOpen: boolean; scrolled: boolean; setMenuOpen: (open: boolean) => void; changeLocale: (locale: Locale) => void; requestCv: string }): JSX.Element {
  const links = [
    ['profile', text.nav.profile], ['experience', text.nav.experience], ['education', text.nav.education], ['skills', text.nav.skills], ['work', text.nav.work], ['contact', text.nav.contact],
  ];
  return <header className={`site-header ${menuOpen ? 'is-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="header-inner">
      <a className="wordmark" href="#profile" onClick={() => setMenuOpen(false)}>Samuel Ulivi</a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([id, label]) => <a key={id} className={activeSection === id ? 'is-active' : ''} href={`#${id}`}>{label}</a>)}</nav>
      <div className="header-tools">
        <div className="language-picker" aria-label={text.ui.language}>
          <button type="button" className={locale === 'en' ? 'is-active' : ''} onClick={() => changeLocale('en')}>EN</button>
          <span aria-hidden="true">/</span>
          <button type="button" className={locale === 'it' ? 'is-active' : ''} onClick={() => changeLocale('it')}>IT</button>
        </div>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? text.ui.close : text.ui.menu}</span><i aria-hidden="true"><b /><b /></i></button>
      </div>
    </div>
    <div id="mobile-navigation" className="mobile-navigation" hidden={!menuOpen}><nav aria-label="Mobile navigation">{links.map(([id, label]) => <a key={id} className={activeSection === id ? 'is-active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">↗</span></a>)}<a href={requestCv} onClick={() => setMenuOpen(false)}>{text.ui.requestCv}<span aria-hidden="true">↗</span></a></nav></div>
  </header>;
}

function Hero({ text }: { text: SiteCopy }): JSX.Element {
  return <section className="hero scroll-section" id="profile" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="hero-greeting">{text.hello}</p><h1 id="hero-title">{text.name}</h1><p className="hero-role">{text.role}</p><a className="hero-link" href="#manifesto">{text.discover}<span aria-hidden="true">↘</span></a></div>
    <div className="hero-portrait"><div className="hero-geometry hero-geometry--one" /><div className="hero-geometry hero-geometry--two" /><img src="./assets/portrait.png" alt="Portrait of Samuel Ulivi" width="1536" height="1024" fetchPriority="high" /></div>
  </section>;
}

function Manifesto({ text }: { text: SiteCopy }): JSX.Element {
  return <section className="manifesto scroll-section" id="manifesto" aria-labelledby="manifesto-title"><div className="section-frame"><p className="section-kicker">/ 01</p><h2 id="manifesto-title">{text.manifesto}</h2></div></section>;
}

function About({ text }: { text: SiteCopy }): JSX.Element {
  return <section className="about section-light scroll-section" id="about" aria-labelledby="about-title"><div className="section-frame about-grid"><div><p className="section-kicker">/ {text.nav.profile}</p><h2 id="about-title">{text.aboutTitle}</h2></div><div className="about-copy"><p>{text.about}</p><p>{text.aboutSecond}</p><div className="about-rule" aria-hidden="true" /></div></div></section>;
}

function Experience({ text }: { text: SiteCopy }): JSX.Element {
  return <section className="experience section-light scroll-section" id="experience" aria-labelledby="experience-title"><div className="section-frame"><SectionIntro id="experience-title" kicker={`/ 02 · ${text.nav.experience}`} title={text.nav.experience} intro={text.experienceIntro} /><div className="experience-list">{text.experience.map(([role, organization, period, description], index) => <article className="experience-entry" key={role}><span className="entry-number">0{index + 1}</span><div className="entry-meta"><p>{period}</p><h3>{role}</h3><span>{organization}</span></div><p className="entry-description">{description}</p></article>)}</div></div></section>;
}

function Education({ text }: { text: SiteCopy }): JSX.Element {
  return <section className="education section-soft scroll-section" id="education" aria-labelledby="education-title"><div className="section-frame"><SectionIntro id="education-title" kicker={`/ 03 · ${text.nav.education}`} title={text.nav.education} intro={text.educationIntro} /><div className="education-layout"><div className="education-list">{text.education.map(([title, institution, period, details]) => <article className="education-entry" key={title}><div className="education-period">{period}</div><div><h3>{title}</h3><p>{institution}</p><span>{details}</span></div></article>)}</div><aside className="credentials"><p className="section-kicker">{text.ui.certifications}</p>{text.certifications.map((certification) => <p key={certification}>{certification}</p>)}<p className="section-kicker credentials-languages">{text.ui.languages}</p>{languages.map((language) => <p key={language.language}>{language.language} <span>{language.level}</span></p>)}</aside></div></div></section>;
}

function Capabilities({ text, currentCapability, activeCapability, setActiveCapability }: { text: SiteCopy; currentCapability: (typeof capabilities)[number]; activeCapability: number; setActiveCapability: (index: number) => void }): JSX.Element {
  return <section className="capabilities section-light scroll-section" id="skills" aria-labelledby="skills-title"><div className="section-frame"><SectionIntro id="skills-title" kicker={`/ 04 · ${text.nav.skills}`} title={text.nav.skills} intro={text.skillsIntro} /><div className="capability-layout"><div className="capability-index" role="tablist" aria-label={text.nav.skills}>{capabilities.map((capability, index) => <button key={capability.id} className={activeCapability === index ? 'is-active' : ''} type="button" role="tab" aria-selected={activeCapability === index} aria-controls={`capability-panel-${capability.id}`} onClick={() => setActiveCapability(index)}><span>0{index + 1}</span>{text.capabilities[index][0]}</button>)}</div><div className="capability-panel" id={`capability-panel-${currentCapability.id}`} role="tabpanel"><p className="panel-label">{text.capabilities[activeCapability][0]}</p><h3>{text.capabilities[activeCapability][1]}</h3><ul>{text.capabilityItems[activeCapability].map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>;
}

function Projects({ text, currentProjectCopy, openProject, setOpenProject }: { text: SiteCopy; currentProjectCopy: (id: string) => [string, string]; openProject: string | null; setOpenProject: (id: string | null) => void }): JSX.Element {
  return <section className="projects section-soft scroll-section" id="work" aria-labelledby="work-title"><div className="section-frame"><SectionIntro id="work-title" kicker={`/ 05 · ${text.ui.selected}`} title={text.ui.selected} intro={text.workIntro} /><div className="project-list">{projects.map((project, index) => { const projectCopy = currentProjectCopy(project.id); const isOpen = openProject === project.id; return <article className={`project-entry ${isOpen ? 'is-open' : ''}`} key={project.id}><button type="button" className="project-trigger" aria-expanded={isOpen} aria-controls={`project-${project.id}`} onClick={() => setOpenProject(isOpen ? null : project.id)}><span className="project-number">0{index + 1}</span><span className="project-main"><span className="project-title">{project.title}</span><span className="project-category">{project.context === 'Professional internship at Elettra Sincrotrone Trieste' ? text.projectCategories.mobile : project.categories.includes('Embedded systems') ? text.projectCategories.embedded : text.projectCategories.web}</span></span><span className="project-year">{project.year}</span><span className="project-arrow" aria-hidden="true">↗</span></button><div className="project-details" id={`project-${project.id}`} hidden={!isOpen}><p>{projectCopy[0]}</p><p className="project-evidence">{projectCopy[1]}</p><div className="project-tech">{project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div><a href={project.repositoryUrl} target="_blank" rel="noreferrer">{text.ui.repository} <span aria-hidden="true">↗</span></a></div></article>; })}</div></div></section>;
}

function ContactSection({ text, locale, requestCv }: { text: SiteCopy; locale: Locale; requestCv: string }): JSX.Element {
  return <section className="contact section-dark scroll-section" id="contact" aria-labelledby="contact-title"><div className="section-frame contact-layout"><div><p className="section-kicker">/ 06 · {text.nav.contact}</p><h2 id="contact-title">{text.contactTitle}</h2><p className="contact-text">{text.contactText}</p></div><div className="contact-links"><a className="contact-email" href={mailto(locale === 'it' ? 'Contatto dal portfolio di Samuel Ulivi' : 'Contact from Samuel Ulivi portfolio')}>{profile.email}<span aria-hidden="true">↗</span></a><a href={socialLinks.find((link) => link.label === 'LinkedIn')!.href} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href={socialLinks.find((link) => link.label === 'GitHub')!.href} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="request-link" href={requestCv}>{text.ui.requestCv}<span aria-hidden="true">↗</span></a></div></div></section>;
}

function Footer({ locale, text, changeLocale }: { locale: Locale; text: SiteCopy; changeLocale: (locale: Locale) => void }): JSX.Element {
  return <footer className="site-footer"><div className="footer-inner"><span>Samuel Ulivi</span><span>© {new Date().getFullYear()}</span><span className="footer-note">{text.footerNote}</span><div className="footer-links"><a href={socialLinks[0].href} target="_blank" rel="noreferrer">GitHub</a><a href={socialLinks[1].href} target="_blank" rel="noreferrer">LinkedIn</a><a href={mailto(locale === 'it' ? 'Contatto dal portfolio di Samuel Ulivi' : 'Contact from Samuel Ulivi portfolio')}>Email</a><button type="button" className={locale === 'en' ? 'is-active' : ''} onClick={() => changeLocale('en')}>EN</button><span>/</span><button type="button" className={locale === 'it' ? 'is-active' : ''} onClick={() => changeLocale('it')}>IT</button><a href="#profile" aria-label={text.ui.backTop}>↑</a></div></div></footer>;
}

function SectionIntro({ id, kicker, title, intro }: { id?: string; kicker: string; title: string; intro: string }): JSX.Element {
  return <div className="section-intro"><p className="section-kicker">{kicker}</p><div><h2 id={id}>{title}</h2><p>{intro}</p></div></div>;
}

export default App;