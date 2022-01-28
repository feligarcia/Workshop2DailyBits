import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/LogoXL.png'

export const Iniciodiv = styled.div`
background-color:#6B47DC;
width:100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
export const ImgLogoInicio = styled.img`
width: 50%;
height: fit-content;

background-color: inherit;
`

function Inicio() {
  return (<Iniciodiv>

<ImgLogoInicio src={Logo}></ImgLogoInicio>

  </Iniciodiv>);
}

export default Inicio;
