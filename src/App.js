import React from 'react';
import './App.css';
import ItemList from './ItemList';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.UpdateItem=this.UpdateItem.bind(this);
  }
handleInput(e){
  this.setState({
    currentItem:{
      text:e.target.value,
      key:Date.now()
    }
  })
}
addItem(e){
  e.preventDefault();
  const newItem=this.state.currentItem;
  console.log(newItem);
  if(newItem.text!==""){
    const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,
      currentItem:{
        text:'',
        key:''
      }
    })
  }
}
deleteItem(key){
  const filteredItems=this.state.items.filter(item=>
    item.key!==key);
    this.setState({
      items:filteredItems,
    })
}
UpdateItem(text,key){
  const items=this.state.items;
  items.map(item=>{
    if(item.key===key){
      item.text=text;
    }
  })
  this.setState({
    items:items
  })
}
  render (){
    return (
      <div className="App">
        <header>
          <form id="form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter your task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <ItemList items={this.state.items}
        deleteItem={this.deleteItem}
        UpdateItem={this.UpdateItem}></ItemList>
      </div>
    );
  }
}

export default App;
