import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
import Post from '../../../components/Post/Post'
import axios from '../../../axios'
import './posts.css'

class Posts extends Component {

    state = {
        posts: [],
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
                console.log(error)
                //this.setState({error: true});
            })
    }

    postClicked = (id) => {
        this.props.history.push('/posts/' + id)
    }

    render() {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                        <Post
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.postClicked(post.id)}
                        />
                )
            });
        }

        return (
            <>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </>
        );
    }
} 

export default Posts