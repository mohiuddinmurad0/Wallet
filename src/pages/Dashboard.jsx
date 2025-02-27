import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import image from "../assets/finance-icon.png";
import { BillContext } from "../Context/BillContext";

const Dashboard = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isMessage, setIsMessage] = useState(false);



  const { token, setToken } = useContext(BillContext);





  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };



  const navigate = useNavigate();



  {
    isProfileOpen && (
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
    );
  }



  const transactions = [
    {
      id: 1,
      type: "Received Money",
      amount: "৳ 5,000",
      email: "example@gmail.com",
      description: "Payment Received",
      date: "20 Feb 25, 10:22 AM",
    },
    {
      id: 2,
      type: "Send Money",
      amount: "৳ 1,000",
      email: "example@gmail.com",
      description: "Bill Payment",
      date: "20 Feb 25, 10:19 AM",
    },
    {
      id: 3,
      type: "Received Money",
      amount: "৳ 1,000",
      email: "example@gmail.com",
      description: "Payment Received",
      date: "20 Feb 25, 10:19 AM",
    },
    {
      id: 4,
      type: "Received Money",
      amount: "৳ 500",
      email: "example@gmail.com",
      description: "Payment Received",
      date: "20 Feb 25, 10:19 AM",
    },
  ];




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
            <p className="text-xl font-semibold">Dashboard</p>
          </div>

          <div className="relative flex items-center space-x-4">
            {/* Notification Icon */}
            <button
              onClick={() => setIsNotification(!isNotification)}
              className="relative text-gray-600 hover:text-gray-800"
            >
              <i className="fa-solid fa-bell text-xl"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>

            {/* Message Icon */}
            <button
              onClick={() => setIsMessage(!isMessage)}
              className="relative text-gray-600 hover:text-gray-800"
            >
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
                  { to: "/login", label: "Sign Out", onClick: logout },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {isMessage && (
              <div className="absolute right-10 mt-[250px] w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {[
                  { name: "Admin", message: "Hello I am an Admin" },
                  { name: "Admin", message: "Hello I am a Admin" },
                  { name: "Admin", message: "Hello I am a Admin" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r from-sky-600 to-cyan-400"
                  >
                    <h3 className="font-semibold text-green-900">
                      {item.name}
                    </h3>
                    <p className="text-sm">&quot;{item.message}&quot;</p>
                  </Link>
                ))}
              </div>
            )}

            {isNotification && (
              <div className="absolute right-20 mt-[260px] w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                {[
                  {
                    title: "New Balance",
                    message: "Balance has add to your account",
                  },
                  {
                    title: "New Balance",
                    message: "Balance has remove to your account",
                  },
                  { title: "Update", message: "Update the hole System" },
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






        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                title: "Total Balance",
                amount: "৳ 5,500",
                color: "bg-blue-500",
              },
              {
                title: "Total Send-Money",
                amount: "৳ 1,000",
                color: "bg-sky-400",
              },
              {
                title: "Total Receive-Money",
                amount: "৳ 6,500",
                color: "bg-purple-500",
              },
              {
                title: "Net Profit Margin",
                amount: "৳ 179,000",
                color: "bg-green-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 ${item.color} text-white rounded-lg shadow-md`}
              >
                <img className="w-12 pb-3" src={image} alt="Finance Icon" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-2xl font-bold">{item.amount}</p>
              </div>
            ))}
          </div>

          {/* Transaction Table */}
          <h2 className="text-xl font-bold mb-4">Transaction History</h2>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  {["ID", "Type", "Amount", "Email", "Description", "Date"].map(
                    (header, index) => (
                      <th key={index} className="p-2 border">
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="text-gray-700">
                    <td className="p-2 border">{txn.id}</td>
                    <td
                      className={`p-2 border ${
                        txn.type === "Send Money"
                          ? "text-rose-500 font-semibold"
                          : "text-green-500 font-semibold"
                      }`}
                    >
                      {txn.type}
                    </td>
                    <td className="p-2 border">{txn.amount}</td>
                    <td className="p-2 border">{txn.email}</td>
                    <td className="p-2 border">{txn.description}</td>
                    <td className="p-2 border">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Dashboard;
