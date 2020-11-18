import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);
    
    
    return (  
        <div className="mx-o d-flex flex-wrap" >
        <h3 className="mb-3">{category}</h3> 
        {loading && <p className="animate__animated animate__flash">Cargando...</p>}
        <div className="card-columns mt-3">
          
                {
                    data.map(img => (<GifGridItem key={img.id} {...img}/>))
                }
             
        </div>

        </div>
    )
}
