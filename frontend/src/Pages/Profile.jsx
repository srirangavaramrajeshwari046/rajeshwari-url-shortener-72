import React, { useEffect, useState } from 'react';
import Service from '../utils/http.js';

const service = new Service();

const Profile = () => {
  const [user, setUser] = useState(null);

  const getProfileData = async () => {
    try {
      const res = await service.get("user/me");
      setUser(res?.data);
      console.log(res);
    } catch (error) {
      console.log("Error in fetching profile data", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>
        
        {user ? (
          <>
            <div className="flex justify-center mb-4">
              <img 
                src={user?.avatar || "https://via.placeholder.com/100"} 
                alt="User Avatar" 
                className="w-24 h-24 rounded-full border-4 border-purple-400 shadow-md"
              />
            </div>
            <div className="text-lg font-semibold text-gray-700 mb-2">{user?.name}</div>
            <div className="text-sm text-gray-500 mb-2">{user?.email}</div>
            <div className="text-xs text-gray-400 mb-4">ID: {user?._id}</div>

            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300 shadow-md">
              Edit Profile
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
