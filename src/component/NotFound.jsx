import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>Sorry</h1>
            <p>That page cannot found !</p>
            <Link to="/">Go Back To Home</Link>
        </div>
    )
}
