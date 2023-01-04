import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import axios from "axios";

export default function App() {
  const [searchTerm, setSearchTerm] = useState(" ");
  const [articless, setArticles] = useState([]);
  const API_KEY = "6cab899d924340be885932646f30a36c";
  // const API_KEY = "6cab899d924340be885932646f30a36c";

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    let q = searchTerm === "" ? null : searchTerm;
    if (searchTerm !== "") {
      const url = `https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    }
  };

  const filterArticles = articless.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm?.toLowerCase() || "");
  });

  return (
    <div className="App">
      <h2>Start searching to see some magic happen!🎆</h2>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List articles={filterArticles} />
    </div>
  );
}
