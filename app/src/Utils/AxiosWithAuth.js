import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "localhost:5000/api",
    header: {
      Authorization: token
    }
  });
};
