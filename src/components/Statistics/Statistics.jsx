import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentageFeedback,
}) => {
  return (
    <div>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback:{positivePercentageFeedback}%</li>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentageFeedback: PropTypes.number.isRequired,
};

export default Statistics;