import { useSelector } from "react-redux";
import React from 'react'
import { getallPosts } from "../redux/slices/postSlice";

function PostList() {
 const posts = useSelector(getallPosts);
  return (
    <div className="bg-red-400">
      <h2>Posts</h2>
      {posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
      ))}
    </div>
  )
}

export default PostList
