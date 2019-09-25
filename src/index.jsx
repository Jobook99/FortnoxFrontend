import React from "react";
import ReactDOM from "react-dom";
import Facade from "./facade/facade";
import Form from "./form/form"; 
import BoxTable from "./boxtable/boxtable"; 
import "./style.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App(params) {
    const [boxes, setBoxes] = React.useState(null);
    async function getAll() {
        let data = await new Facade().GetAll();
        setBoxes(data);
        return data;
    }
    async function createBox(newData) {
        let data = await new Facade().CreateBox(newData);
        setBoxes(data);
        return data;
    }
    if(boxes == null){
        getAll();
    }

    function AddBox() {
        return <Form createBox={createBox}></Form>;
    }
      
    function ListBoxes() {
        return <BoxTable boxes={boxes}></BoxTable>;
    }
      
    return (
    <Router>
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/addbox/">Add box</Link>
                    </li>
                    <li>
                        <Link to="/listboxes/">Box list</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/addbox/" component={AddBox}/>
            <Route path="/listboxes/" component={ListBoxes}/>
        </div>
    </Router>
    );
}
ReactDOM.render(<App/>, document.getElementById("main"));
