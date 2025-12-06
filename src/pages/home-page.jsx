import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRooms } from "../lib/room-api";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !room) return;
    navigate(`/chat?room=${room}`, { state: { username } });
  };

  useEffect(() => {
    (async () => {
      const result = await getAllRooms();

      if (result?.error) {
        setErrorMessage(result.error);
      } else {
        setRooms(result?.data);
      }
    })();
  }, []);

  console.log(rooms);

  return (
    <div className="h-screen w-full bg-[#0f111a] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1a1d29] p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Join a Chat Room
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 text-sm">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg bg-[#0f111a] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Select Room</label>
            <select
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg bg-[#0f111a] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" disabled>
                Choose a room
              </option>

              {rooms &&
                rooms?.length > 0 &&
                rooms?.map((room) => {
                  return (
                    <option key={room?._id} value={room?._id}>
                      {room?.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg text-white font-semibold"
          >
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
