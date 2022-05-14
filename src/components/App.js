import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar"
import ImageList from "./ImageList";


// class App extends React.Component {
//     onSearchSubmit(term){
//         axios
//         .get("https://api.unsplash.com/search/photos", {
//             params: {query: term},
//             headers: {
//                 Authorization: "Client-ID 02I8FQ9uaVaAUS02-3etTBpDVaJtMtgolfRI1ikDFGo"
//             }
//         })
//         .then((response)=> {
//             console.log(response.data.results);
//         })
//     }


class App extends React.Component {

    state = { images: []}

    onSearchSubmit = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: {query: term, per_page: 20},
        });

        this.setState({images: response.data.results});
    }


    render(){

        return (
            <div>
            <Navbar />
            <SearchBar runOnSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images} />
            <Footer />
            </div>
        )
    }
}

export default App