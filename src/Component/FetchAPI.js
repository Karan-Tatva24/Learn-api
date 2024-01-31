import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ol>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default FetchAPI;
