import React from 'react';
import styled from 'styled-components';
import home from '../assets/images/home.png'
import estadisticas from '../assets/images/stattics.png'
import perfil from '../assets/images/perfil.png'


export const CateNavbar = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items:center;
   padding: 1em;
   background-color: #232E35;
   width: 100vw;
   height: 10vh;
   position: absolute;
   bottom:0;
`;
export const CateImg = styled.img`
   width: 25px;
   height: 25px;
   object-fit: cover;
   background-color: inherit;
`;
export const CateDivLink = styled.div`
   background-color: inherit;
`;
export const JustifyContentCenterDiv = styled.div`
   display: flex;
   flex-direction:column;
   text-align: center;
   justify-content:center;
   background-color: inherit;
`;
export const LinkNavbar = styled.a`
   text-decoration: none;
   color: #fff;
   background-color: inherit;
`;

function Navinferior() {

    

  return (<>
    
    <CateNavbar>
       <CateDivLink>
          <JustifyContentCenterDiv >
             <CateImg src={home} alt=''></CateImg>
             <LinkNavbar href="/">Home</LinkNavbar>
          </JustifyContentCenterDiv>
       </CateDivLink>
       <CateDivLink>
          <JustifyContentCenterDiv >
             <CateImg src={estadisticas} alt=''></CateImg>
             <LinkNavbar href="/">Estadísticas</LinkNavbar>
          </JustifyContentCenterDiv>
       </CateDivLink>
       <CateDivLink>
          <JustifyContentCenterDiv >
             <CateImg src={perfil} alt=''></CateImg>
             <LinkNavbar href="/Perfil">Perfil</LinkNavbar>
          </JustifyContentCenterDiv>
       </CateDivLink>
    </CateNavbar>
    </>);
}

export default Navinferior;
