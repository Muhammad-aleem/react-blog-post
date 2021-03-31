import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

 const  PostDetail = () => {
    const { id } = useParams();
    const {Data:post ,padding, error} = useFetch(`http://localhost:3001/posts/`+id);
    return (
        <div>
               {padding && <div>Loading...</div>}
               {<div>{error}</div>}
               {post && (
                   <article className="">
                       <h2>{post.title}</h2>
                       <p>{post.details}</p>
                   </article>
               )}
        </div>
    )
}
export default PostDetail ;