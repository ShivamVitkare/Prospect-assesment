import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetails() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postID]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-blue-600 font-semibold">Loading post details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.body}</p>
        <div className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
