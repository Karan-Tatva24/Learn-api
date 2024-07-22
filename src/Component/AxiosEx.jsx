import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosEx = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <p key={users.id}>{users.title}</p>
    </div>
  );
};

export default AxiosEx;
