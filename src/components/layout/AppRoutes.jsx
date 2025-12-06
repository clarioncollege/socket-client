import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home-page";
import ChatPage from "../../pages/chat-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
};

export default AppRoutes;
