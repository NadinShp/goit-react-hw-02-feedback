import 'modern-normalize/modern-normalize.css';
import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  addFeedback = (event) => {
    const value = event.target.dataset.value;
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };
  countTotalFeedback = () => {
    const totalValue = Object.values(this.state).reduce((acc, value) => acc += value, 0);
    return totalValue;
  }
  countPositiveFeedbackPercentage = (count) => {
    const { good } = this.state;
    const PositiveFeedbackPercentage = Math.floor(good * 100 / count);
    return PositiveFeedbackPercentage;
  }
  checkRendering = () => {
    const values = Object.values(this.state).find(value => !!value);
    return values;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const valueForCheckingRendering = this.checkRendering();
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
        </Section>
        <Section title='Statistics'>
          {valueForCheckingRendering
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={totalFeedbacks && good
                ? this.countPositiveFeedbackPercentage(totalFeedbacks)
                : 0}
              />
            : <Notification message="No feedback given"/>
          }
        </Section>
      </>
    );
  }
}

export default App;

