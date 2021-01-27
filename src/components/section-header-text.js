import React from "react"
import headerStyles from "./section-header-text.module.css"

export default function headerText(props)
{
   return <div className = {headerStyles.divStyle}><p className = {headerStyles.textStyle}>{props.text}</p></div>
}