import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import SendMoney from "./pages/SendMoney";
import Setting from "./pages/Setting";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="send-money" element={<SendMoney />}/>
        <Route path="/setting" element={<Setting />}/>

      </Routes>

    </div>
  );
};

export default App;
