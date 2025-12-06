import axios from "axios";

const SOCKET_URL = import.meta.env.VITE_SERVER_URL;

export const getAllRooms = async () => {
  try {
    const response = await axios.get(`${SOCKET_URL}/rooms`);

    return { data: response.data };
  } catch (error) {
    return { error: error.message || "Something went wrong!" };
  }
};
