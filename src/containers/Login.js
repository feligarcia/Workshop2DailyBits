import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/Logo.png'
import { Link } from "react-router-dom";
import getData from '../components/getData';
import { url } from '../helpers/url';

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

const [user, setUser] = useState({
  email:'',
  password:''
});

const handleInputChange = ({ target }) => {
  setUser({
    ...user,
    [target.name]: target.value,
  });
  
};
const ingresarUsuario = async () => {
    const data = await getData(url)
    const registro = data.some(ele => (ele.email ==[user.email]) && (ele.password ==[user.password]))
    
    console.log(registro)
    // console.log(userlocal)
    if(registro){
      console.log('adentro')
      
      const tworeg = data.find(us => us.email === user.email)
      const {id, email, name, tiempoestudio, respcontest, respcorrec, respincoimagen } = tworeg
       
      localStorage.setItem('User',JSON.stringify(tworeg))
    
    }
    
    
}

const handleSubmitUser = (e) =>{
  e.preventDefault()
}



  return (
  <DivLogin>
      <ImgLogo src={Logo}></ImgLogo>
      <h1>Iniciar sesión<hr></hr></h1>
      
        <form onSubmit={handleSubmitUser}>
            <Label>Correo electrónico</Label>
            <Inputs type="email" name="email" id="correo" placeholder='Ingrese su correo electronico' onChange={handleInputChange}></Inputs>
            <Label>Contraseña</Label>
            <Inputs type="password" name="password" id="contrasena" placeholder='Contraseña' onChange={handleInputChange}></Inputs>
           <br></br>
           <br></br>
            <Button onClick={ingresarUsuario}>Ingresar</Button>
        </form>
        <br></br>
        <a>¿Se te olvido la contraseña?</a>
      <p>¿Aún no tienes una cuenta? <Link className="link" to="/CrearUsuario">Inscribirse</Link></p>
      

  </DivLogin>
  );
}

export default Login;
