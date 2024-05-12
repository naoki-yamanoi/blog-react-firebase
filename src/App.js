import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/createpost" element={<CreatePost></CreatePost>}></Route>
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth}></Login>}
        ></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
