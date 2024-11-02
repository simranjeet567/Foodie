import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import cart from "./shopping-cart-icon.jpg";
import yumBitePhoto from "./yumbite photo.jpg";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-object">
              <img className="logo" src={logo} alt="Foodie Logo"></img> 
              <p class='foodie-text'>Foodie</p> 
            </div>
            <div className="navbar-objects">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li><img className="cart-logo" src={cart} alt="Cart Logo"></img></li>
                </ul>
            </div>
        </div>
    );
};


//to add the css to the card1 we are using the js object syntax:
const card1Style = {
    backgroundColor: "#FFB6C1"
}

const RestroCardComponent = () => {
    return (
        //here, inline syntax of css is used for the card1.
        <div className="restro-card1" style={card1Style}>
            <img className="card1Photo" src={yumBitePhoto} alt="yumbite photo"></img>
            <h4 className="card1-name">YumBite</h4>
        </div>
    );
};


const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="restro-container">
                <RestroCardComponent />
                <RestroCardComponent />
                <RestroCardComponent />
                <RestroCardComponent />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("rootId"));

root.render(<AppLayout />);