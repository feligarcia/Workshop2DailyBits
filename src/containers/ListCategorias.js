import React from 'react';
import vuelogo from '../assets/images/vuelogo.png'
import styled from "styled-components";

import './css-tmp.css'

const CateNavbar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items:flex-end;
   margin: 0 2em;
   padding: 1em;
   background-color: gray;
`;
const CateImg = styled.img`
   width: 50px;
   height: 50px;
   object-fit: cover;
`;
const CateDivLink = styled.img`
   background-color: gray;
`;
const JustifyContentCenterDiv = styled.div`
   display: block;
   text-align: center;
`;
const LinkNavbar = styled.a`
   text-decoration: none;
   color: #fff;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


const ListCategorias = () => {
   return (

      <CateNavbar>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt='' />
               <a href="/">Home</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt='' />
               <a href="/">Estadísticas</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
         <CateDivLink>
            <JustifyContentCenterDiv >
               <CateImg src={vuelogo} alt='' />
               <a href="/">Perfil</a>
            </JustifyContentCenterDiv>
         </CateDivLink>
      </CateNavbar>

   );
};

export default ListCategorias;
