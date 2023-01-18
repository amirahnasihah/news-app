import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import axios from "axios";
// app === home

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [todos, setTodos] = useState([]);

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users/1/todos",
  };

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);

    if (searchTerm === "") {
      setTodos([]);
      return;
    }

    try {
      const response = await axios.request(options);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterEndpoints = todos.filter((item) => {
    return item.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase().indexOf(searchTerm) || "");
  });

  return (
    <div>
      <h2 class="p-8 mt-5 text-center">
        Start searching to see some magic happen!🎆
      </h2>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      {todos.length === 0 ? (
        <p>No movies found for the given search term.</p>
      ) : (
        <List endpoints={filterEndpoints} />
      )}
    </div>
  );
}
