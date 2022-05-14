import React from "react";
import "./Styles.css"

class Navbar extends React.Component {


    render() {
        return(
            <nav>
                <div className="navy-left">
                    <div className="navychild-left"><a href="index.html">ALL</a></div>
                    <div className="navychild-left"><a href="index.html">IMAGES</a></div>
                </div>
        
                <div className="navy">
                    <div className="navychild"><a href="index.html">Smail</a></div>
                    <div className="navychild"><a href="index.html">Images</a></div>
                    <div className="navychild2"><a href="index.html">Sign in</a></div>
                </div>
            </nav>
        )
    }
}

export default Navbar;