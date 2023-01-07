import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

// console.log(FeedbackOptions);

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedbackFn = optionButtonName => {
    this.setState(prevState => {
      return { [optionButtonName]: prevState[optionButtonName] + 1 };
    });
  };

  render() {
    return (
      <div className="">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            LeaveFeedbackFn={this.LeaveFeedbackFn}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </div>
      //  <button type="button" onClick={this.LeaveFeedbackClick}>
      //   Good
      // </button>
      // <button type="button" onClick={this.LeaveFeedbackClick}>
      //   Neutral
      // </button>
      // <button type="button" onClick={this.LeaveFeedbackClick}>
      //   Bad
      // </button>

      // <h2>Statistics</h2>
      // <ul>
      //   <li>Good:{this.state.good}</li>
      //   <li>Neutral:{this.state.neutral}</li>
      //   <li>Bad:{this.state.bad}</li>
      // </ul>
    );
  }
}

export default App;
