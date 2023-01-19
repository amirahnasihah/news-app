import { useEffect, useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import { getData } from "./components/getData";
// import axios from "axios";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);

    if (searchTerm === "") {
      setData([]);
      return;
    }
  };

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  const filterEndpoints = data.filter((item) => {
    return item.title
      .toLowerCase()
      .includes(searchTerm?.toLowerCase().indexOf(searchTerm) || "");
  });

  return (
    <div className="App">
      <h2 class="p-8 mt-5 text-center ">
        Start searching to see some magic happen!🎆
      </h2>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      {data.length === 0 ? (
        <p>No keyword found for the given search term.</p>
      ) : (
        <List endpoints={filterEndpoints} />
      )}
    </div>
  );
}
