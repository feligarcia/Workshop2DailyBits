import React from 'react';
import vuelogo from '../assets/images/vuelogo.png'
import styled from "styled-components";



export const CateNavbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items:flex-end;
   margin: 0 2em;
   padding: 1em;
   background-color: gray;
`;
export const CateImg = styled.img`
   width: 50px;
   height: 50px;
   object-fit: cover;
`;
export const CateDivLink = styled.div`
   background-color: gray;
`;
export const JustifyContentCenterDiv = styled.div`
   display: block;
   text-align: center;
`;
export const LinkNavbar = styled.a`
   text-decoration: none;
   color: #fff;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


const ListCategorias = () => {
   return (
      <>
      <h1>Probando conexion</h1>
      <CateNavbar>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt=''></CateImg>
               <a href="/">Home</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt=''></CateImg>
               <a href="/">Estadísticas</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt=''></CateImg>
               <a href="/">Perfil</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
      </CateNavbar>
      </>
   );
};

export default ListCategorias;
