import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BoxTable from './boxtable/boxtable';

Enzyme.configure({adapter: new Adapter()});

const boxList = [{
    "receiver": "Johannes",
    "weight": 10.1,
    "shippingcost": 40.4,
    "red": 250,
    "green": 250
},{
    "receiver": "Elias",
    "weight": 5.2,
    "shippingcost": 20.8,
    "red": 200,
    "green": 250
},{
    "receiver": "Elin",
    "weight": 15,
    "shippingcost": 60,
    "red": 250,
    "green": 250
}];

const boxes = shallow(<BoxTable boxes={boxList}/>);

test('check list map to tabel', () => {
    boxList.forEach(box => {
        expect(
        boxes.contains(<tr><th>{box.receiver}</th><th>{box.weight}kg</th><th style={{backgroundColor: "rgb("+box.red+", "+box.green+", 0)"}}></th><th>{box.shippingcost}SEK</th></tr>));
    });
});
test('check total weight', () => {
    var totalWeight = 0.0;    
    boxList.forEach(box => {
        totalWeight += box.weight;
    });
    expect(boxes.contains(totalWeight+"kg"));
});
test('check total shippingcost', () => {
    var totalShippingcost = 0.0;    
    boxList.forEach(box => {
        totalShippingcost += box.shippingcost;
    });
    expect(boxes.contains(totalShippingcost.toFixed(2)+"kg"));
});