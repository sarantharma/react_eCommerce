import React from 'react'
import Rating from "@mui/material/Rating"
import "./Ratings.css"

const Ratings = ({value, text}) => {
  return (
    <div className='rating'>
        <Rating name="read-only" precision={0.5} value={value} readOnly />
        {text && text}
    </div>
  )
}

export default Ratings