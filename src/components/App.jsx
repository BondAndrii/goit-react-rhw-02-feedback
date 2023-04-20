import React from "react";

import { Component } from "react";

import { Buttons } from "components/Buttons/Buttons";

import { Statistics } from "components/Statistics/Statistics";

import { Section } from "./Section/Section";



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
        // console.log(total);
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
            <Section title="Please leave feedback">
              <Buttons priClick={this.handleClick} ps={this.state} /> 
            </Section>
            {/* <Buttons priClick={this.handleClick} ps={this.state} />  */}
            <Section title="Statistics">
                <Statistics
                    ps={this.state}
                    total={this.countTotalFeedback()}
                    positive={this.countPositiveFeedbackPercentage()}
              />
            </Section>
            </>
        )
        }
}
