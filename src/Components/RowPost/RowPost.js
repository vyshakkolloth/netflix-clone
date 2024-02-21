import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../constants/axios";
import YouTube from 'react-youtube';
import { API_KEY, imageUrl } from "../../constants/constants";



function RowPost({title,isSmall,url}) {
  const [movies, moviesset] = useState([]);
  const [urls, seturl] = useState('')

  useEffect(() => {
    axios.get(url).then((response) => {
        // console.log(response.data.results[0]);
        moviesset(response.data.results);
      })
      .catch((err) => {
        // alert("network error");
      });
  }, []);

  const teaserHandle=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>
    { 
      if(response.data.results.length!==0){
        seturl(response.data.results[0].key)
       
      }else{
        console.log("arraun is empty");
      }
      // console.log(response.data.results[0].key);
    })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((obj) => 
            <img onClick={()=>teaserHandle(obj.id )} className={isSmall?"smallPoster":"poster"} alt="poster" src={`${imageUrl+ obj.backdrop_path}`} />
        )}
      </div>
      {urls &&<YouTube videoId={urls} opts={opts} />}
    </div>
    
  );
}

export default RowPost;
