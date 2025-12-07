import { useState, useRef, useEffect } from "react";
import {
  ArrowBigLeft,
  ChevronLeftIcon,
  ChevronRightIcon,
  SendHorizonal,
} from "lucide-react";
import SenderMessageBubble from "./SenderMessageBubble";
import ReceiverMessageBubble from "./ReceiverMessageBubble";

const ChatUi = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  // automatic scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="bg-slate-950 h-screen w-full flex overflow-hidden">
      {/* COLLAPSIBLE SIDEBAR */}
      <aside
        className={`border-r border-gray-700 bg-slate-950 flex flex-col transition-all duration-300
      ${isCollapsed ? "w-[70px]" : "w-[300px]"} `}
      >
        {/* Sidebar Header */}
        <div className="flex mt-4 items-center justify-between px-4 pb-4">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold text-gray-300">
              Active Users
            </h2>
          )}

          {/* Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-400 cursor-pointer hover:text-white transition"
          >
            {isCollapsed ? (
              <ChevronRightIcon width={22} height={22} />
            ) : (
              <ChevronLeftIcon width={22} height={22} />
            )}
          </button>
        </div>

        {/* Users LIST */}

        <div className="overflow-y-auto flex-1 px-3 space-y-3 pb-20">
          <div
            className={`rounded-xl p-4 cursor-pointer transition border bg-white/5 hover:border-orange-400/40
                ${
                  isCollapsed
                    ? "flex items-center justify-center h-[60px]"
                    : "space-y-2"
                }
                `}
          >
            {/* Collapsed mode: show first letter only */}
            {isCollapsed ? (
              <span className="text-white text-lg font-bold">
                {"User One"[0]}
              </span>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">User One</p>
                </div>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* ---------- MAIN CHAT AREA ---------- */}
      <div className="flex-1 flex flex-col">
        {/* FIXED HEADER */}
        <div
          className={`bg-slate-950 border-b border-gray-700 px-6 py-4 fixed right-0 top-0 z-50 transition-all duration-300
        ${isCollapsed ? "left-[70px]" : "left-[300px]"}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="cursor-pointer w-10 h-10 bg-orange-500 rounded-full hover:bg-orange-300 flex items-center justify-center"
                onClick={() => window.history.back()}
              >
                <span className="text-white font-semibold">
                  {"Football"[0].toUpperCase()}
                  {"Football"[1].toUpperCase()}
                </span>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  {"Football Club"}
                </h2>
              </div>
            </div>

            <button className="text-gray-400 cursor-pointer hover:text-white">
              <ArrowBigLeft size={35} onClick={() => window.history.back()} />
            </button>
          </div>
        </div>

        {/* CHAT SCROLL AREA */}
        <div
          className={`flex-1 overflow-y-auto px-10 pt-[150px] pb-[120px] space-y-6 transition-all duration-300
        ${isCollapsed ? "ml-0" : ""}`}
        >
          <ReceiverMessageBubble
            message="Hello There"
            id="1234"
            sender="User One"
            createdAt={new Date()}
          />
          <SenderMessageBubble
            message="Hi"
            id="1234"
            sender="User Two"
            createdAt={new Date()}
          />

          <div ref={messagesEndRef} />
        </div>

        {/* FIXED MESSAGE INPUT */}
        <div
          className={`bg-slate-950 border-t border-gray-700 px-6 py-4 fixed bottom-0 right-0 transition-all duration-300
        ${isCollapsed ? "left-[70px]" : "left-[300px]"}`}
        >
          <form className="flex space-x-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 rounded-full bg-slate-900 text-white border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-orange-500 cursor-pointer hover:bg-orange-300 text-white px-3 py-3 rounded-full transition"
            >
              <SendHorizonal size={30} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
