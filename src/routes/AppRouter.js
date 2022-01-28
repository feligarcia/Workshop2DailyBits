import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CrearUsuario from '../containers/CrearUsuario';
import Login from '../containers/Login';
import { Link } from 'react-router-dom';
import Inicio from '../containers/Inicio';
import Perfil from '../containers/Perfil';
import ListCategorias from '../containers/ListCategorias';
import Listatemas from '../components/Listatemas'



export const AppRouter = () => {
    return (
        <div>
            <Router>
                <nav>
                <Link className="link" to="/">Inicio |</Link>
                <Link className="link" to="/Login">Login |</Link>
                <Link className="link" to="/CrearUsuario">Crear Usuario |</Link>
                <Link className="link" to="/Perfil">Perfil |</Link>
                <Link className="link" to="/Categorias">Categorias |</Link>
               
                
                </nav>
                <Routes>
                    <Route exact path="/Login" element={<Login/>}/>
                    <Route exact path="/CrearUsuario" element={<CrearUsuario/>}/>
                    <Route exact path="/" element={<Inicio/>}/>
                    <Route exact path="/Perfil" element={<Perfil/>}/>
                    <Route exact path="/Categorias" element={<ListCategorias/>}/>
                    

                    
                </Routes>
            </Router>
        </div>
    )
}
