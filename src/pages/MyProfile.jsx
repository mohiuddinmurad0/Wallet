import { useState, useEffect } from "react";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData?.name || "Not available"}</p>
      <p>Email: {userData?.email || "Not available"}</p>
      <p>Phone: {userData?.phone || "Not available"}</p>
    </div>
  );
};

export default MyProfile;
