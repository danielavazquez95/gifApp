import React from 'react'


export const Footer = () => {
    return (
        <div className="footer">
            <footer className=" bg-dark py-4">
            <div className="container">

            <div className="row">
                <div className="col text-center">
                    <h5 className="text-white d-inline">Creado y diseñado por Daniela Vazquez - ©2020</h5> 
                    <br/>
                    <label className="text-white d-inline text-secondary"> Buenos Aires - Argentina </label>                                                   
                    <hr className="w-50"/>
                </div>
            </div>
            
            <div className="row">
                <div className="col text-center">

                    <a
                        className="nav-item nav-link d-inline text-white" 
                        href="https://www.facebook.com/danielavazquez87"
                        target="_BLANK"
                        rel="noreferrer" 
                    >
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a 
                        className="nav-item nav-link d-inline text-white" 
                        href="https://twitter.com/DanielaaVazquez"
                        target="_BLANK"
                        rel="noreferrer" 
                    >
                         <i className="fab fa-twitter"></i>
                    </a>

                     <a 
                        className="nav-item nav-link d-inline text-white" 
                        href="https://www.instagram.com/danielaavazquez"
                        target="_BLANK"
                        rel="noreferrer" 
                    >
                         <i className="fab fa-instagram"></i>
                    </a>

                </div>
                    

            </div>
            </div>      
            </footer>
        </div>
    )
}