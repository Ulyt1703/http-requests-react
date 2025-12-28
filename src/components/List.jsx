import React from "react"


let List = ({stories}) => (
    <ul>
        {stories.map(({id, url, title}) => (
            <li key={id}>
                <a href={url}>{title}</a>
            </li>
        ))}
    </ul>
)
export default List