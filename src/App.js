import { useEffect, useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import { getData } from "./components/getData";
// import axios from "axios";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const books = [
    {
      id: 1,
      title: "Northanger Abbey",
      author: "Austen, Jane",
      year_written: 1814,
      edition: "Penguin",
      price: 18.2,
    },
    {
      id: 2,
      title: "War and Peace",
      author: "Tolstoy, Leo",
      year_written: 1865,
      edition: "Penguin",
      price: 12.7,
    },
    {
      id: 3,
      title: "Anna Karenina",
      author: "Tolstoy, Leo",
      year_written: 1875,
      edition: "Penguin",
      price: 13.5,
    },
    {
      id: 4,
      title: "Mrs. Dalloway",
      author: "Woolf, Virginia",
      year_written: 1925,
      edition: "Harcourt Brace",
      price: 25,
    },
    {
      id: 5,
      title: "The Hours",
      author: "Cunnningham, Michael",
      year_written: 1999,
      edition: "Harcourt Brace",
      price: 12.35,
    },
    {
      id: 6,
      title: "Huckleberry Finn",
      author: "Twain, Mark",
      year_written: 1865,
      edition: "Penguin",
      price: 5.76,
    },
    {
      id: 7,
      title: "Bleak House",
      author: "Dickens, Charles",
      year_written: 1870,
      edition: "Random House",
      price: 5.75,
    },
    {
      id: 8,
      title: "Tom Sawyer",
      author: "Twain, Mark",
      year_written: 1862,
      edition: "Random House",
      price: 7.75,
    },
    {
      id: 9,
      title: "A Room of One's Own",
      author: "Woolf, Virginia",
      year_written: 1922,
      edition: "Penguin",
      price: 29,
    },
    {
      id: 10,
      title: "Harry Potter",
      author: "Rowling, J.K.",
      year_written: 2000,
      edition: "Harcourt Brace",
      price: 19.95,
    },
    {
      id: 11,
      title: "One Hundred Years of Solitude",
      author: "Marquez",
      year_written: 1967,
      edition: "Harper  Perennial",
      price: 14.0,
    },
    {
      id: 12,
      title: "Hamlet, Prince of Denmark",
      author: "Shakespeare",
      year_written: 1603,
      edition: "Signet  Classics",
      price: 7.95,
    },
    {
      id: 13,
      title: "Lord of the Rings",
      author: "Tolkien, J.R.",
      year_written: 1937,
      edition: "Penguin",
      price: 27.45,
    },
  ];

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);

    if (searchTerm === "") {
      // setData([]);
      return;
    }
  };

  // useEffect(() => {
  //   getData().then((response) => setData(response));
  // }, []);

  const filterEndpoints = books.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm?.toLowerCase() || "") ||
      item.author.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );
  });

  return (
    <div className="App mx-12 backdrop-opacity-10 backdrop-invert bg-white/30 ">
      <h2 class="p-8 mt-5 text-center  ">
        Start searching to see some magic happen!🎆
      </h2>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      {books.length === 0 ? (
        <p>No keyword found for the given search term.</p>
      ) : (
        <List endpoints={filterEndpoints} />
      )}
    </div>
  );
}
