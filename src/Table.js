import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Table = () => {
   return (
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Region</th>
           <th>Memory</th>
           <th>CPUs</th>
           <th>Disk Size</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
         </tr>
       </tbody>
     </table>
   );
 }
 
 export default Table