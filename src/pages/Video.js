import React, {useRef, useState} from 'react';
import Videofooter from './components/footer/Videofooter';
import Videosidebar from './components/sidebar/Videosidebar';
import "./Video.css";

function Video({likes,messages,shares, name, description, music, url}) {
  const videoRef = useRef(null) ;
  const [play, setPlay] = useState(false) ;

  function handdleStart() {        
    if (play) {
        videoRef.current.play();
        setPlay(false)
    } else {
        videoRef.current.pause();
        setPlay(true)
    }
        
  }        


  return (
    <div className='Video'>
        <video 
            className='videoplayer'
            ref = {videoRef}
            onClick = {handdleStart}
            loop
            src = {url}>
        </video>
        <Videosidebar 
        likes = {likes}
        messages= {messages}
        shares= {shares}
        />
        <Videofooter
        name = {name}
        description = {description}
        music = {music}/>
    </div>
  )

}

export default Video