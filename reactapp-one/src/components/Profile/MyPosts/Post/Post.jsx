import React from 'react';
import s from './Post.module.css';


const Post =(props) =>{
  return <div className={s.item}>
        <img src='https://e7.pngegg.com/pngimages/911/1005/png-clipart-ninja-computer-icons-avatar-samurai-ninja-cartoon-desktop-wallpaper.png'/>

            
              Post1
              {props.messages}
              {props.likes}
            
        </div>
        
        
        
        


} 
    export default Post;
