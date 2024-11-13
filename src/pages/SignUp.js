import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simple validation (optional)
    if (email && password) {
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/posts");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-900">
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
              Create an Account
            </h2>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
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

            <button
              type="submit"
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
             Create My Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
