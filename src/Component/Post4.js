import React from "react";
import "./Post.css";
import net from '../Asset/net.jpeg'

const Post4 = () => {
    return (
        <div className="post" id="network">
            <img className="post-image" src={net} alt="js" />
            <h2>Network</h2>
            <p>
            </p>
            <button type="button" >Read more...</button>
        </div>
    )
}


export default Post4;