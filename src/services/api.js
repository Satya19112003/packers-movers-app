import axios from "axios";

const API_URL =
  "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details";

export const getMoves = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};