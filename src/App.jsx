import React from 'react'
import { Route,BrowserRouter, Router, Routes, NavLink } from "react-router-dom"
import UserList from "./component/UserList"
import { UserProvider } from "./Context/UserContext";
import UpdateUser from './component/UpdateUser';
import Navbar from './component/Navbar';
import UserList_two from './component/UserList_two';
const App = () => {
  return (
    <div>
        <UserProvider>
        <BrowserRouter basename='/User-Management-TODO-React'>
      <Navbar/>
      {/* <UserList_two/> */}
            <Routes>
                <Route path='/' element={<UserList/> }/> 
                <Route path='/UserAdd' element={<UpdateUser/> }/>
            </Routes>
        </BrowserRouter>
        </UserProvider>
    </div>
  )
}

export default App