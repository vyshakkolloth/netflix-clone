import React, { useEffect, useState } from 'react'
import "./banner.css"
import axios from '../../constants/axios'
import { API_KEY ,imageUrl} from '../../constants/constants'

const Banner = () => {
  const [movie, setmovie] = useState()
  useEffect(() => {
   
  
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
    // console.log(Response.data.results[0]);
    setmovie(Response.data.results[0] )
   })
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>

        <div className='content'>
            <h1 className='title'> {movie?movie.title:"hello"}</h1>
            <div className='banner_button'>
                <button className='button'> Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner