import {useState} from 'react';
import { useHistory } from "react-router-dom";

 const Create =() => {
   const [title , setTitle] = useState('');
   const [details , setdetails] = useState('');
   const [isPassing , setPassing] = useState(false);
   let history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    const post = {title , details};
    setPassing(true);
    setTimeout(() => {
    fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }).then(() => {
            console.log('New post Added');
            setPassing(false);
            history.push("/");
        })
    }, 1000);

    }
    return (
        <div>
            <h1>create</h1>
            <div className="crt__post">
                <form onSubmit={handleSubmit}>
                    <label className="">Post Title</label>
                    <input
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="">Post Details</label>
                    <textarea 
                    value={details}
                    onChange={(e) => setdetails(e.target.value)}
                    required></textarea>
                    {!isPassing && <button className="">Create</button>}
                    {isPassing && <button disabled>Adding Post...</button>}
                </form>
            </div>
        </div>
    )
}
export default Create;