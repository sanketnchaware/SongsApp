import React, { useState, useEffect, useContext } from 'react'
import { Navbar } from "./Navbar"
import { AlbumContext } from "../contexts/AlbumContext";
import styled from "styled-components"

const InputDiv = styled.div`
    border:1px solid darkcyan;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    padding:0.5rem;
    align-items:center;
`
const DataContainer = styled.div`

padding: 0.5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
text-align: center;
div{
    padding:0.5rem;
    border:1px solid red;
}
`


export const Home = () => {

  

    return (
        <div>
            <Navbar />
            <InputDiv>

                <div>
                    <label htmlFor="">Search Album: </label>
                    <input type="text" placeholder="Search Albums"  />
                    
                </div>

                <div>
                    <label htmlFor="">Sort by Genre: </label>
                    <select name="" id="">
                        <option value="">Select Genre</option>
                        <option value="mashups">Mashup</option>
                        <option value="remix">Remix</option>
                        <option value="dj">DJ</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Sort by Year: </label>
                    <select name="" id="">
                        <option value="">Select Year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2023">2023</option>
                    </select>


                </div>

            </InputDiv>


            <DataContainer>
                {/* {
                    data.map((item) => {

                        return (
                            <div>

                                <h2> {item.name}</h2>

                                <h3>{item.artist.name}</h3>

                                <h4>{item.songs.length}</h4>

                            </div>
                        )
                    })
                } */}
            </DataContainer>


        </div>
    )
}
