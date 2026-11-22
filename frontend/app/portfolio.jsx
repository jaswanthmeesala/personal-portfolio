import SiteHeader from "./site-header";
import FullTimeTenure from "./full-time-tenure";

const sectionOrder = ["experience", "projects", "skills", "credentials", "about"];

export default function Portfolio() {
  return (
    <div className="showcase">
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader sectionOrder={sectionOrder} />
      <main id="main">
        <ShowcaseHero />
        <Experience />
        <InternshipsAndMentorship />
        <ShowcaseProjects />
        <Skills />
        <Achievements />
        <About />
        <Contact />
      </main>
      <footer className="shell footer"><span>Jaswanth Meesala</span><a href="#home">Back to top</a></footer>
    </div>
  );
}

function ShowcaseHero() {
  return (
    <section className="showcase-hero" id="home" aria-labelledby="hero-title">
      <div className="shell showcase-intro">
        <div className="showcase-title">
          <div className="showcase-role-line">
            <p className="eyebrow">Java Backend Developer</p>
            <FullTimeTenure startYear={2024} startMonth={12} fallback="Full-time since Dec 2024" />
          </div>
          <h1 id="hero-title">Jaswanth <span>Meesala.</span></h1>
        </div>
        <div className="showcase-pitch">
          <p className="showcase-current-role"><strong>Software Developer I · UST HealthProof</strong><span>Dec 2024–Present</span></p>
          <p>I build <strong>Java and Spring Boot microservices</strong> for Medicare billing, including invoice generation, payment batches, and billing adjustments.</p>
          <ul className="showcase-core-stack" aria-label="Core backend stack" role="list">
            <li>REST APIs</li><li>SQL Server</li><li>Kafka</li><li>Redis</li>
          </ul>
          <div className="actions">
            <a className="button primary" href="#experience">See production work</a>
            <a className="button secondary" href="/Jaswanth_Resume.pdf" download>Download résumé</a>
          </div>
        </div>
        <div className="showcase-facts">
          <span><strong>50+</strong> production billing endpoints</span>
          <span><strong>8+</strong> microservices I worked with</span>
          <span><strong>80%+</strong> unit test coverage on services I owned</span>
        </div>
      </div>
    </section>
  );
}

