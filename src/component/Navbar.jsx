
import React from 'react';
import {Link } from "react-router-dom";
 function Navbar() {
    return (
        <>
            <div className="blog__header">
                <div className="blog__header__tit">
                <Link to="/"> <h2>React Blog</h2></Link>
                </div>
                <div className="blog__header__menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">New Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;