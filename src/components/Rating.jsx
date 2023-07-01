import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className='rating'>
        <p>{rating >= 1 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i> }</p>
        <p>{rating >= 2 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}</p>
        <p>{rating >= 3 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}</p>
        <p>{rating >= 4 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}</p>
        <p>{rating >= 5 ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}</p>
    </div>
  )
}

export default Rating