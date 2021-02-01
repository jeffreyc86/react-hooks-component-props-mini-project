import React from "react";
import Article from "./Article"

const ArticleList = (props) => {

    const list = props.posts.map(post => {
        return (<Article 
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />)
    })

    return (
        <main>
            {list}
        </main>
    )
}

export default ArticleList