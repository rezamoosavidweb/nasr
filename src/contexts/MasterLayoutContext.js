import React, { createContext, useState, useEffect } from 'react'
import { fetchGet } from '../config/Utils'
const MasterLayoutContext = createContext({
    fruit: []
    // message: "",
    // open: false,
    // handleCloseAlert: () => { }
})

export { MasterLayoutContext }

export default function MasterLayoutContextProvider({ children }) {
    const [myfruit, setMyFruit] = useState([])
    const [selectFruit, setselectFruit] = useState([])
    const [selectId, setSelectId] = useState([])
    useEffect(() => {
        fetchGet('http://dummy.restapiexample.com/api/v1/employees').then(({ responseJSON, status }) => {
            setMyFruit(responseJSON.data);
        })
    }, [])

    return (
        <MasterLayoutContext.Provider value={{
            myfruit, selectFruit, setselectFruit, selectId, setSelectId
        }} >
            {children}
        </MasterLayoutContext.Provider>
    )
}
