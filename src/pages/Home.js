import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Web App</h1>
      <p className="text-lg text-gray-700 mb-8">
       
      </p>
      
      <div className="flex space-x-4">
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </Link>
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
