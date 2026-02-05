const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] glass rounded-2xl px-8 py-4 flex justify-between items-center z-50">
      <h1 className="text-lg font-bold text-white tracking-wide">
        Ramameiyappan RM
      </h1>

      <ul className="flex gap-6 text-gray-200">
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        <a
            href="https://ramameiyappan.github.io/portfolio/ramameiyappanrm_resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-blue-500/70 hover:bg-blue-500 transition"
        >
            Resume
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
