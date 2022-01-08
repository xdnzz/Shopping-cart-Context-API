import styled from 'styled-components';



export const MainContent = styled.main`

display: flex;
flex-direction: column;
align-items: center;
width: 90%;
margin: 0 auto;

`;

export const Content = styled.section`
width: 90%;
display: flex;

`;

export const Navigation = styled.nav`
width: 90%;
background: red;
display: flex;
align-items: center;
justify-content: center;
`;

export const CampoTexto = styled.input`
width: 80%;
height: 40px;
margin: 10px;
`;


export const Card = styled.div `
border: 1px solid grey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
padding: 10px;
border-radius: 5px;

img {
    width: 100px;
    height: 100px;
}

button {
    margin:  10px;
    border: none;
    border-radius: 3px;
    padding: 8px;
    cursor: pointer;
    background-color: #C0C0C0;
    color: #fff;
}

`;

export const Filters = styled.div `
width: 30%;
border-radius: 5px;
border: 1px solid grey;
height: 100%;
padding: 10px;
margin: 10px;
 

`;

export const CardsContent = styled.div`
 display: flex;
flex-wrap: wrap;
justify-content: center;
`;