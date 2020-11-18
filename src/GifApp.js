import React, { useState } from 'react';
import { Footer } from './Footer';
import { GifGrid } from './GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const [value, setValue] = useState('');
    
    const handleInputChange = (e) => {
        setValue(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim().length > 2){
            setCategories([value, ...categories])
            setValue('')
        }
        
    };

    const handleClick = () => {
        setCategories([])
    }

    return (
        <div className="page-container">
            <div className="container content-wrap">
            <div className="row mt-5 d-flex justify-content-center align-items-center">
                <div className="col-12 box ">
                    <h1 className="animate__animated animate__bounceInDown text-center">GifApp</h1>
                        <form className="text-center" onSubmit={handleSubmit}>
                            <input type="text" className="input-text d-none d-md-inline-block mt-3 " name="searchText" value={value} onChange={handleInputChange} placeholder="" autoComplete="off"/>
                            <input type="text" className="input-text1  d-block d-md-none mt-3" name="searchText" value={value} onChange={handleInputChange} placeholder="" autoComplete="off"/>
                            <input type="submit" className="input-submit d-none d-md-inline-block my-3"  name="" value="Buscar"/>
                            <input type="submit" className=" input-submit1 d-inline-block d-md-none my-3"  name="" value="Buscar"/>
                        </form>

                       
                </div>
            </div>
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-9">
                    {categories.length >= 1 && <button onClick={handleClick} className=" mb-3 btn btn-danger btn-lg btn-block" >Limpiar historial</button>}
                </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center align-items-center">
                <div className="col-9 box " >
                
                    <ol className="mx-0 px-0">
                        {
                            categories.map(category => <GifGrid key={category} category={category} />)
                        }
                    </ol>
                </div>
                
            </div>
         </div>
         <Footer/>   
        </div>
    )

        
        
}
