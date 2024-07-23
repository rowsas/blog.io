import React from "react";
import "./Post.css";
import Data from '../Asset/Data Structures.png'

const Post2 = () => {
    return (
        <div className="post">
            <img className="post-image" src={Data} alt="js" />
            <h2>Datastruture</h2>
            <p> In computer science, a data structure is a data organization, and storage format that is usually chosen for efficient access to data.[1][2][3] More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data,[4] i.e., it is an algebraic structure about data.

            </p>
            <button type="button" >Read more...</button>
        </div>
    )
}


export default Post2;