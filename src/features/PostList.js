import { useSelector } from "react-redux";
import React from 'react'
import { getallPosts } from "../redux/slices/postSlice";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import ReactionButtons from "../components/Reaction";

function PostList() {
 const posts = useSelector(getallPosts);
 const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
  return (
    <div>
      <h2>Posts</h2>
      {orderedPosts.map(post => (
        <article key={post.id} className="bg-gray-100 mt-2 rounded-sm p-4">
            <h3 className="text-lg">{post.title}</h3>
            <PostAuthor userId={post.userId} />
            <p>{post.content.substring(0,100)}</p>
            <p>Author: {post.userId}</p>
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />
        </article>
      ))}
    </div>
  )
}

export default PostList
