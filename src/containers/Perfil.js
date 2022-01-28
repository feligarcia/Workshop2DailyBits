import React from 'react';
import ListCategorias from './ListCategorias';
import styled from 'styled-components';
import imgprueba from '../assets/images/Logo.png'
import axios from 'axios';
import { url } from '../helpers/url';
import Navinferior from '../components/Navinferior';


export const DivUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
    margin-top: 32px;
    padding: 25px;
    `
    export const ImgUser = styled.img`
    width: 100px;
    height: 100px;
    min-width: 100px;
    border-radius:50px;
    
    `

export const H2Sesion = styled.h2`
color: #EF4565;
`
export const BtnDelete = styled.button`
color: white;
background-color: #581845;
border-style: none;
height: 20px;
`



function Perfil() {
    const getLocalStorage = JSON.parse(localStorage.getItem('User')) || []
    const {imagen, name, email, id} = getLocalStorage
    // console.log(imgPerfil)

    const borrarUsuario = (id) => {
        axios.delete(url+id)
        .then(response => {
            console.log('Usuario' + id + email + 'Eliminado de la app')
            localStorage.clear()
        })
       .catch(error => {
           console.log(error);
           
       })
    }
const cerrarSesion =()=>{
    localStorage.clear()
    console.log('local borrado')
}

  return (<DivUser>
      <h2>Perfil</h2>
      <ImgUser src={imagen}></ImgUser>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <H2Sesion onClick={() => cerrarSesion()}>Cerrar Sesion</H2Sesion>
      <BtnDelete onClick={() => borrarUsuario(id)}>Eliminar usuario</BtnDelete>
    
    <Navinferior />
  </DivUser>);
}

export default Perfil;
