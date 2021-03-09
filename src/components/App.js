import React, { Component } from 'react'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts();
}
render() {
    //connect this componet wwith store
    //const posts = get post from data
    const posts = this.props.postsOfComponent
    console.log(posts)
    return (
        posts.map((post) => {
            return(
                <div>
                    <p />Title:{post.title}
                    <p />Body:{post.body}

                </div>
            )
        })
    )
}
}
const mapStateToProps = (state) => {
return {
    postsOfComponent: state.posts
}
}

export default connect(mapStateToProps, { fetchPosts })(App);