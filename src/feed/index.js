
import {useState} from 'react';
import produtos from '../JSON/api';
import './estilo.css';




const  AllCat = ['All', ...new Set(produtos.map(item => item.disponibilidade))];


export default function Feed(){


    const [carrinhoDado, setCarrinhoDado] = useState(produtos);
    const [reset, setReset] = useState(AllCat)
    const [search, getSearch] = useState('')
    function carrinho(e){
        
        
        const myList = localStorage.getItem('produtos'); //produtos estarão em formato de string
        let pinnedProducts = JSON.parse(myList) || [];
        const hasProduct = pinnedProducts.some((product)=>product.id == carrinhoDado.id);

        if(hasProduct){
            alert('Voce já possui esse item no seu carrinho');
            return;
        }
        pinnedProducts.push(e);
        localStorage.setItem('produtos', JSON.stringify(pinnedProducts));
        alert('Produto adicionado ao carrinho');

    }

    function filter(par){
        if(par === 'All'){
            setCarrinhoDado(produtos);
            return;
        } 
        const filtrado = produtos.filter(item => item.disponibilidade === par);
        setCarrinhoDado(filtrado);

    }
  

    return(
        <div>
     <div className="botoes">   {reset.map((categoria, index)=>{
            return <button onClick={()=>filter(categoria)}>{categoria} </button>
                
            
        })}</div>
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