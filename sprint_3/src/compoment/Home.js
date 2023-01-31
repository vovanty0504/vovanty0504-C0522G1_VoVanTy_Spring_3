// import React, {Component} from 'react';
// import axios from 'axios';
// import TableRow from './TableRow';
//
// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {laptop: []};
//     }
//     componentDidMount() {
//         axios.get('http://localhost:8080/api/laptop/list')
//             .then(response => {
//                 console.log(response.data);
//                 this.setState({laptop: response.data});
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
//
//
//     tabRow() {
//         return this.state.laptop.map(function (object, i) {
//             return <TableRow obj={object} key={i}/>;
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h3 align="center">Persons List</h3>
//                 <table className="table table-striped" style={{marginTop: 20}}>
//                     <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Company</th>
//                         <th>Age</th>
//                         <th colSpan="2">Action</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.tabRow()}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
