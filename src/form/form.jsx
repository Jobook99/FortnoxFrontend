import React from "react";
import "./style.scss";
import ColorPicker from "./colorpicker/colorpicker";
import CountryPicker from "./countrypicker/countrypicker";

export default function form(props) {
    const [nameBorderColor, setNameBorderColor] = React.useState("gray");
    const [weightBorderColor, setWeightBorderColor] = React.useState("gray");
    const [countryMulti, setCountryMulti] = React.useState(1.3);
    const [box, setBox] = React.useState({
        "receiver": "",
        "weight": 0.0,
        "shippingcost": 0.0,
        "red": 250,
        "green": 250
      });
    function selectedColor(red, green) {
        box.red = red;
        box.green = green;
        let newbox = {...box};
        setBox(newbox);
    }
    function selectedCountry(multiplier) {
        setCountryMulti(multiplier);
        console.log(box);
    }
    function calculateShippingcost() {
        box.shippingcost = box.weight*countryMulti;
        let newbox = {...box};
        setBox(newbox);
        console.log(box);
    }
    function onNameChange(ev) {
        box.receiver = ev.target.value;
        let newbox = {...box};
        setBox(newbox);
        console.log(box);
        if(box.receiver == ""){
            setNameBorderColor("red");
        }else{
            setNameBorderColor("gray");
        }
    }
    function onWeightChange(ev) {
        box.weight = ev.target.value;
        let newbox = {...box};
        setBox(newbox);
        console.log(box);
        if(box.weight == "" || box.weight <= 0){
            setWeightBorderColor("red");
        }else{
            setWeightBorderColor("gray");
        }
    }
    function Save() {
        if(box.receiver == ""){
            setNameBorderColor("red");
            alert("Name missing");
        }else if(box.weight == ""){
            setWeightBorderColor("red");
            alert("Weight missing");
        }else if(box.weight <= 0){
            setWeightBorderColor("red");
            alert("Weight can't be negative");
            box.weight = 0;
            let newbox = {...box};
            setBox(newbox);
        }else{
            calculateShippingcost();
            props.createBox(box);
        }
    }
    return<div className="form">
        <p>Name</p>
        <input type="text" id="formName" className="formInput" value={box.receiver} onChange={(ev) => onNameChange(ev)} style={{borderColor: nameBorderColor}}/>
        <p>Weight</p>
        <input type="number" id="formWeight" className="formInput" value={box.weight} onChange={(ev) => onWeightChange(ev)} style={{borderColor: weightBorderColor}}/> 
        <p>Color</p>
        <ColorPicker selectedColor={selectedColor} red={box.red} green={box.green}></ColorPicker>
        <p>Country</p>
        <CountryPicker selectedCountry={selectedCountry}></CountryPicker>
        <button className="formSaveButton" onClick={Save}>Save</button>
    </div>
}

