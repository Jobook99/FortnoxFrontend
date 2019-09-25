import React from "react";
import "./style.scss";

export default function BoxTable(props) {
    const [noBlue, setNoBlue] = React.useState(0);
    
    function Box(props){
        return<tr><th>{props.receiver}</th><th>{props.weight}kg</th><th style={{backgroundColor: "rgb("+props.red+", "+props.green+", "+noBlue+")"}}></th><th>{props.shippingcost}SEK</th></tr>
    }

    let boxTableRows = props.boxes.map((b,i) => <Box key={b.id} receiver={b.receiver} weight={b.weight} red={b.red} green={b.green} shippingcost={b.shippingcost}></Box>);

    const totalWeight = props.boxes.reduce((totalWeight, box) => totalWeight + box.weight, 0.0);

    const totalCost = props.boxes.reduce((totalCost, box) => totalCost + box.shippingcost, 0.0);


    return<table>
        <tr><th>Receiver</th><th>Weight</th><th>Color</th><th>Shippingcost</th></tr>
        {boxTableRows}
        <tr><th>Tolal:</th><th>{totalWeight}kg</th><th></th><th>{totalCost.toFixed(2)}SEK</th></tr>
    </table>
}