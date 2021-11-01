import {useState, createContext} from 'react';


export const UserContext = createContext({});


function UserProvider({children}){

const [dados, setDados] = useState(['']);




    return(
        <UserContext.Provider value={{ dados, setDados}}>
            {children} 
        
        </UserContext.Provider>
    )
}


export default UserProvider;