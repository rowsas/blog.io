import React from "react";
import "./Post.css";
import algo from '../Asset/What-is-an-Algorithm-2.jpg'

const Post3 = () => {
    return (
        <div className="post" id="Algoritham">
            <img className="post-image" src={algo} alt="js" />
            <h2>Algoritham</h2>
            <p>A computer network is a set of computers sharing resources located on or provided by network nodes. Computers use common communication protocols over digital interconnections to communicate with each other. These interconnections are made up of telecommunication network technologies based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies.

            </p>
            <button type="button" >Read more...</button>
        </div>
    )
}


export default Post3;