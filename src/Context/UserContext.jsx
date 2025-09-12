import React, { createContext, useEffect, useState } from "react";
import { userdata } from "../Data/user";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const [editUser, setEditUser] = useState(null);
  useEffect(()=>{
    setUser(userdata)
  },[])
  
   

  return (
    <UserContext.Provider value={{ user, setUser,editUser,setEditUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
