const skills = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "MySQL",
  "PostgreSQL",
  "JWT Authentication",
  "Google OAuth",
  "Machine Learning",
  "Computer Vision",
  "YOLO",
  "NLP",
  "NumPy",
  "Pandas",
  "Git",
  "GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-5 py-2 rounded-full glass text-gray-200 hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
