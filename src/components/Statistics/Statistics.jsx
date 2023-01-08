import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { FaGrimace, FaGrinHearts, FaGrinBeamSweat } from 'react-icons/fa';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentageFeedback,
}) => {
  return (
    <div className={css.statistics}>
      <li>
        <FaGrinHearts className={css.icon} size="15px" color="orange" />
        Good: {good}
      </li>
      <li>
        <FaGrinBeamSweat className={css.icon} size="15px" color="green" />
        Neutral: {neutral}
      </li>
      <li>
        <FaGrimace className={css.icon} size="15px" color="red" />
        Bad: {bad}
      </li>
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
