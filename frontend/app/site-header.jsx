"use client";

import { useEffect, useRef, useState } from "react";

const labels = {
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  credentials: "Achievements",
  contact: "Contact",
};

export default function SiteHeader({ sectionOrder }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const compact = window.matchMedia("(max-width: 780px)");
    const closeMenu = () => setMenuOpen(false);
    compact.addEventListener("change", closeMenu);
    return () => compact.removeEventListener("change", closeMenu);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const sections = [...sectionOrder, "contact"].map(id => document.getElementById(id));
    let frame = null;

    function updateCurrentSection() {
      const readingLine = window.innerHeight * 0.35;
      const active = sections.findLast(section => section.getBoundingClientRect().top <= readingLine);
      const atBottom = window.scrollY > 0 &&
        Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
      setCurrentSection(atBottom ? "contact" : active?.id ?? null);
    }

    function scheduleUpdate() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateCurrentSection();
      });
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    updateCurrentSection();
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [sectionOrder]);

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current.focus();
    }
  }

  function navigateToSection(id) {
    if (!menuOpen) return;
    document.getElementById(id)?.focus({ preventScroll: true });
    setMenuOpen(false);
  }

  function jumpToAbout(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const about = document.getElementById("about");
    if (!about) return;

    event.preventDefault();
    setMenuOpen(false);
    const { pathname, search, hash } = window.location;
    if (hash) window.history.replaceState(window.history.state, "", pathname + search);
    about.focus({ preventScroll: true });
    requestAnimationFrame(() => about.scrollIntoView());
  }

  return (
    <header className="header sticky top-0 z-[4]" onKeyDown={handleKeyDown}>
      <div className="shell header-inner">
        <div className="header-shortcuts">
          <a className="brand" href="#home" aria-label="Back to top">
            <span className="monogram" aria-hidden="true">JM</span>
          </a>
          <a className="header-about" href="#about" onClick={jumpToAbout}>About me</a>
        </div>
        <button ref={menuButton} className="menu" type="button" aria-expanded={menuOpen}
          aria-controls="navigation" onClick={() => setMenuOpen(open => !open)}>
          Menu
        </button>
        <nav id="navigation" aria-label="Main navigation" data-collapsed={!menuOpen}>
          {[...sectionOrder, "contact"].map(id => (
            <a key={id} href={`#${id}`}
              className={id === "contact" ? "nav-contact" : undefined}
              aria-current={currentSection === id ? "location" : undefined}
              onClick={() => navigateToSection(id)}>
              {labels[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
