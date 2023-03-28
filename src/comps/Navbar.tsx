import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export default function Navbar() {
    
    return(
   
        <header className="navbar">
            <div className="logo">
                <h1 id="title"><a href='/#1'>Djerba <span>Wonders</span></a></h1>
            </div>
                <nav>
                    <ul>
                        <li><a href="/#2" id="beach"><span className="material-symbols-outlined">beach_access</span></a></li>
                        <li><a href="/#3" id="history"><span className="material-symbols-outlined">museum</span></a></li>
                        <li><a href="/#4" id="culture"><span className="material-symbols-outlined">draw</span></a></li>
                    </ul>
                </nav>
                
            
        </header>

        
    )
}