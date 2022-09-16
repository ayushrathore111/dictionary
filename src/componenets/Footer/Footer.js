import React from "react";
import "./Footer.css";

const Footer = () => {
    return ( <
        div className = "footer" >
        <
        hr style = {
            { width: "90%", marginTop: 20 }
        }
        /> <
        span className = "name" >
        Made by { " " } <
        a href = "https://ayushrathore111.github.io/portfolio/"
        target = "__blank" >
        Roadside Coder <
        /a> < /
        span > <
        div className = "iconContainer" >
        <
        a href = "https://www.instagram.com/ayushrathore168/"
        target = "__blank" >
        <
        i className = "fab fa-instagram-square fa-2x" > < /i> < /
        a > <
        a href = "https://www.linkedin.com/in/ayush-rathore-5404b0223/"
        target = "__blank" >
        <
        i className = "fab fa-linkedin fa-2x" > < /i> < /
        a > <
        a href = "https://ayushrathore111.github.io/portfolio/"
        target = "__blank" >
        <
        i className = "fab fa-youtube fa-2x" > < /i> < /
        a > <
        /div> < /
        div >
    );
};

export default Footer;