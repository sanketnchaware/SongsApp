import React, { useState, useEffect, useContext } from 'react'

import { Link } from "react-router-dom"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    a{
        text-decoration: none;
        font-size:1.5rem;
        margin: 0.5rem;
    }
    
`

export const Navbar = () => {





    return (
        <div>
            <Div>
                <Link to="#">Made in Heaven</Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </Div>
        </div>
    )
}
