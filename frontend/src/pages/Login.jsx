import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
email: "",
password: "",
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
    "http://localhost:5000/api/auth/login",
    formData
  );

  localStorage.setItem("token", res.data.token);
  localStorage.setItem(
    "user",
    JSON.stringify(res.data.user)
  );

  const role = res.data.user.role;

  if (role === "admin") {
    navigate("/admin");
  } else if (role === "teacher") {
    navigate("/teacher");
  } else {
    navigate("/student");
  }
} catch (error) {
  alert("Invalid Email or Password");
  console.log(error);
}

};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 px-4"> <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

   <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-blue-900">
        Gurukul
      </h1>

      <p className="text-gray-500 mt-2">
        Login to your account
      </p>
    </div>

    <form onSubmit={handleSubmit}>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
      >
        Login
      </button>

      <p className="text-center mt-5 text-gray-600">
        Don't have an account?
        <Link
          to="/register"
          className="text-blue-900 font-semibold ml-2"
        >
          Register
        </Link>
      </p>

    </form>
  </div>
</div>


);
}

export default Login;
