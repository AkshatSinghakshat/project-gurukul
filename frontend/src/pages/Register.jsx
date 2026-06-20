import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
role: "student",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const res = await axios.post(
    "http://localhost:5000/api/auth/register",
    formData
  );

  alert("Registration Successful ✅");

  setFormData({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  navigate("/login");
} catch (error) {
  console.log(error);
  alert("Registration Failed ❌");
}

};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 px-4"> <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-blue-900">
        Gurukul
      </h1>

      <p className="text-gray-500 mt-2">
        Create your account
      </p>
    </div>

    <form onSubmit={handleSubmit}>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Full Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Select Role
        </label>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
      >
        Register
      </button>

      <p className="text-center mt-5 text-gray-600">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-900 font-semibold ml-2"
        >
          Login
        </Link>
      </p>

    </form>
  </div>
</div>

);
}

export default Register;
