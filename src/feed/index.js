
import {useEffect, useState} from 'react';
import produtos from '../JSON/api';
import './estilo.css';
import {
MainContent,
Navigation,
Content,
CampoTexto,
Card,
Filters,
CardsContent
} from '../feed/style';



const  AllCat = ['Limpar filtros', ...new Set(produtos.map(item => item.disponibilidade))];
const  AllCat2 = ['Limpar filtros', ...new Set(produtos.map(item => item.preço))];

export default function Feed(){
    const [carrinhoDado, setCarrinhoDado] = useState(produtos);
    const [carrinhoDadoNew, setCarrinhoDadoNew] = useState(produtos);
    const [reset, setReset] = useState(AllCat)
    const [search, getSearch] = useState('')
    const [price, setPrice] = useState(AllCat2)
    const title = document.title = 'loja de conveniencia'

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
        if(par === 'Limpar filtros'){
            setCarrinhoDado(carrinhoDadoNew);
            return;
        } 
        else {

    const filtrado = produtos.filter(item => item.preço === par); //filtra o produto pelo parametro passado
    const filtering = [...carrinhoDado, ...filtrado]; 
    const test = [...new Set(filtering)];
    const conv = JSON.stringify(carrinhoDado);
    const converter = conv.includes(par);
    if(converter){
        const filtrado1 = carrinhoDado.filter(item => item.preço !== par);
        const filtering = [ ...filtrado1]; 
        const test1 = [...new Set(filtering)]
        setCarrinhoDado(test1)
        return
    }

    setCarrinhoDado(test)

 
     

    //setCarrinhoDado(test);
    
    }
    

    }
  // {reset.map((categoria, index)=>{ return <button onClick={()=>filter(categoria)}>{categoria}



    return(
    <MainContent>
        <Navigation>
          <CampoTexto value={search} onChange={(e)=> {getSearch(e.target.value)} } type="text"
                 className="busca"
                 placeholder="Buscar postagem por nome de usuário"
                 />
          </Navigation>
        <Content>
          
     <Filters>   
            {price.map((preço)=>{
            return( 
            <div>
            <input 
            onClick={()=>filter(preço)}
            type="checkbox" id="scales" name="scales"
            />

            <label for="scales">{preço}</label>
            </div>
            )
            
        })}
       
        </Filters>
          
       
            <CardsContent>
                
                {carrinhoDado.filter((busca)=>{
                    if(search === ""){
                        return busca
                    } else if(
                        busca.nome.toLowerCase().includes(search.toLowerCase())) {
                            return busca
                        }
                }).map((e)=>{
                    return(
                        <Card key={e.id}>
                            <img src={e.img}/>
                            <span>{e.nome}</span>
                            <span>R$ {e.preço}</span>
                            <span>{e.disponibilidade}</span>
                            <br/>
                            <button onClick={ ()=>carrinho(e) }>Adicionar ao carrinho</button>
                        </Card>
                    )
                })}
            </CardsContent>
            </Content>
            </MainContent>
    )

}