import React from "react";
import "./Styles.css"

class SearchBar extends React.Component {

    state = {term: "", classLogo: "logo", classButtons: "buttons", classh1: "h1"};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({classLogo: "logoNew", classButtons: "buttonsNew", classh1: "h1New"})
        this.props.runOnSubmit(this.state.term)
    }
    

    render() {
        return (

            <div className={this.state.classLogo}>

                <div className={this.state.classh1}>
                    <a href="index.html">
                        <span style={{color: "rgb(66, 66, 221)"}}>S</span>
                        <span style={{color: "rgb(22, 122, 216)"}}>e</span>
                        <span style={{color: "rgb(130, 194, 255)"}}>a</span>
                        <span style={{color: "rgb(248, 71, 71)"}}>r</span>
                        <span style={{color: "rgb(255, 179, 66)"}}>c</span>
                        <span style={{color: "rgb(57, 187, 64)"}}>h</span>
                        <span style={{color: "rgb(248, 71, 71)"}}>y</span>
                    </a>
                </div>


                <form onSubmit={this.onFormSubmit}>

                    <i className="fas fa-search" onClick={this.onFormSubmit}></i>
                    
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                        autocomplete="off" 
                        id="fname" 
                        name="fname" />

                    <i className="fas fa-microphone"></i>
                </form>


                <div className={this.state.classButtons}>
        
                    <div className="button" onClick={this.onFormSubmit}>Searchy Search</div>
                    <div className="button" onClick={this.onFormSubmit}>I'm Feeling Lucky</div>

                </div>
            </div>

        )
    }
}

export default SearchBar;