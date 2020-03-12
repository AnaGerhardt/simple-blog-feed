import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post'
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'Max' }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    postClicked = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postClicked(post.id)}
                        />
            });
        }

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
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;