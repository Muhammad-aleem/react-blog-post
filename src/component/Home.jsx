import PostList from "./PostList";
import useFetch from "./useFetch";


export default function Home() {
    const {Data ,padding, error} = useFetch(`http://localhost:3001/posts`);
    return (
        <>
        {padding && <div>Loading...</div>}
        {<div>{error}</div>}
        <PostList posts={Data}/>
        </>
    )
}
