// components/Navbar.js
import React from "react";
import { toast } from "react-toastify";
import { Hospital } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Simple styled Button component
const Button = ({ children, primary, onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      primary
        ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
        : "text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500"
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/home");
    toast.success("Successfully loged out");
    window.location.reload(); // Refresh to trigger re-render of Navbar
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-2">
        <Hospital className="w-8 h-8 text-blue-600" />
        <Link className="text-xl font-bold" to={"/home"}>
          Medicare
        </Link>
      </div>
      <div>
        <Link to={"/home"} className="mx-2">
          Home
        </Link>
        <Link to={"/healthPredict"} className="mx-2">
          Health Checker
        </Link>
        <Link to={"/services"} className="mx-2">
          Services
        </Link>
        <Link to={"/chatbot"} className="mx-2">
          Chatbot
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        {!user ? (
          <>
            <Button onClick={() => handleButtonClick("/login")}>Login</Button>
            <Button onClick={() => handleButtonClick("/signup")}>
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <div className="text-sm text-gray-700">
              Welcome,{" "}
              <span className="font-semibold">
                {user.firstName + " " + user.lastName}
              </span>{" "}
              (<span className="capitalize">{user.role}</span>)
            </div>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
