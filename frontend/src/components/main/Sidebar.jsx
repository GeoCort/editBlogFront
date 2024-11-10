import { useState } from "react";
import { CiLogout, CiViewList, CiPen } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import falconLogo from "../../assets/falconLogo.webp"
export default function Sidebar(props){
   const [expanded, setExpanded] = useState(false);
     return(
         <section className={`sidebar`}>
            <div className="sidebar-header">
               <h2 className="sidebar-header-h2">Falcons Nest</h2>
               <div className="sidebar-img">
                  <img className="sidebar-img-static" src={falconLogo}/>
               </div>
            </div>
            <ul className="sidebar-container">
            <li className="sidebar-link"><CiPen className="icon"/></li>
               <li className="sidebar-link"><CiViewList className="icon" /></li>
               <li className="sidebar-link"> <TiMessages className="icon" /></li>
            </ul>
            <footer className="sidebar-footer"><CiLogout className="icon"/></footer>
         </section>
     )
}