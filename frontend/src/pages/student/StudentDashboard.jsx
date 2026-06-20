import Sidebar from "../../components/Sidebar";

function StudentDashboard() {
return ( <div className="flex"> <Sidebar />
  <div className="flex-1 bg-gray-100 min-h-screen p-8">
    <h1 className="text-4xl font-bold mb-8">
      Student Dashboard
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Courses
        </h2>
        <p className="text-4xl font-bold text-blue-900 mt-3">
          12
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Attendance
        </h2>
        <p className="text-4xl font-bold text-green-600 mt-3">
          95%
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Assignments
        </h2>
        <p className="text-4xl font-bold text-red-600 mt-3">
          8
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-gray-600">
          Notes
        </h2>
        <p className="text-4xl font-bold text-purple-600 mt-3">
          24
        </p>
      </div>

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Recent Assignments
        </h2>

        <ul className="space-y-3">
          <li>📘 Java Assignment</li>
          <li>📘 Database Project</li>
          <li>📘 React Practical</li>
          <li>📘 PHP Task</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Notifications
        </h2>

        <ul className="space-y-3">
          <li>🔔 New Notes Uploaded</li>
          <li>🔔 Assignment Deadline Tomorrow</li>
          <li>🔔 Attendance Updated</li>
          <li>🔔 New Course Added</li>
        </ul>
      </div>

    </div>
  </div>
</div>


);
}

export default StudentDashboard;
