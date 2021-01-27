import React from "react"
import styles from './layout.module.css'
import Navbar from './navbar.js'


export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className = {styles.container}>{children}</div>
        </div>
    )
}