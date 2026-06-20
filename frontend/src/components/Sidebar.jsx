import { Link } from "react-router-dom";

function Sidebar() {
return ( <div className="w-64 min-h-screen bg-blue-900 text-white p-5"> <h2 className="text-2xl font-bold mb-8">
Gurukul </h2>

  <ul className="space-y-3">
    <li>
      <Link
        to="/student"
        className="block px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Dashboard
      </Link>
    </li>

    <li>
      <Link
        to="/courses"
        className="block px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Courses
      </Link>
    </li>

    <li>
      <Link
        to="/assignments"
        className="block px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Assignments
      </Link>
    </li>

    <li>
      <Link
        to="/attendance"
        className="block px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Attendance
      </Link>
    </li>

    <li>
      <Link
        to="/profile"
        className="block px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Profile
      </Link>
    </li>

    <li>
      <Link
        to="/login"
        className="block px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition"
      >
        Logout
      </Link>
    </li>
  </ul>
</div>

);
}

export default Sidebar;
