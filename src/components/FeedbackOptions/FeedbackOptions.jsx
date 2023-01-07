import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, LeaveFeedbackFn }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button key={option} onClick={() => LeaveFeedbackFn(option)}>
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
