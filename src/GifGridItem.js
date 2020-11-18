import React from 'react'

export const GifGridItem = ({title, url} ) => {

    
    return (
        <div className="card nimate__animated animate__bounce">
          <img className="card-img-top" src={url} alt={title}/>
  
        </div>
    )
}
 