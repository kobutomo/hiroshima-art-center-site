import React from "react"
import { Link } from "gatsby"
import styles from './navbar.module.css'
import logo from "../assets/hiroshimageisenn-logo-transparent.png"

export default function Navbar()
{//.
    return(
        <nav className = {styles.nav}>
            <h1 className = {styles.navHeader}>
                <Link href = "/"><a><img src={logo} alt="hiroshimageisenn logo" className={styles.logo}></img></a></Link> 
            </h1>
            <ul className = {styles.navMenu}>
                {
                    NavLinks.map((item, index) => {
                        return(
                            <li key = {index} className = {styles.navLinkBox}>
                                <Link href = {item.link}><a className = {styles.navItem}>{item.text}</a></Link>
                            </li>
                        )
                    })
                }
                <li><a href = "https://www.facebook.com" className = {styles.navItem}>Facebook</a></li>
                <li><a href = "https://www.youtube.com" className = {styles.navItem}>Youtube</a></li>
            </ul>
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
        link: '#contact',
    },
]