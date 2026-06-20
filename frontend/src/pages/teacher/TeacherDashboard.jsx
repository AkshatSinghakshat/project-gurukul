import Sidebar from "../../components/Sidebar";

function TeacherDashboard() {
return ( <div className="flex"> <Sidebar />

  <div className="flex-1 bg-gray-100 min-h-screen p-8">
    <h1 className="text-4xl font-bold mb-8">
      Teacher Dashboard
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Total Students
        </h2>
        <p className="text-4xl font-bold text-blue-900 mt-3">
          120
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Courses
        </h2>
        <p className="text-4xl font-bold text-green-600 mt-3">
          8
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Notes Uploaded
        </h2>
        <p className="text-4xl font-bold text-purple-600 mt-3">
          45
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Assignments
        </h2>
        <p className="text-4xl font-bold text-red-600 mt-3">
          20
        </p>
      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex flex-col gap-3">
          <button className="bg-blue-900 text-white py-3 rounded-lg">
            Upload Notes
          </button>

          <button className="bg-green-600 text-white py-3 rounded-lg">
            Upload Assignment
          </button>

          <button className="bg-purple-600 text-white py-3 rounded-lg">
            Mark Attendance
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Activities
        </h2>

        <ul className="space-y-3">
          <li>📚 Notes Uploaded</li>
          <li>📝 Assignment Added</li>
          <li>✅ Attendance Updated</li>
          <li>👨‍🎓 Student Joined Course</li>
        </ul>
      </div>

    </div>
  </div>
</div>

);
}

export default TeacherDashboard;
