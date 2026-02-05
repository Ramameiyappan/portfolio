const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto glass rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="space-y-4 text-gray-200">
          <p>📞 +91 6381049370</p>
          <p>📧 meiyappanvdm@gmail.com</p>

          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a href="https://www.linkedin.com/in/ramameiyappan-rm-70145b359/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://github.com/Ramameiyappan" target="_blank" className="hover:text-blue-400">GitHub</a>
            <a href="https://leetcode.com/u/Ramameiyappan/" target="_blank" className="hover:text-blue-400">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
