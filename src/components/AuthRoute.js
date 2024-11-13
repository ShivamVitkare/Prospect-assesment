
import { Navigate } from "react-router-dom";


const AuthRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true" ? children : <Navigate to="/login" />;
};
