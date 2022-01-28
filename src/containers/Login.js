import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png'
import { Link } from "react-router-dom";

export const DivLogin = styled.div`
display:flex;
flex-direction: column;
align-items:center;
/* justify-content: center; */
margin-top: 32px;
padding: 25px;
`
export const ImgLogo = styled.img`
width: 80px;
height: 80px;
min-width: 80px;
`

export const Inputs = styled.input`
background-color: white;
height: 30px;
width: 100%;
border-style: none;
color: black;

`
export const Label = styled.label`
float: left;
margin: 5px auto;
`
export const Button = styled.button`
background-color: #EF4565;
border-style: none;
width: 100px;
height: 30px;
float: right;
color: white;
`


function Login() {
// const userlocal = JSON.parse(localStorage.getItem('User'))
// const [user, setUser] = useState();




  return (
  <DivLogin>
      <ImgLogo src={Logo}></ImgLogo>
      <h1>Iniciar sesión<hr></hr></h1>
      
        <form>
            <Label>Correo electrónico</Label>
            <Inputs type="email" name="correo" id="correo" placeholder='Ingrese su correo electronico'></Inputs>
            <Label>Contraseña</Label>
            <Inputs type="password" name="contrasena" id="contrasena" placeholder='Contraseña'></Inputs>
           <br></br>
           <br></br>
            <Button>Ingresar</Button>
        </form>
        <br></br>
        <a>¿Se te olvido la contraseña?</a>
      <p>¿Aún no tienes una cuenta? <Link className="link" to="/CrearUsuario">Inscribirse</Link></p>
      

  </DivLogin>
  );
}

export default Login;
