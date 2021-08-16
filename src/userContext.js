import React, {useState} from 'react'

let UserContext = React.createContext();


export default UserContext;

export const UserProvider =({children}) => {
    const [userList, SetUserList] = useState([])
    return <UserContext.Provider value={{userList, setUserList}}>
        {children}
    </UserContext.Provider>

}
