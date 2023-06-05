import React from "react";
import { Routes, Route } from "react-router-dom";
import FindPet from "./Pages/FindPet";
// import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import OnBoarding from "./Components/OnBoarding";
import ChatPage from "./Pages/Chat";
import TinderPage from "./Components/tinderCard";
import SingIn from "./Pages/SingIn";
import ChatComponent from "./Components/ChatComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/breedit" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Registration />} /> */}
      <Route path="/findPet" element={<FindPet />} />
      <Route path="/onboarding" element={<OnBoarding />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/tinderCard" element={<TinderPage />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/chatComponent" element={<ChatComponent />} />
    </Routes>
  );
};

export default App;
