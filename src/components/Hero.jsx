const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ramameiyappan RM
          </h1>

          <p className="mt-4 text-xl text-blue-400">
            Backend Developer • AI & ML Enthusiast
          </p>

          <p className="mt-6 text-gray-300 max-w-xl">
            Backend-focused web application development using Django
            and REST APIs, with hands-on Machine Learning experience.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-500/80 hover:bg-blue-500 transition"
            >
              View Projects
            </a>

            <a
              href="https://ramameiyappan.github.io/portfolio/ramameiyappanrm_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass hover:border-blue-400 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="https://ramameiyappan.github.io/portfolio/profile.jpg"
            alt="Ramameiyappan RM"
            className="w-64 h-64 rounded-3xl object-cover border border-white/20"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
