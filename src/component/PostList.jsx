import React from 'react';
import {Link} from 'react-router-dom';
export default function PostList(props) {
    const  posts  = props.posts;

    const handleDelete = (id) => {
        const checkDelete = window.confirm('You Realy Want To Delese this Post');
        if ( checkDelete === true) {
            fetch('http://localhost:3001/posts/' + id, {
            method: 'DELETE'
        }).then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        })

        }
    }

    return (
        <>
            <div className="blog__list">
                {
                     posts.map((data) => {
                        return(
                            
                                <div className="blog__list__content" key={data.id}>
                                    <Link to={`/posts/${data.id}`}>
                                        <div className="blog__list__tit">
                                            <h2>{data.title}</h2>
                                        </div>
                                    </Link>    
                                        <div className="blog__list__para">
                                            <p>{data.details}</p>
                                        </div>
                                        <div className="blog__list__btn">
                                            <button className="" onClick={() => handleDelete(data.id)}>Delete</button>
                                        </div>
                                  
                                </div>
                         
                        )
                      })
                }
                </div>
            
        </>
    )
}
