import React from 'react';
import Home from "./component/Home";
import About from "./component/About";
import Contract from "./component/Contract";
import {Routes, Route, Link} from 'react-router-dom'
import Button from "bootstrap/js/src/button";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Đại Lợi",
                    "age": 25
                },
                {
                    "id": 2,
                    "name": "Trung Thuyên",
                    "age": 29
                },
                {
                    "id": 3,
                    "name": "Bảo Ân",
                    "age": 30
                },
                {
                    "id": 4,
                    "name": "Ngọc Huy",
                    "age": 25
                },
                {
                    "id": 5,
                    "name": "Duy Quyết ",
                    "age": 10
                },
            ]
        }
    }

    render() {
        return (

            <div>

                <table border={1} >
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends React.Component{
    render() {
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

export default App;
