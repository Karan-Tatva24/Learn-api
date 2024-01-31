import React from "react";
import { useQuery } from "@tanstack/react-query";

const Query = () => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(
        (res) => res.json()
      ),
    queryKey: ["comments"],
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Failed to load...</h2>;
  }

  return (
    <div>
      <h1>Email address of users</h1>
      <ol>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.email}</li>;
        })}
      </ol>
    </div>
  );
};

export default Query;
