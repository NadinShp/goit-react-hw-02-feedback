import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={styles.statistic__list}>
        <li><p className={styles.static__text}>Good: {good}</p></li>
        <li><p className={styles.static__text}>Neutral: {neutral}</p></li>
        <li><p className={styles.static__text}>Bad: {bad}</p></li>
        <li><p className={styles.static__text}>Total: {total}</p></li>
        <li><p className={styles.static__text}>Positive feedback: {positivePercentage}</p></li>
    </ul>
);

Statistics.defaultProps = {
    positivePercentage: 0,
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number,
};

export default Statistics;