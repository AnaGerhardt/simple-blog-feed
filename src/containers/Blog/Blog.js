import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/"></a>Home</li>
                            <li><a href="/new-post"></a>New Post</li>
                        </ul>
                    </nav>
                </header>
                
                <Route path="/" exact component={Posts} />

            </div>
        );
    }
}

export default Blog;