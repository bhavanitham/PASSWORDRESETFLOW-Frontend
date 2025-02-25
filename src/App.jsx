import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Forget from "./components/Forget";
import ResetPassword from "./components/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgotpassword" element={<Forget/>} />
          <Route path="/resetpassword/:email" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
