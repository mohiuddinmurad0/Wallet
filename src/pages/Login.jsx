import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { BillContext } from "../Context/BillContext";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {


  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { backendUrl, token, setToken } = useContext(BillContext);



  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email || !password || (state === "Sign Up" && !name)) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const endpoint =
        state === "Sign Up"
          ? `${backendUrl}/api/customer/register`
          : `${backendUrl}/api/customer/login`;

      const payload =
        state === "Sign Up" ? { name, email, password } : { email, password };

      const { data } = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });


      //console.log(data)


      if (data.status) { 
        localStorage.setItem("token", data.token);
        //console.log(data.token);
        setToken(data.token);
        toast.success(state === "Sign Up" ? "Register Successfully!" : "Login Successfully!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Something went wrong!");
      }
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Server Error!");
      } else {
        toast.error("Network Error! Please try again.");
      }
    }
  };


  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate]);


  return (

    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-0 bg-primary">
        <h2
          onClick={() => navigate("/")}
          className="hover:text-secondary absolute left-5 sm:left-20 top-5 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-md cursor-pointer transition-transform transform hover:scale-105"
        >
          Wallet
        </h2>

        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
          <h2 className="text-3xl font-semibold text-white text-center mb-3">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>

          <p className="text-center text-sm mb-6">
            {state === "Sign Up" ? "Create your account" : "Login to your account!"}
          </p>




          <form onSubmit={onSubmitHandler}>
            {state === "Sign Up" && (
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                <img src={assets.person_icon} alt="User Icon" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="bg-transparent outline-none text-white"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
            )}

            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.mail_icon} alt="Mail Icon" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-transparent outline-none text-white"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
              <img src={assets.lock_icon} alt="Lock Icon" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="bg-transparent outline-none text-white"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <p
              onClick={() => navigate("/reset-password")}
              className="mb-4 text-indigo-500 cursor-pointer"
            >
              Forgot password?
            </p>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium"
            >
              {state}
            </button>
          </form>



          {state === "Sign Up" ? (
            <p className="text-gray-400 text-center text-xs mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-400 cursor-pointer underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-gray-400 text-center text-xs mt-4">
              Don t have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-400 cursor-pointer underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>



      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wallet. All rights reserved.
        </p>
      </footer>


    </>
  );
};

export default Login;
