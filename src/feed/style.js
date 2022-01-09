import styled from 'styled-components';



export const MainContent = styled.main`

display: flex;
flex-direction: column;
align-items: center;
width: 90%;
margin: 0 auto;

@media (max-width: 768px){
    flex-direction: column;
    justify-content: center;
   
}

`;

export const Content = styled.section`
width: 90%;
display: flex;

@media (max-width: 768px){
    flex-direction: column;
    align-items: center;
}

`;

export const Navigation = styled.nav`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
`;

export const CampoTexto = styled.input`
width: 80%;
height: 40px;
margin: 10px;
border-radius: 5px;
::placeholder {
    padding: 30px;
}
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

div {
    display: flex;
    width: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
}

`;

export const Filters = styled.div `
width: 20%;
border-radius: 5px;
border: 1px solid grey;
height: 100%;
padding: 10px;
margin: 10px;

label {
    margin-left: 10px;
}

@media (max-width: 768px){
    width: 40%;
}

 

`;

export const CardsContent = styled.div`
 display: flex;
flex-wrap: wrap;
justify-content: center;
width: 70%;


`;

