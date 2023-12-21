import React, { useState } from "react";
import MainScreen from "./MainScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showPW from "../assets/showPw.svg";
import hidePW from "../assets/hidePw.svg";

const LoginPage = () => {
  const [userName, setUserName] = useState(""); // state variable for username
  const [password, setPassword] = useState(""); // state variable for password
  const [showPassword, setShowPassword] = useState(false); // state variable to make password show & hide password
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false); // state variable for checking if user is authenticated or not

  //   method for authenticating user
  const verifyUser = () => {
    if (userName === "bharatagri" && password === "1234") {
      setIsAuthenticatedUser(true);
    } else {
      setPassword("");
      toast("Invalid username or password");
    }
  };

  // Render MainScreenComponent if the user is authenticated
  if (isAuthenticatedUser) {
    return <MainScreen />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />

          {/* eye symbol to make password visible in order to check if user has eneterd the correct pw */}
          <div
            className="absolute top-[55.5%] right-[42%] cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <img
                src={showPW}
                alt="showPw"
                height={20}
                width={20}
                className="object-contain"
              />
            ) : (
              <img
                src={hidePW}
                alt="hidePw"
                height={20}
                width={20}
                className="object-contain"
              />
            )}
          </div>
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"
          type="button"
          onClick={() => {
            verifyUser();
          }}
        >
          Log In
        </button>
        {/* toast for invaild credentials error msg */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default LoginPage;
