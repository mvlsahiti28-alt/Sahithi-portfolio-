
const projects = [
  {
    name: "BatchX",
    type: "Bioinformatics Platform",
    description:
      "Cloud-based platform for data analysis, workflow management, and enterprise integrations.",
    technologies: [".NET", "React", "SQL Server", "Cloud"],
  },
  {
    name: "UAlbany Portal",
    type: "Higher Education",
    description:
      "Enterprise portal development with responsive interfaces, backend APIs, and application integrations.",
    technologies: ["ASP.NET Core", "React", "EF Core"],
  },
  {
    name: "SOMPO General Insurance",
    type: "Insurance",
    description:
      "Enterprise software project in the general insurance domain.",
    technologies: [".NET", "C#", "SQL Server"],
  },
  {
    name: "FHPlus",
    type: "Healthcare",
    description:
      "Healthcare website project associated with Apollo Hospitals.",
    technologies: [".NET", "Web Development"],
  },
];

const skills = [
  "C#", ".NET", "ASP.NET Core", "REST APIs",
  "React.js", "JavaScript", "Entity Framework Core",
  "SQL Server", "AWS", "Azure", "CI/CD", "Git",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#09090b]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-lg font-bold tracking-tight">
            SM<span className="text-violet-400">.</span>
          </a>

          <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          >
            Let's Connect
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24"
      >
        <p className="mb-6 flex items-center gap-2 text-sm text-violet-300">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          .NET FULL STACK DEVELOPER
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
          Hi, I'm Sahithi.
          <br />
          I build{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent">
            digital experiences.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          I’m a .NET Full Stack Developer with 8+ years of experience
          building enterprise applications, secure APIs, and responsive
          web experiences across healthcare, insurance, higher education,
          and life sciences.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 font-medium hover:bg-violet-400"
          >
            Explore My Work ↗
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">8+</p>
            <p className="mt-2 text-sm text-zinc-500">Years of experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Full Stack</p>
            <p className="mt-2 text-sm text-zinc-500">Frontend to backend</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl font-bold">Cloud</p>
            <p className="mt-2 text-sm text-zinc-500">AWS & Azure</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Turning complex problems into practical solutions.
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
            My work combines backend engineering with modern frontend
            development. I build APIs and business services, develop
            responsive React interfaces, work with relational databases,
            and support secure application deployments. I enjoy creating
            reliable software that makes complex workflows easier to use.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Technical Skills
        </p>
        <h2 className="mt-4 text-3xl font-bold">My technology toolkit</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/60 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Projects & experience
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A selection of projects across life sciences, education,
            insurance, and healthcare.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-[#101013] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
              >
                <p className="text-sm text-violet-300">
                  0{index + 1} / {project.type}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  {project.name}
                </h3>
                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Let's build something meaningful.
        </h2>
        <p className="mt-5 max-w-xl leading-7 text-zinc-400">
          Interested in connecting about software development opportunities
          or technology projects? Feel free to reach out.
        </p>
        <a
          href="mailto:mvlsahiti28@gmail.com"
          className="mt-8 inline-flex rounded-full bg-violet-500 px-6 py-3 font-medium hover:bg-violet-400"
        >
          Email Me ↗
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-zinc-500">
        © 2026 Sahithi Mandava. Built with Next.js.
      </footer>
    </main>
  );
}
