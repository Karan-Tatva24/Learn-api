import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const AxiosPost = () => {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/1`)
      .then((res) => {
        setPost(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const createPost = () => {
    axios
      .post(baseURL, {
        title: "Hello Karan!",
        body: "Hi how are you Karan",
      })
      .then((res) => {
        setPost(res);
      });
  };

  const updatePost = () => {
    axios
      .put(`${baseURL}/1`, {
        title: "Hi, Karan",
        body: "What are you doing ?",
      })
      .then((res) => {
        setPost(res);
      });
  };

  const deletePost = () => {
    axios.delete(`${baseURL}/1`).then((res) => {
      alert("Post deleted!");
      setPost(res);
    });
  };

  if (!post) return <h1>Sorry :(</h1>;
  if (error) return <h1>Error : {error.message}</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create New Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
};

export default AxiosPost;
