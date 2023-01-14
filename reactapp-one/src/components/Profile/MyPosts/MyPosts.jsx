import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts =() =>{
  return <div>
        <h3> My posts</h3>
          <div><h4>New post</h4>
           <input type='text'></input>
           </div>


        <div className={s.posts}>
          <Post messages='How are you?'/>
          <Post likes='0'/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        
        
        
        
        </div>


} 
    export default MyPosts;
