export default function List({ endpoints }) {
  const { id, title, completed } = endpoints;
  return (
    <div>
      {endpoints.map((e) => (
        <div key={id}>
          <h3>{title}</h3>
          {/* <a
            href="https://jsonplaceholder.typicode.com/users/1/todos"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a> */}
          <p>
            {title}
            {completed}
          </p>
        </div>
      ))}
    </div>
  );
}

// list === displayresults
