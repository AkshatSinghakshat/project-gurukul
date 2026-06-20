function About() {
return ( <div className="bg-gray-100 min-h-screen">

  {/* Hero Section */}
  <section className="bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 text-white py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        About Gurukul
      </h1>

      <p className="text-xl text-gray-200">
        Empowering Education Through Technology
      </p>
    </div>
  </section>

  {/* About Content */}
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-white p-10 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold mb-6 text-blue-900">
        Our Mission
      </h2>

      <p className="text-lg text-gray-700 leading-9">
        Gurukul Management System is a modern educational
        platform designed to simplify and digitize academic
        management. It provides students, teachers, and
        administrators with a centralized system to manage
        attendance, assignments, courses, notes, reports,
        and overall academic activities efficiently.
      </p>
    </div>

    {/* Features Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-4">🎓</div>

        <h3 className="text-2xl font-bold mb-3">
          Student Portal
        </h3>

        <p className="text-gray-600">
          Access courses, notes, attendance,
          assignments and profile information
          from one dashboard.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-4">👨‍🏫</div>

        <h3 className="text-2xl font-bold mb-3">
          Teacher Portal
        </h3>

        <p className="text-gray-600">
          Upload notes, manage attendance,
          assignments and track student
          performance.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <div className="text-5xl mb-4">⚙️</div>

        <h3 className="text-2xl font-bold mb-3">
          Admin Panel
        </h3>

        <p className="text-gray-600">
          Complete control over students,
          teachers, courses and system reports.
        </p>
      </div>

    </div>

    {/* Statistics */}
    <div className="grid md:grid-cols-4 gap-6 mt-16">

      <div className="bg-blue-900 text-white p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold">500+</h3>
        <p>Students</p>
      </div>

      <div className="bg-green-600 text-white p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold">50+</h3>
        <p>Teachers</p>
      </div>

      <div className="bg-purple-600 text-white p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold">100+</h3>
        <p>Courses</p>
      </div>

      <div className="bg-red-500 text-white p-8 rounded-2xl text-center">
        <h3 className="text-4xl font-bold">95%</h3>
        <p>Success Rate</p>
      </div>

    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white text-center py-6">
    © 2026 Gurukul Management System | Developed by Akshat Singh
  </footer>
</div>

);
}

export default About;
