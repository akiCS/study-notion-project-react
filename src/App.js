import "./App.css";
import {Route , Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="w-[100vw] h-[100vh] bg-richblack-900 flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>

        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>

        <Route path="/login" element ={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>

        <Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>

        <Route path="/dashboard" element = {<PrivateRoute isLoggedIn={isLoggedIn}> <Dashboard/> </PrivateRoute>}></Route>

      </Routes>

    </div>
  )
}

export default App;
