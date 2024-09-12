import { useState, useEffect } from "react";
import User from "./User";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://604052bdf34cf600173c7e31.mockapi.io/api/v1/posts"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setUsers(data);
  };

  const badUpdate = async () => {
    setUsers(users);
    setUsers(undefined);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ... existing code ...

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.responsiveTable}>
          <thead>
            <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
              <th>Type</th>
              <th>City</th>
              <th>State</th>
              <th>Company</th>
              <th>Email</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userJson, index) => (
              <User
                key={index}
                title={userJson.title}
                category={userJson.category}
                type={userJson.type}
                city={userJson.city}
                state={userJson.state}
                description={userJson.description}
                howToApply={userJson.howToApply}
                companyName={userJson.companyName}
                companyStatement={userJson.companyStatement}
                logo={userJson.logo}
                companyWebsite={userJson.companyWebsite}
                email={userJson.email}
                companyDescription={userJson.companyDescription}
                created={userJson.created}
                onUpdate={badUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // ... existing code ...
};

export default Users;
