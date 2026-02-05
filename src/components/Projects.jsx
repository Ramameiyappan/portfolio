const projects = [
  {
    title: "CSC Management System",
    tools: "Django REST Framework, React, PostgreSQL, JWT, Google OAuth",
    desc: `A full-stack CSC e-Governance Portal where operators can register daily
    CSC services such as electricity, mobile recharge, PAN, and other services. 
    Role-based access allows operators to request
    manager privileges, which are approved by admin. Managers can view full
    ledger and user details.`,
    github: "https://github.com/Ramameiyappan/csc_fullstack",
    live: "https://csc-fullstack.vercel.app/"
  },
  {
    title: "Railway Obstacle Detection System",
    tools: "Python, YOLO, Computer Vision, Streamlit",
    desc: `AI-powered railway safety system using YOLO-based object detection and
    segmentation models to detect obstacles on tracks and provide real-time
    visual and audio alerts.`,
    github: "https://github.com/Ramameiyappan/railway_obstacle_detection",
    live: "https://railwayobstacledetection.streamlit.app/"
  },
  {
    title: "Movie Review Sentiment Check",
    tools: "Python, NLP, TF-IDF, Logistic Regression, Streamlit",
    desc: `Movie review sentiment analysis system using NLP techniques with
    TF-IDF feature extraction and Logistic Regression for classification.`,
    github: "https://github.com/Ramameiyappan/movie_review_sentiment_check",
    live: "https://moviereviewsentimentcheck.streamlit.app/"
  },
  {
    title: "IPL Prediction System",
    tools: "Django, Python, MySQL",
    desc: `Simulates IPL 2025 season by predicting match winners, managing points
    tables, calculating NRR, and simulating playoff rounds.`,
    github: "https://github.com/Ramameiyappan/ipl_prediction"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map(p => (
          <div key={p.title} className="glass rounded-3xl p-8 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>

            <p className="text-blue-400 text-sm mt-2">
              {p.tools}
            </p>

            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              {p.desc}
            </p>

            <div className="flex gap-6 mt-6">
              {p.live && (
                <a href={p.live} target="_blank" className="text-blue-400 hover:underline">
                  Live
                </a>
              )}
              <a href={p.github} target="_blank" className="text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
