import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-blue-600 font-semibold">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 100).map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="block p-4 bg-blue-50 rounded-lg shadow hover:shadow-md hover:bg-blue-100 transition-all duration-300"
            >
              <h2 className="text-lg font-semibold text-blue-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">Read more...</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
