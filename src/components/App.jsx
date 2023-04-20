import React from "react";

import { Component } from "react";

import { Buttons } from "components/Buttons/Buttons";

import { Statistics } from "components/Statistics/Statistics";



export class App extends Component {
    state = {
        Good: 0,
        Neutral: 0,
        Bad: 0,      
    };
    
    handleClick = (evt) => {
    const { name } = evt.target;
    // console.log(name);
    this.setState({ [name]: this.state[name] + 1 })
    };

    countTotalFeedback() {
        const { Good, Neutral, Bad } = this.state;
        const total = Good + Neutral + Bad;
        console.log(total);
        return total;        
    }
    countPositiveFeedbackPercentage() {
        const { Good} = this.state;
        const positive = (Good * 100) / this.countTotalFeedback();
        return positive ? positive : 0 ;
    }
    render() {
        
       
        return (
            <>                              
                <Buttons priClick={this.handleClick} ps={this.state} />                
                <Statistics
                    ps={this.state}
                    total={this.countTotalFeedback()}
                    positive={this.countPositiveFeedbackPercentage()}
                    />
            </>
        )
        }
}
