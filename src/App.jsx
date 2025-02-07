import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Friends from "./Components/friends";
import Home from "./Components/home";
import Login from "./Components/login";
import Terms from "./Components/terms";
import Explore from "./Components/explore";
import SignUp from "./Components/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
