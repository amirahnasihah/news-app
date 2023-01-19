import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //   Authorization: `Bearer YOUR_API_KEY`,
  // },
});

export const getData = async () => {
  try {
    const response = await api.get("/users/1/todos");
    return response.data;
  } catch (error) {
    throw error;
  }
};
