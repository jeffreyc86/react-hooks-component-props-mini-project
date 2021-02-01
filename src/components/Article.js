import React from "react";

const Article = ({title, date="January 1, 1970", preview, minutes}) => {

    function time(minutes){
        if (minutes < 30){
            const num = Math.ceil(minutes/5)
            const coffee = "☕️"
            return `${coffee.repeat(num)} ${minutes} read`
        } else {
            const num = Math.ceil(minutes/10)
            const bento = "🍱"
            return `${bento.repeat(num)} ${minutes} read`
        }
    }

    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{time(minutes)}</p>
        </article>
    )
}

export default Article