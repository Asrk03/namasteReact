import React from "react";
import {Outlet} from "react-router-dom";

const About = ()=>(
    <>
    <div className="About">
        <p>This is Arnab making Food Villa using react only.</p>
        <Outlet name = {"Arnab Sarkar"}/>
    </div>
    </>
)

export default About;