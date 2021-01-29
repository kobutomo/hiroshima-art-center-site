import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.css'
import logo from "../assets/hiroshimageisenn-logo-transparent.png"

export default function Navbar()
{
    return(
        <nav className = {styles.nav}>
            <h1 className = {styles.navHeader}>
                <Link href = "/"><a><img src={logo} alt="hiroshimageisenn logo" className={styles.logo}></img></a></Link> 
            </h1>
        </nav>
    )
}

const NavLinks = [
    {
        text: 'News',
        link: '/',
    },
    {
        text: 'Exhibitions',
        link: '/exhibitions',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Contact',
        link: '/about/#contact',
    },
]