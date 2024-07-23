

import React from 'react';
import './BlogNav.css'; 

const BlogNav = () => {
  return (
    <nav className="blog-nav">
      <div className="logo">
        <h1>Blog</h1>
      </div>
      <ul className="navlinks">
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#datastructure">Data Structure</a></li>
        <li><a href="#Algoritham">Algoritham</a></li>
        <li><a href="#network">Network</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default BlogNav;

