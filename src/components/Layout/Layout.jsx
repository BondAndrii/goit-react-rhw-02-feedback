import React from "react";

import { Component } from "react";

import { Buttons } from "components/Buttons/Buttons";

export class Layout extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    hendleClick() {
        console.log("жмяк")
    }
    render(){
        return (
            <>
                <h2>begin</h2>
                <Buttons onClick={this.handleClick} ps={this.state } />
            </>
        )
        }
}