function ShowcaseProjects() {
  return (
    <section className="showcase-work" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="section shell">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-title">What I built.</h2>
        </div>
        <article className="showcase-case">
          <div className="showcase-case-copy">
            <p className="eyebrow">Spring Boot · Kafka · MongoDB · Microservices · REST APIs</p>
            <h3>CricPlay</h3>
            <p>Cricket tournament software for team registration, match scheduling, and live score tracking.</p>
            <p className="showcase-ownership"><strong>My contribution:</strong> Built tournament REST APIs, added role-based access with Spring Security, and used Kafka to separate live score processing from match management. The live score service uses <strong>Java 21</strong> and <strong>Spring Boot 3</strong>.</p>
            <a className="button secondary" href="https://github.com/jaswanthmeesala/Capstone_Project">View source on GitHub</a>
          </div>
          <figure className="showcase-signal">
            <figcaption>How live scores move</figcaption>
            <ol>
              <li><strong>Spring Boot</strong><span>Receives a score update</span></li>
              <li><strong>Kafka</strong><span>Carries the event</span></li>
              <li><strong>Angular</strong><span>Displays the new score</span></li>
            </ol>
          </figure>
        </article>
        <article className="showcase-work-row">
          <h3>CoderScores</h3>
          <p>A team project that puts ratings and contest history from Codeforces, LeetCode, and CodeChef in one dashboard.</p>
          <span>React · GraphQL</span>
        </article>
        <article className="showcase-work-row">
          <h3>Secure Organ Donation</h3>
          <p>A college prototype exploring donor and recipient registration and matching through smart contracts.</p>
          <span>React · Smart contracts</span>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section shell" id="experience" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="section-head"><p className="eyebrow">Experience</p><h2 id="experience-title">Full-time experience.</h2></div>
      <article className="job featured-job">
        <div className="job-meta"><span className="org-mark">UST</span><div><p className="org">UST HealthProof</p><p className="small">Dec 2024–Present · Trivandrum, Kerala</p></div></div>
        <div><h3>Software Developer I</h3><p>Built and maintained Java and Spring Boot services for the billing module of Enrollment Plus, a Medicare insurance platform.</p>
          <ul className="job-notes">
            <li><strong>Billing APIs:</strong> Delivered 50+ REST endpoints for invoice generation and regeneration, payment batches, and adjustments with audit trails. Built invoice search with filtering, sorting, and pagination.</li>
            <li><strong>Database performance:</strong> Added Redis caching for frequently accessed reference data to reduce repeat SQL Server queries.</li>
            <li><strong>Service quality:</strong> Reached 80%+ unit test coverage on services I owned with JUnit and Mockito. Documented API contracts with OpenAPI.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

function InternshipsAndMentorship() {
  return (
    <section className="section shell early-experience" aria-labelledby="early-experience-title">
      <div className="section-head"><h2 id="early-experience-title">Internships &amp; mentorship.</h2></div>
      <article className="job"><div className="job-meta"><span className="org-mark">SI</span><div><p className="org">Smart Interviews</p><p className="small"><time dateTime="2023-09">Sep 2023</time>–<time dateTime="2024-06">Jun 2024</time></p></div></div><div><h3>DSA Mentor</h3><p>Mentored <strong>100+ students</strong> in data structures and algorithms through problem solving sessions in Java and Python.</p></div></article>
      <article className="job"><div className="job-meta"><span className="org-mark">IBM</span><div><p className="org">IBM SkillsBuild / CSRBOX</p><p className="small">Jun–Jul 2023</p></div></div><div><h3>Frontend Development Intern</h3><p>Built a job board with separate registration flows for job seekers and employers.</p></div></article>
      <article className="job"><div className="job-meta"><span className="org-mark">ST</span><div><p className="org">Supraja Technologies</p><p className="small">Aug–Nov 2022</p></div></div><div><h3>Cyber Security Intern</h3><p>Assessed web application security and received a letter of recommendation on completion.</p></div></article>
    </section>
  );
}

const skillGroups = [
  {
    title: "Backend",
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices", "Spring MVC", "Spring Data JPA", "Hibernate"],
    featured: true,
  },
  {
    title: "Data & messaging",
    technologies: ["SQL Server", "MongoDB", "Redis", "Apache Kafka"],
  },
  {
    title: "Testing & tools",
    technologies: ["JUnit", "Mockito", "Git", "Postman", "OpenAPI", "SonarQube"],
  },
  {
    title: "Frontend",
    technologies: ["React", "Angular", "JavaScript", "HTML", "CSS"],
  },
];

function Skills() {
  return (
    <section className="section shell" id="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="section-head"><p className="eyebrow">Skills</p><h2 id="skills-title">Tools I work with.</h2></div>
      <div className="skill-grid">
        {skillGroups.map(({ title, technologies, featured }) => (
          <article className={featured ? "skill-card skill-card-featured" : "skill-card"} key={title}>
            <h3>{title}</h3>
            <ul className="skill-tags" role="list">
              {technologies.map(technology => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
        <article className="skill-card skill-card-ai">
          <div>
            <h3>AI-assisted development</h3>
            <ul className="skill-tags" role="list">
              <li>Claude</li>
              <li>Codex</li>
              <li>GitHub Copilot</li>
            </ul>
          </div>
          <p>I use these tools to explore implementation options, draft code and tests, and move faster on routine tasks. I review and test the changes before they ship.</p>
        </article>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section shell" id="credentials" aria-labelledby="credentials-title" tabIndex={-1}>
      <div className="section-head"><p className="eyebrow">Achievements</p><h2 id="credentials-title">Certifications &amp; achievements.</h2></div>
      <div className="credential-grid">
        <article className="credential"><p className="eyebrow">TechGig · 2022</p><h3>Code Gladiators semifinalist</h3><p>Rank 2,642 in the semifinal round.</p><a href="https://drive.google.com/file/d/17tY_SCANccVYdx3ms3cPUSb03M9yMEhE/view">View TechGig certificate</a></article>
        <article className="credential"><p className="eyebrow">Smart Interviews · 2022</p><h3>Smart Coder Silver</h3><p>Global rank 1,272 out of 17,931.</p><a href="https://smartinterviews.in/certificate/6137df55">View Smart Coder certificate</a></article>
        <article className="credential"><p className="eyebrow">NPTEL · 2022</p><h3>Programming in Java</h3><p>Course certification.</p><a href="https://drive.google.com/file/d/1LchQeHYTiyUm0_jpsJl7x5UN3T8X1ixX/view">View Java certificate</a></article>
        <article className="credential"><p className="eyebrow">EPAM Systems · 2024</p><h3>Front-End Technologies</h3><p>EPAM UpSkill India.</p><a href="https://drive.google.com/file/d/1SGssJDXrYSp0uWwxUArCHYifZaCLMa1r/view">View EPAM certificate</a></article>
      </div>
      <details className="more"><summary>More credentials</summary><ul><li><a href="https://smartinterviews.in/certificate/f399cd65">Smart Coder Mentorship · Smart Interviews</a></li><li><a href="https://www.credly.com/badges/c0705ba7-bae3-4657-8135-69f1f27b2456/linked_in_profile">Web Development Fundamentals · IBM</a></li><li><a href="https://www.hackerrank.com/certificates/64ed8c845ad2">Java (Basic) · HackerRank</a></li><li><a href="https://www.hackerrank.com/certificates/6b70328c64a4">Python (Basic) · HackerRank</a></li><li><a href="https://media.geeksforgeeks.org/courses/certificates/5e8d7cf8055aa69a2cd6c3dd17b35c72.pdf">Complete Interview Preparation · GeeksforGeeks</a></li></ul></details>
    </section>
  );
}

function About() {
  return (
    <section className="section shell about" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <div className="section-head"><p className="eyebrow">About</p><h2 id="about-title">A bit about me.</h2></div>
      <div className="about-content">
        <p>I’m passionate about <strong>building backend systems and mentoring people who are learning to code.</strong> At UST HealthProof, I turn rules about invoices, payments, and billing adjustments into Java services.</p>
        <p>At Smart Interviews, I worked with more than 100 students on data structures and algorithms. I helped them break down problems and understand why an approach worked, so they could solve the next one on their own.</p>
        <p className="small">B.Tech in Computer Science and Cyber Security · MLR Institute of Technology · 2020–2024</p>
        <h3>Outside work</h3>
        <p>I love photography, travelling, and spending time with the people I’m closest to.</p>
        <h3>Coding profiles</h3>
        <div className="profile-links">
          <a href="https://leetcode.com/u/20r21a6218/">LeetCode</a>
          <a href="https://www.codechef.com/users/jaswanth_11">CodeChef</a>
          <a href="https://www.hackerrank.com/profile/20r21a6218">HackerRank</a>
          <a href="https://smartinterviews.in/profile/jaswanth_m">Smart Interviews</a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="shell contact-inner"><div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s talk.</h2><p>Have a Java backend opportunity or a project in mind?</p></div><div className="actions"><a className="button primary" href="mailto:jaswanthjassu111@gmail.com">Email me</a><a className="button secondary" href="https://www.linkedin.com/in/jaswanth-meesala/">LinkedIn</a><a className="button secondary" href="https://github.com/jaswanthmeesala">GitHub</a></div></div>
    </section>
  );
}
