
import {useState, useEffect} from 'react'


export default function Carrinho(){
    const[dados, setDados] = useState([]);




    useEffect(()=>{

        const myProducts = localStorage.getItem('produtos');
        setDados(JSON.parse(myProducts) || []);
        
    },[]);



   
    return(
        <div>
       
        <h1>Produtos no carrinho</h1>

            <ul>
                {dados.map((item)=>{
                    return(
                        <li key={item.nome}>
                            <p>{item.nome}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}