const Person = ({
  title,
  category,
  type,
  city,
  state,
  companyName,
  email,
  created,
  onUpdate
}) => {
  return (
    <tr>
      <td >
        <div onClick={() => onUpdate()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
        </div>
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{type}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{companyName}</td>
      <td>{email}</td>
      <td>{new Date(created).toLocaleDateString()}</td>
    </tr>
  );
};

export default Person;
