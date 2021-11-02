
import {useEffect, useState} from 'react';

import produtos from '../JSON/api';

import {UserContext} from '../contexts/index';

import './estilo.css';


export default function Feed(){

 

    const [carrinhoDado, setCarrinhoDado] = useState(produtos);

    const [search, getSearch] = useState('')

    function carrinho(e){
        
        
        const myList = localStorage.getItem('produtos');

        let pinnedProducts = JSON.parse(myList) || [];
    
        const hasProduct = pinnedProducts.some((product)=>product.id === carrinhoDado.id);

        if(hasProduct){
            alert('Voce já possui esse item no seu carrinho');
            return;
        }

        pinnedProducts.push(e);

        localStorage.setItem('produtos', JSON.stringify(pinnedProducts));

        alert('Produto adicionado ao carrinho')

       
    }

  
    return(
        <div>
            <input value={search} onChange={(e)=> {getSearch(e.target.value)} } type="text"
                 className="busca"
                 placeholder="Buscar postagem por nome de usuário"
                 />
       
            <div className="container-1">
                
                {carrinhoDado.filter((busca)=>{
                    if(search == ""){
                        return busca
                    } else if(
                        busca.nome.toLowerCase().includes(search.toLowerCase())) {
                            return busca
                        }
                }).map((e)=>{
                    return(
                        <div key={e.id} className="container-2">
                            <img src={e.img}/>
                            <p>{e.nome}</p>
                            <p>{e.preço}</p>
                            <p>{e.disponibilidade}</p>
                            <br/>
                            <button onClick={ ()=>carrinho(e) }>Adicionar ao carrinho</button>
                        </div>
                    )
                })}
            </div>
            </div>
    )

}