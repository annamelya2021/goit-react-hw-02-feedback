import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

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

  countTotalFeedback = () => {
    // const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const result = Math.round((good / total) * 100);
    return !total ? 0 : result;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <div className="">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            LeaveFeedbackFn={this.LeaveFeedbackFn}
          />
        </Section>
        {}
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentageFeedback={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
