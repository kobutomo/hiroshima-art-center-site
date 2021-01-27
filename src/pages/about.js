import React from "react"
import Layout from "../components/layout.js"
import SectionHeader from "../components/section-header-text"

export default function About() {
  return (
        <Layout>
            <div>
                <SectionHeader text="ABOUT"/>
                <SectionHeader text="ACCESS"/>
                <div style = {{position: "absolute", top: "5000px"}}><SectionHeader text="CONTACT" id = "contact"/></div>
            </div>
        </Layout>
    )
}