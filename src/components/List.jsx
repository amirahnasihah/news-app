function List({ articles }) {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.description}
          </a>
        </div>
      ))}
    </div>
  );
}

export default List;
