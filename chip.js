import React from 'react';
import{X} from "react-feather";
import'./chip.css';
function chip(props){
    return(
        <div className="chip" style={{backgroundColor:props.color}}>
            {props.text}
            {props.close && <X on Click={props.onClose ? props.close():""}/>}
        </div>
    );

}
export default chip;