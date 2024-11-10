import { useEffect, useState } from "react"
import react from "../../assets/react.svg"
import Sidebar from "./Sidebar"
import Edit from "./Edit"
export default function Body(props){
    return(
    <section className="grid">
        <Sidebar/>
        <Edit/>
    </section>
    )
}