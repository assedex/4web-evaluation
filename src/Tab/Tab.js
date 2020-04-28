//la recherche et le choix de la taille du tableau ne marchent pas.


import React from 'react';
import peoples from '../people.json';
import './Tab.css';
import Pagination from "react-js-pagination";
const columnHeader =["Id","Prenom","Nom","Email","Genre"];
export default class Tab extends React.Component{
   constructor(props){
       super(props);
       this.state={
           tableData:peoples.data,
           currentRowData:[],
           switchSort:false,
           activePage: 1,
           itemLength:0,
       }
       this.generateHeader = this.generateHeader.bind(this);
       this.generateTableData = this.generateTableData.bind(this);
       
       this.handlePageChange = this.handlePageChange.bind(this);
   }
   
componentDidMount(){
    let totalItemsCount = this.state.tableData.length;
    let currentRowData = this.state.tableData.slice(0,5);
    this.setState({
        currentRowData,
        itemLength:totalItemsCount
    })
}


   generateHeader(){
       let res=[];
     for(var i =0; i < columnHeader.length; i++){
         res.push(<th key={columnHeader[i]}>
             {columnHeader[i]}
             </th>)
     }
     return res;
   }
   generateTableData() {
       let res=[];
       let tableData = this.state.currentRowData;
       for(var i =0; i < tableData.length; i++){
           res.push(
            <tr key={i}>
           <td key={tableData[i].id}>{tableData[i].id}</td>
           <td key={tableData[i].prenom}>{tableData[i].prenom}</td>
           <td key= {tableData[i].nom}>{tableData[i].nom}</td>
           <td key={tableData[i].email}>{tableData[i].email}</td>
           <td key={tableData[i].genre}>{tableData[i].genre}</td>
           </tr>
           )
       }
       return res;
   }

   

   handlePageChange(pageNumber) {
    let upperLimit = parseInt(pageNumber)*5;
    let lowerLimit = upperLimit - 5;
    let data =[];
    if(upperLimit <= this.state.itemLength){
       data = this.state.tableData.slice(lowerLimit,upperLimit);
    }else{
       data = this.state.tableData.slice(lowerLimit);
    }
    this.setState({
        currentRowData:data,
        activePage:pageNumber
    })
  }
  

  
   render(){
      return(
         <div>
             <div>
               <div style={{marginTop: "32px", marginLeft:"10px"}}>
                 <input type="search" id="search" name="" placeholder="Rechercher dans le tableau" onChange={this.handleSearch}/>
               </div>
               <div>
                 <label for="size-select">Choisir la taille à afficher : </label>
                 <select name="size" id="size-select">
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="20">20</option>
                   <option value="50">50</option>
                 </select>
               </div>
                <table className="table  table-hover">
                  <thead>
                    <tr>
                       {this.generateHeader()}
                    </tr>
                  </thead>
                  <tbody>
                    {this.generateTableData()}
                  </tbody>
                </table>
              </div>
          <div>
      
    <Pagination

    activePage={this.state.activePage}
    itemsCountPerPage={5}
    totalItemsCount={this.state.itemLength}
    pageRangeDisplayed={5}
    onChange={this.handlePageChange.bind(this)}
    />
    </div>
      </div>
       )
   }
}