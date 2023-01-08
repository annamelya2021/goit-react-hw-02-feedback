import PropTypes from 'prop-types';
import css from './Section.module.css';
import { FaCheck } from 'react-icons/fa';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        <FaCheck size="20px" color="blue" /> {title}
      </h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
