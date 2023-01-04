export default function Search({ searchTerm, handleSearch }) {
  return (
    <div className="App">
      Search
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}
