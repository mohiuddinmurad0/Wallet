import { useState, useEffect, useContext } from "react";
import { BillContext } from "../Context/BillContext";

const MyProfile = () => {

  const { userData } = useContext(BillContext)


  console.log(userData)

  return userData && (

    <div>

      <h1>User Profile</h1>

      <p>Name: {userData.data.name}</p>
      <p>Email: {userData.data.email}</p>
      <p>Balance: {userData.data.balance}</p>
        

    
    </div>
  );
};

export default MyProfile;
