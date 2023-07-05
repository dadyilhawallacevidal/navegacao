import React from "react";
import "./Menu.css";
const Menu = props => {

    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicício</a>
                    </li>
                    <li>
                        <a href="/About">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>);
}



export default Menu;