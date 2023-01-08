import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, LeaveFeedbackFn }) => {
  return (
    <div className={css.listButton}>
      {options.map(option => {
        return (
          <button
            className={css.button}
            key={option}
            onClick={() => LeaveFeedbackFn(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
