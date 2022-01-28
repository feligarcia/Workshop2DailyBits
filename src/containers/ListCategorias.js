import React from 'react';
import styled from "styled-components";
import Navinferior from '../components/Navinferior';
import Listatemas from '../components/Listatemas';

export const DivCategorias = styled.div`
width:100vw;
height:90vh;
position: relative;
`


const ListCategorias = () => {
   return (<>
      <DivCategorias>
      <h1>Practica tus conocimientos en la categoría que prefieras.</h1>
      <Listatemas />
      </DivCategorias>
      <Navinferior />
      
      </>
   );
};

export default ListCategorias;
