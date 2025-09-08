import React, { useEffect, useState } from 'react'
import Service from '../utils/http.js'
const service = new Service();
const Profile = () => {
    const [user, setUser] =useState(null)
    const getProfileData = async () => {
        try {
            const res = await service.get("user/me");
            setUser(res);
            console.log(res);
        }catch(error){
            console.log("Error in fetching profile data", error);
        }
    }
    useEffect(()=>{
        getProfileData();
    },[])
  return (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?._id}</div>
      <div> <img src={user?.avatar} /> </div>
    </div>
  )
}

export default Profile
