import React from 'react';
import './ItemList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ItemList(props){
    const items=props.items;
    const ItemList=items.map(item=>{
        return <div className="list" key={item.key}>
            <p>
                <input type="text" 
                id={item.key} 
                value={item.text}
                onChange={
                    (e)=>{
                        props.UpdateItem(e.target.value,item.key)
                    }
                }
                />
            <span>
                <FontAwesomeIcon className="faicons" icon="trash"
                onClick={ () => props.deleteItem(item.key)}/>
            </span>
            </p>
        </div>
    })
    return(
        <div>
            {ItemList}
        </div>
    )
}
export default ItemList;