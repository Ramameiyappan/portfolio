const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-10">

        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 mb-8">
          Python & Django developer experienced in building secure and scalable
          web applications. Skilled in backend development, authentication,
          REST APIs, and database management. AI and Machine Learning enthusiast
          with hands-on experience in NLP, Computer Vision, and ML model deployment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-200">
          <div>
            <p><span className="text-blue-400">Degree:</span> B.E Computer Science Engineering</p>
            <p><span className="text-blue-400">College:</span> University College of Engineering, Villupuram</p>
            <p><span className="text-blue-400">CGPA:</span> 8.32 (Till Now)</p>
          </div>

          <div>
            <p><span className="text-blue-400">School:</span> Jawahar Higher Secondary School, Neyveli</p>
            <p><span className="text-blue-400">10th:</span> 87.2%</p>
            <p><span className="text-blue-400">12th:</span> 90.8%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
