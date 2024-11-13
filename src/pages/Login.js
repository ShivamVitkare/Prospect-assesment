import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if credentials match
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // Save login state (could use Redux or simpler approach like setting an `isLoggedIn` key)
      localStorage.setItem("isLoggedIn", "true");
      navigate("/posts");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900">
      <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 flex items-center max-w-4xl mx-4">
        <div className="w-1/2 hidden md:flex items-center justify-center p-5">
          <img
            src="https://via.placeholder.com/300"
            alt="Illustration"
            className="rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4">
              <img src="https://via.placeholder.com/40" alt="Logo" />
            </div>
            <h2 className="text-white text-2xl font-semibold">
              Login to your account
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 pl-10 focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 pl-10 focus:outline-none"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-4 h-4 text-blue-500 rounded focus:ring-0"
              />
              <label className="text-gray-400">
                I agree to the Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
