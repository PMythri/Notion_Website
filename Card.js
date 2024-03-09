import React from 'react'
import './Card.css'
import chip from "./chip";
import { MoreHorizontal } from 'react-feather/dist';
function Card(){
    return(
        <div className='card'>
    <div className='card_top'>
        <div className='card_top_labels'>
         <chip text="Frontend" color="green"/>
        </div>
        <MoreHorizontal></MoreHorizontal>
    </div> 
        </div>
    )
}
export default Card;