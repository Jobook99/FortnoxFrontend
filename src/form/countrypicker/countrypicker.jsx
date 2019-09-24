import React from "react";
import "./style.scss";

export default function CountryPicker(props) {
    const [dropdownCountry, setDropdownCountry] = React.useState(false);
    const [country, setCountry] = React.useState("Sweden");

    function CountryBox(props) {
        return<button onClick={() => selectedCountry(props.multi, props.country)} className="countryBox">
            <div className="countryBoxCountry">{props.country}</div>
            <div className="countryBoxMultiplier">{props.multi}</div>
        </button>
    }
    function CountryBoxContiner(props) {
        if(dropdownCountry){
            return <div className="countryBoxContiner">
                <CountryBox country={"Sweden"} multi={1.3}></CountryBox>
                <CountryBox country={"China"} multi={4}></CountryBox>
                <CountryBox country={"Brazil"} multi={8.6}></CountryBox>
                <CountryBox country={"Australia"} multi={7.2}></CountryBox>
            </div>
        }
        return <div></div>
    }
    function CountryToggle() {
        if(dropdownCountry){
            setDropdownCountry(false);
        }else{
            setDropdownCountry(true);
        }
    }
    function selectedCountry(multiplier, country) {
        setCountry(country);
        props.selectedCountry(multiplier);
        setDropdownCountry(false);
    }
    return<div>
        <button className="toggleDropnownButton" onClick={CountryToggle}><div>{country}</div><img src="https://24storage.se/static/media/pil_blue.a546e1ea.svg" alt="Down arrow"/></button>
        <CountryBoxContiner></CountryBoxContiner>
    </div>
}