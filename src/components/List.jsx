export default function List({ endpoints }) {
  return (
    <div className="text-white font-bold text-left px-12 pb-10">
      {endpoints.map(({ id, author, title }) => (
        <div key={id}>
          <h3>
            {id}. {author}
          </h3>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
}

// list === displayresults - what to display or show on browser (title, description etc...)
