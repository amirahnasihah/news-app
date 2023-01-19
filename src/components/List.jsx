export default function List({ endpoints }) {
  const { id, title, completed } = endpoints;
  return (
    <div>
      {endpoints.map((e) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>
            {title}
            {completed}
          </p>
        </div>
      ))}
    </div>
  );
}

// list === displayresults - what to display or show on browser (title, description etc...)
