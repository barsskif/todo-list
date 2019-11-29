import React from 'react'
import "./Header.css"
import Date from './MyDate'

function Header (){
    return(
        <>
        <header className = "navbar"> Мой Список дел!</header>
        <Date />
        </>
    )
}


export default Header;