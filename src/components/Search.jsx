export default function Search({ searchTerm, handleSearch }) {
  return (
    <div className="App">
      Search <span>🔍</span>
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}
