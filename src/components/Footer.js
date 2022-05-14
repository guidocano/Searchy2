import React from "react";
import "./Styles.css"

class Footer extends React.Component {


    render() {
        return(
            <footer>
                <div className="footerbox">
                    <div className="left">
                        <a href="index.html">About</a>
                        <a href="index.html">Advertising</a>
                        <a href="index.html">Business</a>
                        <a href="index.html">How Search works</a>
                    </div>
        
                    <div className="right">
                        <a href="index.html">Privacy</a>
                        <a href="index.html">Terms</a>
                        <a href="index.html">Settings</a>
                </div>
                </div>
    
            </footer>
        )
    }
}

export default Footer;