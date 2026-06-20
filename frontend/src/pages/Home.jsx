function Home() {
return ( <div>
{/* Hero Section */} <section className="bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center"> <div className="max-w-7xl mx-auto px-6 text-center"> <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
Gurukul Management System </h1>

      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Smart Platform for Students, Teachers & Admin
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
          Get Started
        </button>

        <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* Features */}
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-5xl mb-4">🎓</div>

          <h3 className="text-2xl font-bold mb-3">
            Student Management
          </h3>

          <p className="text-gray-600">
            Manage student records, attendance,
            assignments and academic progress.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-5xl mb-4">👨‍🏫</div>

          <h3 className="text-2xl font-bold mb-3">
            Teacher Portal
          </h3>

          <p className="text-gray-600">
            Upload notes, assignments and manage
            students efficiently.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-5xl mb-4">⚙️</div>

          <h3 className="text-2xl font-bold mb-3">
            Admin Dashboard
          </h3>

          <p className="text-gray-600">
            Full control over teachers, students,
            courses and reports.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Statistics */}
  <section className="bg-blue-900 text-white py-16">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-bold">500+</h3>
        <p className="mt-2">Students</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold">50+</h3>
        <p className="mt-2">Teachers</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold">100+</h3>
        <p className="mt-2">Courses</p>
      </div>

      <div>
        <h3 className="text-5xl font-bold">95%</h3>
        <p className="mt-2">Success Rate</p>
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

export default Home;
