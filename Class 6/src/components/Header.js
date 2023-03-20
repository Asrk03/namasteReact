import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="flex justify-between">
            <h1 className="flex py-4 text-3xl"><Link to = "/">Food Villa</Link></h1>
            <div className="nav-items">
                <ul className="flex py-6">
                    <li className="px-2">
                    <Link to="/" >Home</Link>
                    </li>

                    <li className="px-2">
                    <Link to = "/about" >About</Link>
                    </li>

                    <li className="px-2">Contact</li>
                    
                    <li className="px-2">Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;