import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";


const SendMoney = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotification , setIsNotification] = useState(false);
  const [isMessage,setIsMessage] = useState(false)

  const navigate = useNavigate();

  const userData = {
    email : "murad.my00@gmail.com"
  }

  const onSubmitHandler = (e) => {

    e.preventDefault();

  }

  const onSubmit = () => {

    toast.success("Send Money Successfully")

    navigate('/dashboard')

  }


  return (
    <div className="bg-gray-200 min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-white w-64 p-4 h-screen transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } absolute lg:relative lg:translate-x-0 flex flex-col`}
      >
        <img
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 h-6 ml-auto cursor-pointer lg:hidden"
        />
        <div className="flex flex-col p-3 pl-5 pb-6">
          <h2
            onClick={() => navigate("/")}
            className="hover:text-sky-950 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-900 cursor-pointer"
          >
            Wallet
          </h2>
        </div>
        <nav className="space-y-4 p-2">
          {[
            { to: "/dashboard", icon: "fas fa-home", label: "Dashboard" },
            { to: "/send-money", icon: "fas fa-wallet", label: "Send Money" },
            { to: "/setting", icon: "fas fa-cog", label: "Setting" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center space-x-4 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400 p-3 rounded-md"
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div className="flex gap-5">
            <img
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              src={assets.menu_icon}
              alt="Menu"
              className="w-6 h-6 ml-auto cursor-pointer lg:hidden"
            />
            <p className="text-xl font-semibold">Send Money</p>
          </div>

          <div className="relative flex items-center space-x-4">
            {/* Notification Icon */}
            <button onClick={() => setIsNotification(!isNotification)} className="relative text-gray-600 hover:text-gray-800">
              <i className="fa-solid fa-bell text-xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Message Icon */}
            <button onClick={() => setIsMessage(!isMessage)} className="relative text-gray-600 hover:text-gray-800">
              <i className="fa-solid fa-message text-xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Profile Section */}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2"
            >
              <img
                src={assets.imgIn}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-36 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {[
                  { to: "/my-profile", label: "My Profile" },
                  { to: "/login", label: "Sign Out" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}



             {isMessage && (
              <div className="absolute right-10 mt-[250px] w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              {[
                { name: "Admin" , message : "Hello I am an Admin"},
                { name: "Admin" , message : "Hello I am a Admin" },
                { name: "Admin" , message : "Hello I am a Admin" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                >
                  <h3 className="font-semibold text-green-900">{item.name}</h3>
                  <p className="text-sm">&quot;{item.message}&quot;</p>
                </Link>
              ))}
            </div>
            )}




              {isNotification && (

              <div className="absolute right-20 mt-[260px] w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {[
                  { title: "New Balance" , message : "Balance has add to your account" },
                  { title: "New Balance" , message : "Balance has remove to your account" },
                  { title: "Update" , message : "Update the hole System" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.message}</p>
                  </Link>
                ))}
              </div>
            )}



          </div>
        </header>

        <div className="p-6 flex justify-center items-center min-h-[80vh]">
          <form onClick={onSubmitHandler} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-5 text-center">Send Money</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Form Account</label>
              <input
                value= {userData.email}
                type="email"
                disabled
                placeholder="Enter Receiver Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">To Account</label>
              <input
                type="email"
                required
                placeholder="Enter Receiver Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                placeholder="Enter amount"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <input
                type="text"
                required
                placeholder="Add a description (optional)"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button onClick={() => onSubmit()} type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Money</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
