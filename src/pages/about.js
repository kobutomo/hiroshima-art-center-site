import React from "react"
import Layout from "../components/layout.js"
import SectionHeader from "../components/section-header-text"
import style from "./about.module.css"
import map from "../assets/map.png"
import room from "../assets/aboutroompng.png"

export default function About() {
  return (
        <Layout>
            <div>
                <div>
                    <SectionHeader text="ABOUT"/>
                    <div style={{position:"relative", paddingTop: "22px", paddingBottom: "180px"}}>
                        <img src = {room} alt = "Access" className = {style.room}></img>
                        <div className={style.roomTextBox}>
                            <p className={style.roomText}>広島芸術センターは広島在住の<br/>
                                若手芸術家たちによって<br/>
                                2010年から運営されています。<br/>
                                ギャラリーとアトリエを備えており、<br/>
                                広島の芸術家の発表と制作の場として<br/>
                                活用されています。
                                </p>
                        </div>
                    </div>
                </div>
                <div className = {style.mapContainer}>
                    <SectionHeader text="ACCESS"/>
                    <div>
                        <img src = {map} alt = "Access" className = {style.map}></img>
                        <div>
                            <p className = {style.mapTextBold}>
                            広島芸術センター</p>
                            <p className = {style.mapText}>
                            〒730-0825<br/>
                            広島市中区光南2丁目17-1小中ビル1階<br/>
                            <br/>
                            広島バス24番吉島線<br/>
                            「吉島病院入口」より徒歩5分<br/>
                            ※駐車場はございません<br/>
                            <br/>
                            12:00-17:00　不定休
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <SectionHeader text="CONTACT" id = "contact"/>
                    <div>
                        <p style = {{fontSize: "18px", textAlign: "center", letterSpacing: "7px"}}>
                            hiroshima.geisen@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}