import React from "react"
import styles from './layout.module.css'
import Navbar from './navbar.js'




export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className = {styles.container}>{children}</div>
            <div className = {styles.bottomContainer}>
                    <div className={styles.bottom}><p>News</p></div>
                    <div className={styles.bottom}><p>Exhibition</p></div>
                    <div className={styles.bottom}><p>About</p></div>
                    <div className={styles.bottom}><p>Facebook</p></div>
                    <div className={styles.bottom}><p>Youtube</p></div>
                    <div className={styles.bottom}><p>Contact</p></div>
            </div>
        </div>
    )
}