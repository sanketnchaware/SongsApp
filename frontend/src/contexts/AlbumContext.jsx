import React, { useState, useEffect } from 'react'
import { createContext } from 'react';
import axios from "axios"
const AlbumContext = createContext();

const AlbumContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    
    const handleData = (newData) => {
        setData(newData)
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const res = await axios("http://localhost:5415/albums");
        setData(res.data.albums);
    }


    return (
        <AlbumContext.Provider value={{ data, handleData }}>
            {children}
        </AlbumContext.Provider>
    )
}
export { AlbumContext, AlbumContextProvider }
