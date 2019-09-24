import React from "react";
import "./style.scss";

export default function ColorPicker(props) {
    const [dropdownColor, setDropdownColor] = React.useState(false);

    function Color(props) {
        return <button onClick={() => selectedColor(props.red, props.green)} className="color" style={{backgroundColor: "rgb("+props.red+", "+props.green+", 0)"}}></button>
    }
    function ColorPickerBoxContiner() {
        if(dropdownColor){
            return <div className="colorPickerBox">
                <Color red={250} green={0}></Color>
                <Color red={250} green={50}></Color>
                <Color red={250} green={100}></Color>
                <Color red={250} green={150}></Color>
                <Color red={250} green={200}></Color>
                <Color red={250} green={250}></Color>
                <Color red={200} green={250}></Color>
                <Color red={150} green={250}></Color>
                <Color red={100} green={250}></Color>
                <Color red={50} green={250}></Color>
                <Color red={0} green={250}></Color>
            </div>
        }
        return <div></div>
    }
    function selectedColor(red, green) {
        props.selectedColor(red, green);
        setDropdownColor(false);
    }
    function ColorPickerToggle() {
        if(dropdownColor){
            setDropdownColor(false);
        }else{
            setDropdownColor(true);
        }
    }
    return<div className="ColorPicker">
            <button className="toggleDropnownButton" onClick={ColorPickerToggle} style={{backgroundColor: "rgb("+props.red+", "+props.green+", 0)"}}><em>click to show colorpicker</em></button>
            <ColorPickerBoxContiner></ColorPickerBoxContiner>
        </div>
}