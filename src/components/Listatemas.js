import React from 'react';
import html5 from '../assets/images/html5.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';



export const DivCenter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-top: 25px;
height: fit-content;
`
export const Divcon = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;

`
export const Styledh = styled.h2`
    color:white ;
    text-align: center;
`;

export const StyledDivimg = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height:100%;
    justify-content: space-evenly;
    padding: 40px;
    
`;

export const Styledimg = styled.img`
    min-width: 70px;
    max-width: 70px;
`;
const Listatemas = () => {

    return (
        
            <StyledDivimg>
                        <Divcon>  
                        <CircularProgressbarWithChildren value={25}>
                        <Styledimg src={html5} alt="...." />
                        </CircularProgressbarWithChildren >
                        </Divcon>
                <Divcon>  
                <CircularProgressbarWithChildren value={50}>
                <Styledimg src={css} alt="...." />
                </CircularProgressbarWithChildren>
                </Divcon>
                        <Divcon>  
                        <CircularProgressbarWithChildren value={90}>
                        <Styledimg src={js} alt="...." />
                        </CircularProgressbarWithChildren>
                        </Divcon>

            </StyledDivimg>
       
    );
};

export default Listatemas;
