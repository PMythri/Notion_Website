import React from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather/dist";
import  Card from "../Card";
function Board(){
    return(
        <div className="board">
            <h1>board</h1>
            <div className="board_top">
                <p className="board_top_title">To Do
                <span>2</span>
                </p>
                <MoreHorizontal></MoreHorizontal>
            </div>
            <div className="board_cards">
            <card/>
            </div>     
        </div>    
    );
}
export default Board;
