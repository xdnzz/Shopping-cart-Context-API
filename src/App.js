import UserProvider from './contexts/index';
import Feed from './feed/index';
import Carrinho from './carrinho/index';


export default function App(){
  return (

    <UserProvider> 
      <Feed/>
    </UserProvider>
  )
}