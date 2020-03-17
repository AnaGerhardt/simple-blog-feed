import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
const NewPost = React.lazy(() => import('./NewPost/NewPost'));


class Blog extends Component {


    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route 
                        path="/new-post" 
                        render={() => (
                            <Suspense fallback={<div>Loading...</div>}>
                                <NewPost />
                            </Suspense>
                        )} 
                    />
                    <Route path="/posts/" component={Posts} />
                    <Redirect from="/" to="/posts/" />
                </Switch>

            </div>
        );
    }
}

export default Blog;