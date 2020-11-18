import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);
    
    
    return (    
        <>       
        <h3 className="mb-3 d-block">{category}</h3> 
        {loading && <p className="animate__animated animate__flash d-block">Cargando...</p>}
        <div className="mx-o d-flex flex-wrap" >
    
            <div className="card-columns mt-3">
          
                {
                    data.map(img => (<GifGridItem key={img.id} {...img}/>))
                }
             
             </div>
        </div>
        </>
    )
}
