
import {useContext} from 'react';

import produtos from '../JSON/api';

import {UserContext} from '../contexts/index';

import './estilo.css';


export default function Feed(){

    const {dados, setDados} = useContext(UserContext);

    function carrinho(e){
        localStorage.setItem(e.nome, JSON.stringify(e))
    
    }



    return(
        
            <div className="container-1">
                {produtos.map((e)=>{
                    return(
                        <div key={e.id} className="container-2">
                            <img src={e.img}/>
                            <p>{e.nome}</p>
                            <p>{e.preço}</p>
                            <p>{e.disponibilidade}</p>
                            <br/>
                            <button onClick={()=>carrinho(e)}>Adicionar ao carrinho</button>
                        </div>
                    )
                })}
            </div>
     
    )

}