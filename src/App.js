import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import SecondPage from './SecondPage.js';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      item:[
        {id: 1, do: 'Task #1', done: false, description: ''},
        {id:2, do: 'Task #2', done: false, description: ''},
        {id: 3, do: 'Task #3', done: false, description: ''},
        {id: 4, do: 'Task #4', done: false, description: ''},
        {id: 5, do: 'Task #5', done: false, description: ''},
        {id: 6, do: 'Task #6', done: false, description: ''},
        {id: 7, do: 'Task #7', done: false, description: ''}
      ]
    }
  }

  addItem(){
    let l = this.state.item.length;
    console.log(l);
    let inputDo = document.getElementsByTagName('input')[0];
    let newId = 0;
    if(l===0){
       newId=0;
    }else{
      newId = (this.state.item[l-1].id)+1; 
    }

    let newItem = [{id: newId, do:'Task #' + newId, done:false}];
    let itemCopy = this.state.item.slice();
    itemCopy = itemCopy.concat(newItem);    
    this.setState({item: itemCopy});
  }
  
  deleteItem(key){
    const index = this.state.item.findIndex(i => i.id===key);
    let newT=this.state.item.slice();
    let newTab = newT.splice(index,1);
    this.setState({item:newT});
  }
  
  render(){
    return(
    <div>
      <h1>To-do List</h1>
      <List item={this.state.item} onDelete={(key)=>this.deleteItem(key)}/>
      <button className='btn3' onClick={()=>this.addItem()}>Add new task</button>
    </div>
   );
  }
}

class List extends React.Component{
  render(){
    let itemsToDisplay = this.props.item.map(i=>{
      return (<ListItem key={i.id} do={i.do} done={i.done} description={i.description} onDelete={()=>this.props.onDelete(i.id)}/>);
    });
    return(
    <ul>
      {itemsToDisplay}
    </ul>
    );
  }
  
};

class ListItem extends React.Component{
  /*Click = (event) => {
    this.setState({time: event.target.innerText})
  };*/
  editItem(){
    window.location.assign('http://localhost:3000/second/');
  };

  render(){
    return(
      <li key={this.props.key} className={this.props.done===true? 'done':null}>
       <input type = "checkbox" defaultChecked ={this.props.done}/>
        <p>{this.props.do}</p>
        <div>
          <button className='btn1' Click={()=>this.editItem()}>Edit</button>
        </div>
        <div>
          <button className='btn2'onClick={()=>this.props.onDelete()}>Delete</button>
        </div>
        
      </li>
    )
  }
};



export default Todo;
